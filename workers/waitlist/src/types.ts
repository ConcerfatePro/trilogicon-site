/**
 * Worker environment bindings (wrangler.toml + secrets).
 * No secrets are exposed to the client — only TURNSTILE_SECRET lives in Worker secrets.
 */
export interface Env {
  DB: D1Database
  /** Turnstile secret from `wrangler secret put TURNSTILE_SECRET` */
  TURNSTILE_SECRET: string
  /**
   * Comma-separated exact origins allowed for CORS, e.g.
   * "https://trilogicon.pages.dev,https://trilogicon.com"
   * Include local dev: http://localhost:5173
   */
  ALLOWED_ORIGINS: string
  /**
   * KV namespace for fixed-window IP rate limiting (recommended for production).
   * If unbound, rate limiting is skipped — see WAITLIST.md.
   */
  RATE_LIMIT_KV?: KVNamespace
}
