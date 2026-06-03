import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { v2Page as copy } from '../content/copy'

const DOC_TITLE_DEFAULT = 'Trilogicon — TRIL'

function DocList({ items, className = '' }) {
  return (
    <ul className={`mt-4 max-w-2xl space-y-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 ${className}`}>
      {items.map((line) => (
        <li key={line} className="pl-4 [text-indent:-1rem]">
          <span className="mr-2 text-zinc-400 dark:text-zinc-500" aria-hidden>
            –
          </span>
          {line}
        </li>
      ))}
    </ul>
  )
}

function ShippedSection({ section }) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-24">
      <h2
        id={`${section.id}-heading`}
        className="text-xl font-medium text-zinc-900 dark:text-zinc-100 md:text-2xl"
      >
        {section.title}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        {section.intro}
      </p>

      <h3 className="mt-8 text-sm font-medium text-zinc-800 dark:text-zinc-200">What changed</h3>
      <DocList items={section.changed} />

      <h3 className="mt-8 text-sm font-medium text-zinc-800 dark:text-zinc-200">Why that matters</h3>
      <DocList items={section.matters} />

      {section.compendium ? (
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-500">
          {section.compendium}
        </p>
      ) : null}
    </section>
  )
}

export function V2Page() {
  useEffect(() => {
    const prev = document.title
    document.title = copy.docTitle
    return () => {
      document.title = prev || DOC_TITLE_DEFAULT
    }
  }, [])

  return (
    <main aria-labelledby="v2-page-title" className="v2-page pb-24 pt-24 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <header id="top" className="border-b border-zinc-200 pb-12 dark:border-zinc-800 md:pb-14">
          <p className="text-sm text-zinc-500">{copy.heroKicker}</p>
          <h1
            id="v2-page-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl"
          >
            {copy.heroTitle}
            <span className="ml-2 text-base font-normal text-zinc-500">({copy.heroBadge})</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            {copy.heroLead}
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-500">
            {copy.heroSub}
          </p>

          <dl className="mt-10 space-y-5 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            {copy.summaryCards.map((card) => (
              <div key={card.label}>
                <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{card.label}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <span className="text-zinc-800 dark:text-zinc-300">{card.title}. </span>
                  {card.body}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <nav
          className="sticky top-14 z-30 -mx-5 border-b border-zinc-200/80 bg-zinc-50/95 px-5 py-3 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-tril-black/95 md:-mx-8 md:px-8"
          aria-label="On this page"
        >
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
            {copy.anchorNav.map((a) => (
              <li key={a.id}>
                <a
                  href={`#${a.id}`}
                  className="hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-16 pt-12 md:space-y-20">
          <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-24">
            <h2
              id="overview-heading"
              className="text-xl font-medium text-zinc-900 dark:text-zinc-100 md:text-2xl"
            >
              {copy.overviewTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.overviewIntro}
            </p>
            <dl className="mt-8 space-y-6">
              {copy.overviewCards.map((card) => (
                <div key={card.label}>
                  <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{card.label}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <span className="block text-zinc-800 dark:text-zinc-300">{card.title}</span>
                    {card.body}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {copy.shippedSections.map((section) => (
            <ShippedSection key={section.id} section={section} />
          ))}

          <section id="not-became" aria-labelledby="not-became-heading" className="scroll-mt-24">
            <h2
              id="not-became-heading"
              className="text-xl font-medium text-zinc-900 dark:text-zinc-100 md:text-2xl"
            >
              {copy.notBecameTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.notBecameIntro}
            </p>
            <DocList items={copy.notBecameFocus} className="mt-4" />
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.notBecameClosing}
            </p>

            <h3 className="mt-10 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {copy.outScopeTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] text-zinc-600 dark:text-zinc-400">
              {copy.outScopeIntro}
            </p>
            <DocList items={copy.outScopeItems} className="mt-3 columns-1 sm:columns-2 sm:gap-x-8" />
          </section>

          <section id="summary" aria-labelledby="summary-heading" className="scroll-mt-24">
            <h2
              id="summary-heading"
              className="text-xl font-medium text-zinc-900 dark:text-zinc-100 md:text-2xl"
            >
              {copy.summaryTitle}
            </h2>
            <div className="mt-4 max-w-2xl space-y-4">
              {copy.summaryParagraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section id="discipline" aria-labelledby="discipline-heading" className="scroll-mt-24">
            <h2
              id="discipline-heading"
              className="text-xl font-medium text-zinc-900 dark:text-zinc-100 md:text-2xl"
            >
              {copy.narrowTitle}
            </h2>
            <div className="mt-4 max-w-2xl space-y-4">
              {copy.narrowParagraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {p}
                </p>
              ))}
            </div>
            <h3 className="mt-10 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {copy.meansTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.meansBody}
            </p>
          </section>

          <footer
            id="references"
            aria-labelledby="references-heading"
            className="scroll-mt-24 border-t border-zinc-200 pt-12 dark:border-zinc-800 md:pt-14"
          >
            <h2
              id="references-heading"
              className="text-lg font-medium text-zinc-900 dark:text-zinc-100"
            >
              {copy.closingTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.closingBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <Link to="/" className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-100 dark:decoration-zinc-600">
                {copy.ctaHome}
              </Link>
              <Link
                to="/#state"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                {copy.ctaProgress}
              </Link>
              <a
                href={copy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                {copy.ctaGithub}
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
