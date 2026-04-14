import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { waitlist as waitlistCopy } from '../content/copy'
import { useTheme } from '../theme/ThemeContext'

/** Build-time only: set in `.env` (local), `.env.production` (committed for Pages), or Cloudflare Pages env. */
const API_URL = String(import.meta.env.VITE_WAITLIST_API_URL ?? '').trim()
const SITE_KEY = String(import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '').trim()
const TURNSTILE_SCRIPT_ID = 'cf-turnstile-api-v3'
const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

export function WaitlistSection() {
  const formId = useId()
  const turnstileRef = useRef(null)
  const widgetIdRef = useRef(null)
  const [email, setEmail] = useState('')
  const [xHandle, setXHandle] = useState('')
  const [turnstileToken, setTurnstileToken] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const { theme } = useTheme()
  const turnstileTheme = theme === 'light' ? 'light' : 'dark'

  const configured = Boolean(API_URL && SITE_KEY)

  const resetTurnstile = useCallback(() => {
    const w = window.turnstile
    const id = widgetIdRef.current
    if (w && id !== null && id !== undefined) {
      try {
        w.reset(id)
      } catch {
        /* ignore */
      }
    }
    setTurnstileToken(null)
  }, [])

  useEffect(() => {
    if (!configured || !turnstileRef.current) return

    const mount = () => {
      if (!turnstileRef.current || !window.turnstile) return
      if (widgetIdRef.current !== null) return
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: SITE_KEY,
        theme: turnstileTheme,
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(null),
        'error-callback': () => setTurnstileToken(null),
      })
    }

    let existing = document.getElementById(TURNSTILE_SCRIPT_ID)
    if (!existing) {
      existing = document.createElement('script')
      existing.id = TURNSTILE_SCRIPT_ID
      existing.src = TURNSTILE_SRC
      existing.async = true
      existing.defer = true
      existing.onload = mount
      document.body.appendChild(existing)
    } else if (window.turnstile) {
      mount()
    } else {
      existing.addEventListener('load', mount)
    }

    return () => {
      const w = window.turnstile
      const wid = widgetIdRef.current
      if (w && wid !== null && wid !== undefined) {
        try {
          w.remove(wid)
        } catch {
          /* ignore */
        }
      }
      widgetIdRef.current = null
    }
  }, [configured, turnstileTheme])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!configured || !turnstileToken) return

    setSubmitting(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          x_handle: xHandle.trim() || undefined,
          source: 'homepage',
          'cf-turnstile-response': turnstileToken,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(waitlistCopy.errorGeneric)
        resetTurnstile()
        return
      }

      if (data.ok === true) {
        setSuccess(true)
        setEmail('')
        setXHandle('')
        resetTurnstile()
      } else {
        setError(waitlistCopy.errorGeneric)
        resetTurnstile()
      }
    } catch {
      setError(waitlistCopy.errorGeneric)
      resetTurnstile()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SectionShell id="waitlist" className="bg-tril-surface/20">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Updates</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            {waitlistCopy.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500 md:text-base">
            {waitlistCopy.subtitle}
          </p>
        </motion.div>

        {!configured ? (
          <div className="mt-8 space-y-4 rounded border border-zinc-200 bg-zinc-100/90 p-5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-tril-elevated/60 dark:text-zinc-500">
            <p className="font-medium text-zinc-800 dark:text-zinc-300">{waitlistCopy.configHint}</p>
            <p className="leading-relaxed">
              This app does not “call” keys at runtime. Vite bakes{' '}
              <code className="rounded bg-zinc-200 px-1 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                import.meta.env.VITE_WAITLIST_API_URL
              </code>{' '}
              and{' '}
              <code className="rounded bg-zinc-200 px-1 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                import.meta.env.VITE_TURNSTILE_SITE_KEY
              </code>{' '}
              into the JavaScript when the dev server <strong>starts</strong> or when{' '}
              <strong>Cloudflare Pages runs npm run build</strong>. If those values were missing then,
              they stay empty forever until you rebuild.
            </p>
            <div className="space-y-3 border-l-2 border-zinc-400 pl-4 dark:border-zinc-600">
              <p>
                <strong className="text-zinc-700 dark:text-zinc-400">Local (localhost)</strong>
                <br />
                Create <code className="text-zinc-700 dark:text-zinc-400">.env</code> in the project root (same folder as{' '}
                <code className="text-zinc-700 dark:text-zinc-400">package.json</code>), put:
              </p>
              <pre className="overflow-x-auto rounded border border-zinc-200 bg-white p-3 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-tril-black dark:text-zinc-400">
                {`VITE_WAITLIST_API_URL=https://trilogicon-waitlist.devinschin.workers.dev/api/waitlist
VITE_TURNSTILE_SITE_KEY=0x4AAAAAACz8p69WJbdMHTqm`}
              </pre>
              <p>
                Then <strong className="text-zinc-700 dark:text-zinc-400">stop</strong> and run{' '}
                <code className="text-zinc-700 dark:text-zinc-400">npm run dev</code> again.
              </p>
              <p>
                <strong className="text-zinc-700 dark:text-zinc-400">Live site (Cloudflare Pages)</strong>
                <br />
                Dashboard → your Pages project → <strong>Settings</strong> →{' '}
                <strong>Environment variables</strong> → add exactly those two names for{' '}
                <strong>Production</strong> → Save → <strong>Deployments</strong> → Retry or push a new
                commit so the site rebuilds.
              </p>
            </div>
            {import.meta.env.DEV ? (
              <p className="font-mono text-xs text-amber-800 dark:text-amber-200/90">
                Dev diagnostic: VITE_WAITLIST_API_URL is {API_URL ? 'set' : 'EMPTY'} ·
                VITE_TURNSTILE_SITE_KEY is {SITE_KEY ? 'set' : 'EMPTY'}
              </p>
            ) : null}
          </div>
        ) : success ? (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded border border-zinc-300 bg-white px-5 py-6 text-sm leading-relaxed text-zinc-700 dark:border-zinc-700 dark:bg-tril-elevated dark:text-zinc-300 md:px-6 md:py-8"
          >
            {waitlistCopy.success}
            <button
              type="button"
              className="mt-6 block border border-zinc-400 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-600 hover:text-zinc-950 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
              onClick={() => setSuccess(false)}
            >
              Back to form
            </button>
          </motion.div>
        ) : (
          <form className="mt-10 space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor={`${formId}-email`}
                className="font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                {waitlistCopy.emailLabel} <span className="text-zinc-500 dark:text-zinc-600">(required)</span>
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-800 dark:bg-tril-black dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
                placeholder={waitlistCopy.emailPlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor={`${formId}-x`}
                className="font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                {waitlistCopy.xLabel}
              </label>
              <input
                id={`${formId}-x`}
                name="x_handle"
                type="text"
                autoComplete="username"
                value={xHandle}
                onChange={(e) => setXHandle(e.target.value)}
                className="mt-2 w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-800 dark:bg-tril-black dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
                placeholder={waitlistCopy.xPlaceholder}
              />
            </div>

            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-600">
              {waitlistCopy.helper}
            </p>

            <div
              ref={turnstileRef}
              className="min-h-[65px] flex items-center"
              aria-label="Bot protection"
            />

            {error ? (
              <p className="text-sm text-red-600 dark:text-red-400/90" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting || !email.trim() || !turnstileToken}
              className="w-full border border-zinc-900 bg-zinc-900 py-3 font-mono text-xs font-medium uppercase tracking-widest text-white transition-[opacity,background-color] hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-100 dark:bg-zinc-100 dark:text-tril-black dark:hover:bg-white sm:w-auto sm:px-10"
            >
              {submitting ? waitlistCopy.submitting : waitlistCopy.submit}
            </button>
          </form>
        )}
      </div>
    </SectionShell>
  )
}
