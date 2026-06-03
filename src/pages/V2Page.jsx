import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { v2Page as copy } from '../content/copy'

const DOC_TITLE_DEFAULT = 'Trilogicon — TRIL'

function SectionRule() {
  return <div className="h-px w-full bg-zinc-200 dark:bg-zinc-700" aria-hidden />
}

function SectionHeading({ kicker, title, intro, titleId }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
        {kicker}
      </p>
      <h2
        id={titleId}
        className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{intro}</p>
      ) : null}
    </div>
  )
}

function ShippedSection({ section }) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
        Shipped · {section.navLabel}
      </p>
      <h2
        id={`${section.id}-heading`}
        className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl"
      >
        {section.title}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
        {section.intro}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-tril-elevated md:p-8">
          <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            What changed
          </h3>
          <ul className="mt-5 space-y-3 border-t border-zinc-100 pt-5 dark:border-zinc-800" role="list">
            {section.changed.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[15px]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-zinc-900 dark:bg-zinc-100" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-tril-elevated md:p-8">
          <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            Why that matters
          </h3>
          <ul className="mt-5 space-y-3 border-t border-zinc-100 pt-5 dark:border-zinc-800" role="list">
            {section.matters.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[15px]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-zinc-900 dark:bg-zinc-100" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {section.compendium ? (
        <p className="mt-8 max-w-3xl border-l-2 border-zinc-900 pl-5 text-sm leading-relaxed text-zinc-600 dark:border-zinc-200 dark:text-zinc-400 md:text-[15px]">
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
    <main
      aria-labelledby="v2-page-title"
      className="v2-page bg-zinc-50 pb-24 pt-24 dark:bg-tril-black md:pb-32 md:pt-28"
    >
      <div className="v2-grid-overlay pointer-events-none fixed inset-0 -z-10 opacity-[0.45] dark:opacity-[0.12]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <header
          id="top"
          className="border-b border-zinc-900 pb-12 dark:border-zinc-100 md:pb-16"
        >
          <div className="max-w-4xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              {copy.heroKicker}
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h1
                id="v2-page-title"
                className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
              >
                {copy.heroTitle}
              </h1>
              <span className="inline-flex border border-zinc-900 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-900 dark:border-zinc-100 dark:text-zinc-100">
                {copy.heroBadge}
              </span>
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
              {copy.heroLead}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.heroSub}
            </p>
          </div>
          <dl className="mt-10 grid gap-4 md:grid-cols-3">
            {copy.summaryCards.map((card) => (
              <div
                key={card.label}
                className="border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-tril-elevated md:p-6"
              >
                <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {card.label}
                </dt>
                <dd className="mt-3">
                  <p className="text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100 md:text-[15px]">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {card.body}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <nav
          className="sticky top-16 z-30 -mx-5 mb-14 border-b border-zinc-200 bg-zinc-50/95 px-5 py-3 backdrop-blur-sm dark:border-zinc-800 dark:bg-tril-black/95 md:-mx-8 md:px-8"
          aria-label="On this page"
        >
          <div className="overflow-x-auto pb-1">
            <ul className="flex min-w-max gap-x-5 gap-y-2 md:gap-x-6">
              {copy.anchorNav.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="space-y-20 md:space-y-28">
          <section id="overview" aria-labelledby="overview-heading">
            <SectionHeading
              kicker="Overview"
              title={copy.overviewTitle}
              intro={copy.overviewIntro}
              titleId="overview-heading"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {copy.overviewCards.map((card) => (
                <article
                  key={card.label}
                  className="border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-tril-elevated md:p-7"
                >
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-[15px]">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <SectionRule />

          {copy.shippedSections.map((section) => (
            <ShippedSection key={section.id} section={section} />
          ))}

          <SectionRule />

          <section id="not-became" aria-labelledby="not-became-heading">
            <h2
              id="not-became-heading"
              className="max-w-3xl text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl"
            >
              {copy.notBecameTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.notBecameIntro}
            </p>
            <ul
              className="mt-8 max-w-2xl space-y-3 border-l-2 border-zinc-900 pl-5 dark:border-zinc-200"
              role="list"
            >
              {copy.notBecameFocus.map((line) => (
                <li
                  key={line}
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-200 md:text-[15px]"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.notBecameClosing}
            </p>

            <div className="mt-14">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                {copy.outScopeTitle}
              </h3>
              <p className="mt-3 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
                {copy.outScopeIntro}
              </p>
              <div className="mt-8 border border-dashed border-zinc-400 bg-zinc-50/80 p-6 dark:border-zinc-600 dark:bg-tril-elevated/60 md:p-10">
                <ul className="grid gap-3 sm:grid-cols-2 md:gap-x-10 md:gap-y-3" role="list">
                  {copy.outScopeItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-zinc-900 dark:bg-zinc-100" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="summary" aria-labelledby="summary-heading">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              Synthesis
            </p>
            <h2
              id="summary-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl"
            >
              {copy.summaryTitle}
            </h2>
            <div className="mt-8 max-w-3xl space-y-6 border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-tril-elevated md:p-10">
              {copy.summaryParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section id="discipline" aria-labelledby="discipline-heading">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <article className="border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-tril-elevated md:p-8">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Discipline
                </p>
                <h2
                  id="discipline-heading"
                  className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl"
                >
                  {copy.narrowTitle}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {copy.narrowParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>

              <article className="border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-tril-elevated md:p-8">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Direction
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl">
                  {copy.meansTitle}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                  {copy.meansBody}
                </p>
              </article>
            </div>
          </section>

          <footer
            id="references"
            aria-labelledby="references-heading"
            className="border-t border-zinc-900 pt-12 dark:border-zinc-100 md:pt-16"
          >
            <p
              id="references-heading"
              className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500"
            >
              {copy.closingTitle}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {copy.closingBody}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/"
                className="inline-flex w-fit items-center justify-center border border-zinc-900 bg-zinc-900 px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-100 dark:bg-zinc-100 dark:text-tril-black dark:hover:bg-white dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
              >
                {copy.ctaHome}
              </Link>
              <Link
                to="/#progress"
                className="inline-flex w-fit items-center justify-center border border-zinc-300 bg-transparent px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-zinc-400 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
              >
                {copy.ctaProgress}
              </Link>
              <a
                href={copy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 border border-zinc-300 bg-transparent px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-zinc-400 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
              >
                {copy.ctaGithub}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" strokeWidth={2} aria-hidden />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
