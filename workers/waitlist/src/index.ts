/**
 * Trilogicon waitlist API — Cloudflare Worker
 *
 * POST /api/waitlist only. Parameterized D1 SQL, Turnstile verification, strict JSON validation,
 * optional KV rate limit (after Turnstile so failed challenges do not consume the IP quota),
 * CORS allowlist.
 */

import type { Env } from './types'
import { checkRateLimit } from './rateLimit'
import { verifyTurnstileToken } from './turnstile'
import { extractTurnstileToken, validateWaitlistBody } from './validation'

const MAX_BODY_BYTES = 8192
const JSON_CONTENT = 'application/json'

function parseAllowedOrigins(raw: string): string[] {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function corsHeaders(request: Request, env: Env): Headers {
  const headers = new Headers()
  const origin = request.headers.get('Origin')
  const allowed = parseAllowedOrigins(env.ALLOWED_ORIGINS || '')
  if (origin && allowed.includes(origin)) {
    headers.set('Access-Control-Allow-Origin', origin)
    headers.set('Vary', 'Origin')
    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
    headers.set('Access-Control-Allow-Headers', 'Content-Type')
    headers.set('Access-Control-Max-Age', '86400')
  }
  headers.set('Content-Type', `${JSON_CONTENT}; charset=utf-8`)
  headers.set('Cache-Control', 'no-store')
  return headers
}

function jsonResponse(
  request: Request,
  env: Env,
  status: number,
  body: Record<string, unknown>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(request, env),
  })
}

function clientIp(request: Request): string | null {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    null
  )
}

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
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
      return jsonResponse(request, env, 405, {
        ok: false,
        error: 'method_not_allowed',
      })
    }

    const origin = request.headers.get('Origin')
    const allowedOrigins = parseAllowedOrigins(env.ALLOWED_ORIGINS || '')
    if (!origin || !allowedOrigins.includes(origin)) {
      return jsonResponse(request, env, 403, { ok: false, error: 'forbidden' })
    }

    const ct = request.headers.get('Content-Type') || ''
    if (!ct.toLowerCase().includes(JSON_CONTENT)) {
      return jsonResponse(request, env, 415, { ok: false, error: 'unsupported_type' })
    }

    const lenHeader = request.headers.get('Content-Length')
    if (lenHeader) {
      const n = parseInt(lenHeader, 10)
      if (Number.isFinite(n) && n > MAX_BODY_BYTES) {
        return jsonResponse(request, env, 413, { ok: false, error: 'payload_too_large' })
      }
    }

    let text: string
    try {
      text = await request.text()
    } catch {
      return jsonResponse(request, env, 400, { ok: false, error: 'invalid_request' })
    }

    if (text.length > MAX_BODY_BYTES) {
      return jsonResponse(request, env, 413, { ok: false, error: 'payload_too_large' })
    }

    let parsed: unknown
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
      const rl = await checkRateLimit(env.RATE_LIMIT_KV, ip)
      if (!rl.allowed) {
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

    /** Duplicate email: OR IGNORE yields success with meta.changes === 0 — still return ok: true. */
    return jsonResponse(request, env, 200, { ok: true })
  },
}
