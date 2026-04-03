/**
 * Server-side validation only. Client input is never trusted.
 * Manual validation keeps dependencies at zero and logic easy to audit.
 */

/** ISO-style sources allowlist — client `source` must match exactly after normalization. */
export const ALLOWED_SOURCES = ['homepage', 'faq', 'x', 'direct'] as const
export type AllowedSource = (typeof ALLOWED_SOURCES)[number]

const MAX_EMAIL_LEN = 254
const MAX_X_HANDLE_LEN = 15
const X_HANDLE_RE = /^[a-zA-Z0-9_]{1,15}$/

/**
 * Loose but practical email check + length. Full RFC 5322 is not needed; we reject obvious garbage.
 */
const EMAIL_RE =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i

export interface ValidWaitlistPayload {
  email: string
  x_handle: string | null
  source: string
}

export type ValidationResult =
  | { ok: true; value: ValidWaitlistPayload }
  | { ok: false; code: string }

function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const t = raw.trim().toLowerCase()
  if (t.length === 0 || t.length > MAX_EMAIL_LEN) return null
  if (!EMAIL_RE.test(t)) return null
  return t
}

/**
 * Strip leading @ and enforce X handle rules (alphanumeric + underscore, max 15).
 */
function normalizeXHandle(raw: unknown): string | null {
  if (raw === undefined || raw === null || raw === '') return null
  if (typeof raw !== 'string') return null
  let s = raw.trim()
  if (s.startsWith('@')) s = s.slice(1)
  if (s.length === 0) return null
  if (s.length > MAX_X_HANDLE_LEN) return null
  if (!X_HANDLE_RE.test(s)) return null
  return s
}

function normalizeSource(raw: unknown): AllowedSource | null {
  if (typeof raw !== 'string') return null
  const s = raw.trim().toLowerCase()
  if ((ALLOWED_SOURCES as readonly string[]).includes(s)) return s as AllowedSource
  return null
}

/**
 * Validates and extracts only allowlisted fields from an already-parsed JSON object.
 * Rejects objects with unexpected top-level keys to reduce mass-assignment / prototype pollution surface.
 */
export function validateWaitlistBody(body: unknown): ValidationResult {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, code: 'invalid_json_shape' }
  }

  const o = body as Record<string, unknown>
  const keys = Object.keys(o)
  const allowed = new Set(['email', 'x_handle', 'source', 'cf-turnstile-response'])
  for (const k of keys) {
    if (!allowed.has(k)) return { ok: false, code: 'invalid_fields' }
  }

  const email = normalizeEmail(o.email)
  if (!email) return { ok: false, code: 'invalid_email' }

  const source = normalizeSource(o.source)
  if (!source) return { ok: false, code: 'invalid_source' }

  const xRaw = normalizeXHandle(o.x_handle)
  return {
    ok: true,
    value: {
      email,
      x_handle: xRaw,
      source,
    },
  }
}

/**
 * Turnstile widget posts token as `cf-turnstile-response` or `turnstileToken` in JSON — accept one canonical name only here.
 */
export function extractTurnstileToken(body: unknown): string | null {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) return null
  const o = body as Record<string, unknown>
  const t = o['cf-turnstile-response']
  if (typeof t !== 'string') return null
  const s = t.trim()
  if (s.length === 0 || s.length > 4096) return null
  return s
}
