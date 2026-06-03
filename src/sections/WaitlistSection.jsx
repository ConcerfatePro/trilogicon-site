import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { PageSection } from '../components/PageSection'
import { waitlist as waitlistCopy } from '../content/copy'
import { useTheme } from '../theme/ThemeContext'

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

  useEffect(() => {
    if (import.meta.env.DEV && !configured) {
      console.warn(
        '[Trilogicon waitlist] Missing VITE_WAITLIST_API_URL and/or VITE_TURNSTILE_SITE_KEY. See WAITLIST.md.',
      )
    }
  }, [configured])

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
    <PageSection id="updates" className="border-t border-zinc-200/80 dark:border-zinc-800/60">
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{waitlistCopy.title}</h2>
      <p className="mt-2 text-[15px] text-zinc-600 dark:text-zinc-400">{waitlistCopy.subtitle}</p>

      {!configured ? (
        <p className="mt-6 text-[15px] text-zinc-600 dark:text-zinc-500" role="status">
          {waitlistCopy.unavailable}
        </p>
      ) : success ? (
        <p className="mt-6 text-[15px] text-zinc-700 dark:text-zinc-300" role="status">
          {waitlistCopy.success}
        </p>
      ) : (
        <form className="mt-6 max-w-md space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor={`${formId}-email`} className="text-sm text-zinc-600 dark:text-zinc-400">
              {waitlistCopy.emailLabel}
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full border-0 border-b border-zinc-300 bg-transparent py-2 text-[15px] text-zinc-900 focus:border-zinc-600 focus:outline-none dark:border-zinc-700 dark:text-zinc-100"
              placeholder={waitlistCopy.emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor={`${formId}-x`} className="text-sm text-zinc-600 dark:text-zinc-400">
              {waitlistCopy.xLabel}
            </label>
            <input
              id={`${formId}-x`}
              name="x_handle"
              type="text"
              autoComplete="username"
              value={xHandle}
              onChange={(e) => setXHandle(e.target.value)}
              className="mt-1.5 w-full border-0 border-b border-zinc-300 bg-transparent py-2 text-[15px] text-zinc-900 focus:border-zinc-600 focus:outline-none dark:border-zinc-700 dark:text-zinc-100"
              placeholder={waitlistCopy.xPlaceholder}
            />
          </div>
          <div ref={turnstileRef} className="min-h-[65px]" aria-label="Bot protection" />
          {error ? (
            <p className="text-sm text-red-600 dark:text-red-400/90" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={submitting || !email.trim() || !turnstileToken}
            className="text-[15px] text-zinc-900 underline decoration-zinc-300 underline-offset-4 disabled:opacity-40 dark:text-zinc-100 dark:decoration-zinc-600"
          >
            {submitting ? waitlistCopy.submitting : waitlistCopy.submit}
          </button>
        </form>
      )}
    </PageSection>
  )
}
