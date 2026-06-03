import { PageSection } from '../components/PageSection'
import { home } from '../content/copy'

export function HomeFaqSection() {
  return (
    <PageSection id="faq" className="border-t border-zinc-200/80 dark:border-zinc-800/60">
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">FAQ</h2>
      <dl className="mt-6 space-y-6">
        {home.faq.map((item) => (
          <div key={item.question}>
            <dt className="text-[15px] text-zinc-900 dark:text-zinc-200">{item.question}</dt>
            <dd className="mt-1.5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </PageSection>
  )
}
