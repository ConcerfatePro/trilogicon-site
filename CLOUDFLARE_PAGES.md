# Deploying Trilogicon on Cloudflare Pages

This project is a **static Vite + React** build. Cloudflare Pages serves the contents of the `dist` folder after `npm run build`. There is no server runtime required.

---

## What this repo adds for Cloudflare

| File / setting | Purpose |
|----------------|---------|
| `wrangler.toml` | Tells Wrangler your **Pages project name**, **output directory** (`dist`), and **compatibility date** for CLI deploys. |
| `public/_headers` | Security and caching headers on every deployment (copied into `dist` by Vite). |
| `public/_redirects` | SPA fallback: serves `index.html` for client-side routes such as `/faq` (React Router). |
| `.nvmrc` / `.node-version` | Pin **Node 22** for local dev and for CI (GitHub Actions). |
| `package.json` → `engines` | Hints supported Node (≥20); Pages also respects `.nvmrc` when present. |
| `package.json` → `pages:deploy` | `npm run build` then `wrangler pages deploy dist`. |
| `devDependency` `wrangler` | Official CLI for uploads and project management. |
| `.github/workflows/cloudflare-pages.yml` | **Optional** GitHub Actions deploy (only if you want CI instead of or alongside Cloudflare’s Git connect). |

---

## Method 1 — Connect Git in the Cloudflare dashboard (recommended)

Best if your code lives on GitHub or GitLab and you want **automatic builds** and **preview URLs** for pull requests.

### 1. Create a Pages project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Authorize Cloudflare to your Git provider and select this repository.

### 2. Configure the build

Use these settings (names may vary slightly in the UI):

| Setting | Value |
|---------|--------|
| **Framework preset** | `None` (or “Vite” if offered — both work as long as commands below are correct) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (repository root) |

### 3. Environment variables (optional but useful)

In the project → **Settings** → **Environment variables** (production and preview):

| Variable | Value | Why |
|----------|--------|-----|
| `NODE_VERSION` | `22` | Matches `.nvmrc`; keeps Cloudflare’s build image on a current Node LTS. |

You do **not** need `VITE_*` variables for this site unless you add them later.

### 4. Save and deploy

Save settings. The first build runs automatically. Fix any build errors from the **Deployments** log (usually missing `npm ci` dependencies — ensure `package-lock.json` is committed).

### 5. Production branch

Under **Settings** → **Builds & deployments**, set **Production branch** to `main` (or whatever branch you use). Pushes to other branches get **Preview deployments** with unique URLs.

### 6. Custom domain

**Custom domains** → add your domain → follow DNS instructions (often a CNAME to `*.pages.dev` or the target Cloudflare shows). SSL is provisioned automatically.

---

## Method 2 — Deploy from your machine (Wrangler CLI)

Useful for quick manual uploads or scripting without pushing to Git.

### 1. Install dependencies

```bash
npm install
```

### 2. Log in to Cloudflare (once per machine)

```bash
npx wrangler login
```

Opens a browser to authorize Wrangler.

### 3. Create the Pages project (once)

If the project does not exist yet:

```bash
npx wrangler pages project create trilogicon-site
```

If you use a **different name**, change it in:

- `wrangler.toml` → `name = "your-name"`
- `package.json` script / GitHub workflow → `--project-name=your-name`

### 4. Deploy

```bash
npm run pages:deploy
```

This runs `vite build` and uploads `dist`.

### Non-interactive / CI machines

Set an API token instead of `wrangler login`:

```bash
set CLOUDFLARE_API_TOKEN=your_token_here
npm run pages:deploy
```

(On PowerShell: `$env:CLOUDFLARE_API_TOKEN = "..."`.)

---

## Method 3 — GitHub Actions (optional)

The workflow **`.github/workflows/cloudflare-pages.yml`** deploys on every push to `main`.

1. In GitHub: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

2. **API token** (least privilege for Pages only):

   - Dashboard → **My Profile** → **API Tokens** → **Create Token** → **Create Custom Token**
   - Permissions: **Account** → **Cloudflare Pages** → **Edit**
   - Account resources: include the account that owns the Pages project
   - Create and copy the token into `CLOUDFLARE_API_TOKEN`

3. **Account ID**: Dashboard → pick any site → **Overview** → right column **Account ID**.

4. Ensure the workflow’s `--project-name=trilogicon-site` matches your real Pages project name.

**Note:** If you already use **Connect to Git** on Cloudflare, every push builds twice unless you disable one path. Choose either Cloudflare’s built-in Git builds **or** this workflow, not both, unless you intentionally want duplicate deploys.

---

## Headers and caching (`public/_headers`)

After build, `dist/_headers` is uploaded with your site. Current rules:

- **All routes** — baseline security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- **`/assets/*`** — long cache for Vite-hashed filenames (`immutable`).
- **`/trilogicon-logo.png`** — shorter cache so favicon/logo updates propagate within a day.

You can add more blocks per [Cloudflare Pages headers docs](https://developers.cloudflare.com/pages/configuration/headers/).

---

## SPA / client-side routing

The app uses **React Router** (for example `/faq`). `public/_redirects` includes a fallback so direct loads and refreshes on those paths return `index.html` instead of 404:

```txt
/*    /index.html   200
```

Home anchors still use `/#section` and do not require extra routes. See [Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/).

---

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| Build fails on Pages | Logs in **Deployments**; run `npm ci && npm run build` locally with the same Node version. |
| Blank page or 404 on refresh (e.g. `/faq`) | **Output directory** must be `dist`; ensure `public/_redirects` is deployed (included in this repo). |
| Assets 404 | `vite.config.js` should keep `base: '/'` for a site at the domain root. |
| Wrangler ignores `wrangler.toml` | `pages_build_output_dir` must be set (this repo sets it to `dist`). |
| `CLOUDFLARE_API_TOKEN` errors | Token needs **Pages → Edit**; must be non-interactive in CI. |

---

## Quick reference

```bash
# Local preview of production build
npm run build && npm run preview

# Manual Cloudflare upload
npm run pages:deploy
```

Official references:

- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Vite on Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite-site/)
- [Wrangler configuration](https://developers.cloudflare.com/pages/configuration/wrangler-configuration/)
