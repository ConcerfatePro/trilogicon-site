import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { supportPage as copy } from '../content/copy'

const DOC_TITLE = 'Support Trilogicon — Trilogicon'
const DOC_TITLE_DEFAULT = 'Trilogicon — TRIL'

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return true
  }
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.left = '-9999px'
  ta.style.top = '0'
  document.body.appendChild(ta)
  ta.select()
  try {
    return document.execCommand('copy')
  } finally {
    document.body.removeChild(ta)
  }
}

export function SupportPage() {
  const mainId = useId()
  const addressId = `${mainId}-donation-address`
  const [copied, setCopied] = useState(false)
  const copiedTimerRef = useRef(null)

  useEffect(() => {
    const prev = document.title
    document.title = DOC_TITLE
    return () => {
      document.title = prev || DOC_TITLE_DEFAULT
    }
  }, [])

  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current)
    }
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      const ok = await copyTextToClipboard(copy.address)
      if (ok) {
        setCopied(true)
        if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current)
        copiedTimerRef.current = window.setTimeout(() => setCopied(false), 2800)
      }
    } catch {
      setCopied(false)
    }
  }, [])

  return (
    <main
      id="support"
      className="min-h-svh bg-zinc-50 pt-24 pb-0 dark:bg-tril-black"
    >
      <header className="border-b border-zinc-200/90 dark:border-zinc-800/90">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {copy.kicker}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-500 md:text-lg">
              {copy.intro}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-16 md:space-y-20">
          <section aria-labelledby={`${mainId}-what-heading`}>
            <h2
              id={`${mainId}-what-heading`}
              className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-300"
            >
              {copy.whatHelpsTitle}
            </h2>
            <ul className="mt-6 space-y-3 border-l-2 border-zinc-300 pl-5 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-500 md:text-base">
              {copy.whatHelpsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby={`${mainId}-donation-heading`}>
            <h2
              id={`${mainId}-donation-heading`}
              className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-300"
            >
              {copy.donationTitle}
            </h2>
            <p className="mt-4 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-600 md:text-sm">
              {copy.addressNetworkLabel}
            </p>

            <div className="mt-4 rounded border border-zinc-200 bg-white/80 p-4 dark:border-zinc-800 dark:bg-tril-surface/30 md:p-5">
              <p
                id={addressId}
                className="font-mono text-[0.8125rem] leading-relaxed text-zinc-800 [overflow-wrap:anywhere] break-all dark:text-zinc-200 sm:text-sm md:text-base"
                translate="no"
              >
                {copy.address}
              </p>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-600 md:text-sm">
              {copy.verifyNote}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <button
                type="button"
                onClick={handleCopy}
                aria-describedby={addressId}
                className="inline-flex w-full items-center justify-center border border-zinc-400 bg-transparent px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-600 hover:text-zinc-950 dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-zinc-400 dark:hover:text-zinc-50 sm:w-auto"
              >
                {copy.copyButtonLabel}
              </button>
              <div className="min-h-[1.25rem] sm:min-w-[8rem]">
                {copied ? (
                  <p
                    role="status"
                    aria-live="polite"
                    className="font-mono text-xs text-emerald-700 dark:text-emerald-400/90"
                  >
                    {copy.copiedMessage}
                  </p>
                ) : null}
              </div>
            </div>
          </section>

          <section
            aria-labelledby={`${mainId}-transparency-heading`}
            className="rounded border border-zinc-200 bg-zinc-100/80 p-6 dark:border-zinc-800 dark:bg-tril-elevated/40 md:p-8"
          >
            <h2
              id={`${mainId}-transparency-heading`}
              className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-300"
            >
              {copy.transparencyTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500 md:text-base">
              {copy.transparencyBody}
            </p>
          </section>

          <section
            aria-labelledby={`${mainId}-thanks-heading`}
            className="border-t border-zinc-200 pt-12 dark:border-zinc-800 md:pt-16"
          >
            <h2
              id={`${mainId}-thanks-heading`}
              className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-400"
            >
              {copy.thankYouTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-500 md:text-base">
              {copy.thankYouBody}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
