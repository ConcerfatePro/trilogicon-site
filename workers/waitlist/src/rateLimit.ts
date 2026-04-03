/**
 * Fixed-window rate limit per IP using KV.
 * Not perfectly global under extreme load (KV eventual consistency) but good enough for early waitlists.
 *
 * If RATE_LIMIT_KV is undefined, the caller should skip or treat as "unlimited" per WAITLIST.md policy.
 */

const WINDOW_SECONDS = 600 /** 10 minutes */
const MAX_HITS_PER_WINDOW = 15 /** POST /api/waitlist per IP per window */

function bucketKey(ip: string, nowMs: number): string {
  const windowId = Math.floor(nowMs / (WINDOW_SECONDS * 1000))
  return `waitlist:rl:${ip}:${windowId}`
}

export async function checkRateLimit(
  kv: KVNamespace,
  ip: string,
): Promise<{ allowed: boolean }> {
  const key = bucketKey(ip, Date.now())
  const raw = await kv.get(key)
  const count = raw ? parseInt(raw, 10) : 0
  if (Number.isNaN(count) || count >= MAX_HITS_PER_WINDOW) {
    return { allowed: false }
  }
  await kv.put(key, String(count + 1), { expirationTtl: WINDOW_SECONDS + 60 })
  return { allowed: true }
}

export { MAX_HITS_PER_WINDOW, WINDOW_SECONDS }
