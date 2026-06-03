import { PageSection } from '../components/PageSection'
import { home } from '../content/copy'

export function HomeFaqSection() {
  return (
    <PageSection id="faq">
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">FAQ</h2>
      <dl className="mt-8 space-y-8">
        {home.faq.map((item) => (
          <div key={item.question}>
            <dt className="text-[15px] font-medium text-zinc-900 dark:text-zinc-200">{item.question}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.linkHref ? (
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-100 dark:decoration-zinc-600"
                >
                  {item.linkLabel}
                </a>
              ) : (
                item.answer
              )}
            </dd>
          </div>
        ))}
      </dl>
    </PageSection>
  )
}
