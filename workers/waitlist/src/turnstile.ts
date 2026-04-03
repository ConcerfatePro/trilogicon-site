/**
 * Cloudflare Turnstile server-side verification.
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 *
 * Uses application/x-www-form-urlencoded POST — no user-controlled URL (no SSRF from client).
 * Endpoint is a fixed Cloudflare hostname.
 */

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

interface SiteverifySuccess {
  success: true
  'error-codes'?: string[]
}

interface SiteverifyFailure {
  success: false
  'error-codes'?: string[]
}

export async function verifyTurnstileToken(params: {
  secret: string
  token: string
  remoteip: string | null
}): Promise<boolean> {
  const { secret, token, remoteip } = params
  if (!secret || secret.length < 10) return false

  const form = new URLSearchParams()
  form.set('secret', secret)
  form.set('response', token)
  if (remoteip) form.set('remoteip', remoteip)

  let res: Response
  try {
    res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    })
  } catch {
    return false
  }

  if (!res.ok) return false

  let data: SiteverifySuccess | SiteverifyFailure
  try {
    data = (await res.json()) as SiteverifySuccess | SiteverifyFailure
  } catch {
    return false
  }

  return data.success === true
}
