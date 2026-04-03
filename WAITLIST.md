# Trilogicon — Secure waitlist (Cloudflare Workers + D1 + Turnstile)

This document describes the **Early Trilogicon Waitlist** backend and how it connects to the Vite/React site.

---

## 1. Architecture overview

| Layer | Role |
|--------|------|
| **Browser** | Renders the waitlist form on the homepage (`/#waitlist`), loads Turnstile’s public widget, sends `POST` JSON to the Worker. |
| **Cloudflare Turnstile** | Bot resistance; site key in the page, **secret verified only on the Worker**. |
| **Cloudflare Worker** (`workers/waitlist`) | Single route: `POST /api/waitlist`. Validates origin (CORS allowlist), body size, JSON shape, fields, Turnstile token, optional KV rate limit, then **parameterized D1 insert**. |
| **Cloudflare D1** | SQLite: `waitlist_entries` with unique `email`, server `created_at`, optional `x_handle`, allowlisted `source`. |

**Why separate Worker from Pages?** Keeps API logic in one deployable unit, secrets off the static host, and D1/KV bindings explicit. The Pages app only needs public env vars (`VITE_*`).

**Files (logic per file)**

| File | Purpose |
|------|---------|
| `workers/waitlist/src/index.ts` | Request lifecycle: method/path, CORS, size, JSON parse, field + Turnstile validation, rate limit, `INSERT OR IGNORE`. Generic JSON errors; no stack traces. |
| `workers/waitlist/src/validation.ts` | Allowlisted JSON keys, email/source/x_handle normalization and bounds. Rejects unknown top-level keys (mass-assignment / extra field hardening). |
| `workers/waitlist/src/turnstile.ts` | Fixed `POST` to Cloudflare’s `siteverify` with `application/x-www-form-urlencoded` (no caller-controlled URL → no SSRF from user input). |
| `workers/waitlist/src/rateLimit.ts` | Fixed-window KV counter per `CF-Connecting-IP`. |
| `workers/waitlist/migrations/0001_waitlist.sql` | Schema + unique index on `email` + index on `created_at`. |
| `src/sections/WaitlistSection.jsx` | Frontend form; loads Turnstile script once; submits only over HTTPS from configured origin in production. |

---

## 2. Security design decisions and threat model

**Assets to protect:** Waitlist rows (PII: email), Worker secrets (Turnstile secret), infra abuse (D1 writes, Turnstile quota).

**Trust boundaries:** The browser is untrusted. Only the Worker validates and writes. D1 never sees raw concatenated SQL from users.

| Risk area | Mitigation |
|-----------|------------|
| **Injection (SQL)** | Only `env.DB.prepare(...).bind(?1,…)` — no dynamic SQL from input. |
| **Broken access control** | `POST` only; path fixed; no admin routes in this Worker. |
| **Cryptographic / secrets** | `TURNSTILE_SECRET` via `wrangler secret put`; never in repo or client. |
| **Insecure design** | Duplicate email returns same success body as new signup (`INSERT OR IGNORE` + `{ ok: true }`) to reduce enumeration. |
| **Spam / bots** | Turnstile required; optional KV rate limit per IP after a successful challenge. |
| **Request tampering** | Max body size; strict `Content-Type`; JSON parse with no trusted client `id`/`created_at`; `source` allowlist. |
| **CORS / origin** | Reflect `Access-Control-Allow-Origin` only if `Origin` exactly matches `ALLOWED_ORIGINS`. Missing or wrong `Origin` → `403` (browser forms must send Origin). |
| **SSRF** | Outbound fetch only to fixed Turnstile URL. |
| **Information leakage** | Errors use codes like `invalid_request`, `server_error`; no DB strings or stacks to clients. `console.error` only for non-identifying insert failures. |

**Threat model limits:** Someone who controls a **browser on an allowed origin** can still submit with their own Turnstile solve. CORS + Turnstile + rate limit reduce automated abuse but do not prove human identity at nation-state level.

---

## 3. File / folder structure

```text
workers/waitlist/
  wrangler.toml
  package.json
  tsconfig.json
  migrations/
    0001_waitlist.sql
  src/
    index.ts          # HTTP handler
    types.ts          # Env interface
    validation.ts     # Field + shape validation
    turnstile.ts      # siteverify
    rateLimit.ts      # KV window

src/
  sections/WaitlistSection.jsx
  vite-env.d.ts       # import.meta.env + window.turnstile

.env.example          # VITE_* template at repo root
WAITLIST.md           # This file
```

---

## 4. D1 schema migration SQL

See `workers/waitlist/migrations/0001_waitlist.sql` (applied via Wrangler). Summary:

- `id` — `INTEGER PRIMARY KEY AUTOINCREMENT`
- `email` — `TEXT NOT NULL` + **unique** index
- `x_handle` — nullable
- `source` — `TEXT NOT NULL` (values enforced in Worker)
- `created_at` — `DEFAULT (datetime('now'))` (server clock)

---

## 5–7. Worker, validation, and Turnstile

Implementation lives in `workers/waitlist/src/` as above. **No validation library** — small manual checks only, easier to audit.

---

## 8. Frontend integration

- Homepage: `WaitlistSection` (`/#waitlist`), see `src/sections/WaitlistSection.jsx`.
- Env: `VITE_WAITLIST_API_URL`, `VITE_TURNSTILE_SITE_KEY` (see `.env.example`).
- If unset, the section shows a configuration hint (no broken fetch).

**Body shape (must match Worker):**

```json
{
  "email": "user@example.com",
  "x_handle": "optional_handle",
  "source": "homepage",
  "cf-turnstile-response": "<token>"
}
```

`source` must be one of: `homepage`, `faq`, `x`, `direct` (allowlisted on server).

---

## 9. Environment variables and secrets

### Worker (`wrangler.toml` + secrets)

| Name | Where | Purpose |
|------|--------|---------|
| `ALLOWED_ORIGINS` | `[vars]` in `wrangler.toml` | Comma-separated exact origins (e.g. `https://your.pages.dev,http://localhost:5173`). |
| `TURNSTILE_SECRET` | `wrangler secret put TURNSTILE_SECRET` | Turnstile server verify. |
| `DB` | D1 binding | Automatic via `[[d1_databases]]`. |
| `RATE_LIMIT_KV` | Optional KV binding | Uncomment in `wrangler.toml` when namespace exists. |

### Frontend (Pages / local)

| Name | Purpose |
|------|---------|
| `VITE_WAITLIST_API_URL` | Full URL: `https://<worker>/api/waitlist` |
| `VITE_TURNSTILE_SITE_KEY` | Turnstile **site** key (public). |

---

## 10. Deployment steps

### One-time: D1 database

```bash
cd workers/waitlist
wrangler d1 create trilogicon-waitlist
```

Copy the `database_id` into `wrangler.toml` → `database_id = "..."`.

### One-time: KV (recommended)

```bash
wrangler kv namespace create RATE_LIMIT_KV
```

Put the id in `wrangler.toml` and **uncomment** `[[kv_namespaces]]`.

### Migrate schema

```bash
wrangler d1 migrations apply DB --remote
```

### Turnstile

1. Cloudflare dashboard → Turnstile → create widget (hostname = your Pages domain + localhost for dev if needed).
2. `wrangler secret put TURNSTILE_SECRET` (secret key).

### Worker env

Edit `ALLOWED_ORIGINS` in `wrangler.toml` for production (no trailing slashes).

### Deploy Worker

```bash
npm run deploy
```

Note the `*.workers.dev` URL (or attach a custom route).

### Pages

In the Pages project → Settings → Environment variables, set:

- `VITE_WAITLIST_API_URL` = `https://<your-worker-host>/api/waitlist`
- `VITE_TURNSTILE_SITE_KEY` = site key  

Redeploy Pages so the build embeds these values.

---

## 11. Security review checklist (this implementation)

- [x] Parameterized D1 only  
- [x] No client-controlled timestamps or IDs stored from JSON  
- [x] Allowlisted `source` and top-level JSON keys  
- [x] Email normalized + bounded length; x_handle pattern + length  
- [x] POST only; JSON Content-Type enforced; body size capped  
- [x] Turnstile verified server-side  
- [x] CORS allowlist (exact Origin)  
- [x] Generic error messages; no stack traces in responses  
- [x] Duplicate email: same `{ ok: true }` as new row  
- [x] Turnstile outbound: fixed URL only  
- [x] Optional IP rate limit after successful Turnstile  

**Operational items for you**

- [ ] Replace placeholder `database_id` before production.  
- [ ] Bind KV and uncomment block before high-traffic launch.  
- [ ] Lock `ALLOWED_ORIGINS` to real production + preview origins only.  
- [ ] Rotate Turnstile keys if compromised.  
- [ ] Enable Workers observability / logpush if you need audit trails (avoid logging raw emails in shared logs).  

---

## 12. Suggested improvements for later

- **HMAC-signed `source`** or short-lived nonce from Worker for high-risk campaigns (reduces tampering from other sites if misconfigured CORS — defense in depth).  
- **Double opt-in** email before counting as “confirmed.”  
- **Admin export** via authenticated Worker route or offline Wrangler queries only.  
- **Durable Objects** or **Queues** if you need strict global rate limits beyond KV.  
- **WAF / additional rules** on the zone for `/api/waitlist`.  

---

## Admin: inspect signup count (read-only)

From repo root (or `workers/waitlist`):

```bash
wrangler d1 execute DB --remote --command "SELECT COUNT(*) AS c FROM waitlist_entries;"
```

*(Replace `DB` if you rename the binding.)*

Do **not** paste live exports in public channels.

---

## Final self-audit

### Possible remaining risks

| Risk | Notes |
|------|--------|
| **Origin header spoofing** | Non-browser clients can send any `Origin`; Turnstile still binds to your site key’s hostname for real browser traffic. For API-only abuse, KV + Turnstile cost limits are the main brakes. |
| **KV consistency** | Counters are eventually consistent — brief bursts might exceed nominal limits. |
| **Email deliverability / consent** | This design stores opt-in requests only; legal/compliance (CAN-SPAM, GDPR) is your responsibility. |
| **Enumeration before submit** | Client cannot distinguish duplicate vs new after submit by design; timing side channels are not addressed (low priority for waitlist). |

### What was done to reduce risk

- Server-side validation, allowlists, size limits, parameterized SQL.  
- Turnstile + strict CORS + post-verification rate limit.  
- Fail-closed CORS (no reflected origin = browser blocks).  
- Minimal error surface in JSON responses.  

### What cannot be guaranteed

- Perfect blocking of motivated human attackers with allowed origins.  
- Absence of operational mistakes (wrong `ALLOWED_ORIGINS`, leaked secret, public D1 exports).  

### Manual tests before going live

1. **Happy path:** Valid email → `200` `{ "ok": true }` and row in D1.  
2. **Duplicate:** Same email again → still `200` `{ "ok": true }`, no second row.  
3. **Bad Turnstile:** Wrong/expired token → `400` `verification_failed` or `invalid_request`.  
4. **Wrong Origin:** `curl` without allowed `Origin` → `403`.  
5. **Oversized body:** &gt; 8KB → `413`.  
6. **Wrong method:** `GET` → `405`.  
7. **Extra JSON fields:** e.g. `{"email":"a@b.com","source":"homepage","cf-turnstile-response":"x","admin":true}` → `400`.  
8. **Invalid `source`:** e.g. `malicious` → `400`.  
9. **CORS preflight:** `OPTIONS` from allowed origin → `204` with proper headers.  
10. **Rate limit (with KV):** More than limit per IP per window → `429`.  

---

*Generated for Trilogicon — keep this document next to the Worker when modifying behavior.*
