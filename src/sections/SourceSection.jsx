import { PageSection } from '../components/PageSection'
import { home, sourceUrl } from '../content/copy'

export function SourceSection() {
  const { source } = home
  return (
    <PageSection id="source" className="border-t border-zinc-200/80 dark:border-zinc-800/60">
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{source.title}</h2>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        {source.body}
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-[15px] text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-100 dark:decoration-zinc-600"
      >
        {source.cta}
      </a>
    </PageSection>
  )
}
