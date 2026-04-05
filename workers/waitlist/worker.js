/**
 * Trilogicon waitlist Worker — single file (same name as Cloudflare dashboard).
 *
 * Bindings: DB (D1), TURNSTILE_SECRET (secret), ALLOWED_ORIGINS (var), RATE_LIMIT_KV (optional KV)
 * Route: POST /api/waitlist (+ OPTIONS for CORS)
 *
 * Deploy: from this directory, `npm run deploy` (see wrangler.toml)
 */

const MAX_BODY_BYTES = 8192
const JSON_CONTENT = 'application/json'
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const API_CSP = "default-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'"
const API_PERMISSIONS_POLICY =
  'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'

const MAX_EMAIL_LEN = 254
const MAX_X_HANDLE_LEN = 15
const X_HANDLE_RE = /^[a-zA-Z0-9_]{1,15}$/
const EMAIL_RE =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
const ALLOWED_SOURCES = ['homepage', 'faq', 'x', 'direct']

const RATE_WINDOW_SEC = 600
const RATE_MAX = 15

function parseAllowedOrigins(raw = '') {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function applySecurityHeaders(headers) {
  headers.set('Content-Security-Policy', API_CSP)
  headers.set('Permissions-Policy', API_PERMISSIONS_POLICY)
  headers.set('Referrer-Policy', 'no-referrer')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('X-Frame-Options', 'DENY')
}

function corsHeaders(request, env) {
  const headers = new Headers()
  const origin = request.headers.get('Origin')
  const allowed = parseAllowedOrigins(env.ALLOWED_ORIGINS)
  if (origin && allowed.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
    headers.set('Vary', 'Origin')
    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
    headers.set('Access-Control-Allow-Headers', 'Content-Type')
    headers.set('Access-Control-Max-Age', '86400')
  }
  headers.set('Content-Type', `${JSON_CONTENT}; charset=utf-8`)
  headers.set('Cache-Control', 'no-store')
  applySecurityHeaders(headers)
  return headers
}

function jsonResponse(request, env, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(request, env),
  })
}

function clientIp(request) {
  const xff = request.headers.get('X-Forwarded-For')
  const first = xff ? xff.split(',')[0].trim() : null
  return request.headers.get('CF-Connecting-IP') || first || null
}

function normalizeEmail(raw) {
  if (typeof raw !== 'string') return null
  const t = raw.trim().toLowerCase()
  if (t.length === 0 || t.length > MAX_EMAIL_LEN) return null
  if (!EMAIL_RE.test(t)) return null
  return t
}

function normalizeXHandle(raw) {
  if (raw === undefined || raw === null || raw === '') return null
  if (typeof raw !== 'string') return null
  let s = raw.trim()
  if (s.startsWith('@')) s = s.slice(1)
  if (s.length === 0) return null
  if (s.length > MAX_X_HANDLE_LEN) return null
  if (!X_HANDLE_RE.test(s)) return null
  return s
}

function normalizeSource(raw) {
  if (typeof raw !== 'string') return null
  const s = raw.trim().toLowerCase()
  if (ALLOWED_SOURCES.includes(s)) return s
  return null
}

function validateWaitlistBody(body) {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false }
  }
  const o = body
  const allowed = new Set(['email', 'x_handle', 'source', 'cf-turnstile-response'])
  for (const k of Object.keys(o)) {
    if (!allowed.has(k)) return { ok: false }
  }
  const email = normalizeEmail(o.email)
  if (!email) return { ok: false }
  const source = normalizeSource(o.source)
  if (!source) return { ok: false }
  return {
    ok: true,
    value: { email, x_handle: normalizeXHandle(o.x_handle), source },
  }
}

function extractTurnstileToken(body) {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) return null
  const t = body['cf-turnstile-response']
  if (typeof t !== 'string') return null
  const s = t.trim()
  if (s.length === 0 || s.length > 4096) return null
  return s
}

function hasJsonContentType(value) {
  if (typeof value !== 'string') return false
  return value.split(';')[0].trim().toLowerCase() === JSON_CONTENT
}

async function verifyTurnstileToken(params) {
  const { secret, token, remoteip } = params
  if (!secret || secret.length < 10) return false

  const form = new URLSearchParams()
  form.set('secret', secret)
  form.set('response', token)
  if (remoteip) form.set('remoteip', remoteip)

  let res
  try {
    res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
    })
  } catch {
    return false
  }
  if (!res.ok) return false
  try {
    const data = await res.json()
    return data.success === true
  } catch {
    return false
  }
}

async function checkRateLimit(kv, ip) {
  const windowId = Math.floor(Date.now() / (RATE_WINDOW_SEC * 1000))
  const key = `waitlist:rl:${ip}:${windowId}`
  const raw = await kv.get(key)
  const count = raw ? parseInt(raw, 10) : 0
  if (Number.isNaN(count) || count >= RATE_MAX) return false
  await kv.put(key, String(count + 1), { expirationTtl: RATE_WINDOW_SEC + 60 })
  return true
}

export default {
  async fetch(request, env, _ctx) {
    const url = new URL(request.url)
    const path = url.pathname.replace(/\/$/, '') || '/'

    if (path !== '/api/waitlist') {
      return jsonResponse(request, env, 404, { ok: false, error: 'not_found' })
    }

    if (request.method === 'OPTIONS') {
      const h = corsHeaders(request, env)
      if (!h.get('Access-Control-Allow-Origin')) {
        return new Response(null, { status: 403 })
      }
      return new Response(null, { status: 204, headers: h })
    }

    if (request.method !== 'POST') {
      return jsonResponse(request, env, 405, { ok: false, error: 'method_not_allowed' })
    }

    const origin = request.headers.get('Origin')
    const allowedOrigins = parseAllowedOrigins(env.ALLOWED_ORIGINS)
    if (!origin || !allowedOrigins.includes(origin)) {
      return jsonResponse(request, env, 403, { ok: false, error: 'forbidden' })
    }

    const ct = request.headers.get('Content-Type') || ''
    if (!hasJsonContentType(ct)) {
      return jsonResponse(request, env, 415, { ok: false, error: 'unsupported_type' })
    }

    const lenHeader = request.headers.get('Content-Length')
    if (lenHeader) {
      const n = parseInt(lenHeader, 10)
      if (Number.isFinite(n) && n > MAX_BODY_BYTES) {
        return jsonResponse(request, env, 413, { ok: false, error: 'payload_too_large' })
      }
    }

    let text
    try {
      text = await request.text()
    } catch {
      return jsonResponse(request, env, 400, { ok: false, error: 'invalid_request' })
    }

    if (text.length > MAX_BODY_BYTES) {
      return jsonResponse(request, env, 413, { ok: false, error: 'payload_too_large' })
    }

    let parsed
    try {
      parsed = JSON.parse(text)
    } catch {
      return jsonResponse(request, env, 400, { ok: false, error: 'invalid_json' })
    }

    const token = extractTurnstileToken(parsed)
    if (!token) {
      return jsonResponse(request, env, 400, { ok: false, error: 'invalid_request' })
    }

    const validated = validateWaitlistBody(parsed)
    if (!validated.ok) {
      return jsonResponse(request, env, 400, { ok: false, error: 'invalid_request' })
    }

    const ip = clientIp(request)
    const turnstileOk = await verifyTurnstileToken({
      secret: env.TURNSTILE_SECRET,
      token,
      remoteip: ip,
    })
    if (!turnstileOk) {
      return jsonResponse(request, env, 400, { ok: false, error: 'verification_failed' })
    }

    if (env.RATE_LIMIT_KV && ip) {
      const ok = await checkRateLimit(env.RATE_LIMIT_KV, ip)
      if (!ok) {
        return jsonResponse(request, env, 429, { ok: false, error: 'rate_limited' })
      }
    }

    const { email, x_handle, source } = validated.value

    const result = await env.DB.prepare(
      `INSERT OR IGNORE INTO waitlist_entries (email, x_handle, source) VALUES (?1, ?2, ?3)`,
    )
      .bind(email, x_handle, source)
      .run()

    if (!result.success) {
      console.error('waitlist_d1_error')
      return jsonResponse(request, env, 500, { ok: false, error: 'server_error' })
    }

    return jsonResponse(request, env, 200, { ok: true })
  },
}
