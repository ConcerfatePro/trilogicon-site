import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { waitlist as waitlistCopy } from '../content/copy'

const API_URL = import.meta.env.VITE_WAITLIST_API_URL || ''
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || ''
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
        theme: 'dark',
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
  }, [configured])

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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
            {waitlistCopy.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500 md:text-base">
            {waitlistCopy.subtitle}
          </p>
        </motion.div>

        {!configured ? (
          <p className="mt-8 rounded border border-zinc-800 bg-tril-elevated/60 p-5 text-sm text-zinc-500">
            {waitlistCopy.configHint}
          </p>
        ) : success ? (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded border border-zinc-700 bg-tril-elevated px-5 py-6 text-sm leading-relaxed text-zinc-300 md:px-6 md:py-8"
          >
            {waitlistCopy.success}
            <button
              type="button"
              className="mt-6 block border border-zinc-600 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
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
                {waitlistCopy.emailLabel} <span className="text-zinc-600">(required)</span>
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border border-zinc-800 bg-tril-black px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600"
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
                className="mt-2 w-full border border-zinc-800 bg-tril-black px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                placeholder={waitlistCopy.xPlaceholder}
              />
            </div>

            <p className="text-xs leading-relaxed text-zinc-600">{waitlistCopy.helper}</p>

            <div
              ref={turnstileRef}
              className="min-h-[65px] flex items-center"
              aria-label="Bot protection"
            />

            {error ? (
              <p className="text-sm text-red-400/90" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting || !email.trim() || !turnstileToken}
              className="w-full border border-zinc-100 bg-zinc-100 py-3 font-mono text-xs font-medium uppercase tracking-widest text-tril-black transition-[opacity,background-color] hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-10"
            >
              {submitting ? waitlistCopy.submitting : waitlistCopy.submit}
            </button>
          </form>
        )}
      </div>
    </SectionShell>
  )
}
