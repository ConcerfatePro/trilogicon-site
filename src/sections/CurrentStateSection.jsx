import { PageSection } from '../components/PageSection'
import { home } from '../content/copy'

export function CurrentStateSection() {
  const { currentState } = home
  return (
    <PageSection>
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{currentState.title}</h2>
      <dl className="mt-6 space-y-2.5 text-[15px] text-zinc-600 dark:text-zinc-400">
        {currentState.items.map((item) => (
          <div key={item.label} className="flex flex-wrap gap-x-2">
            <dt className="text-zinc-900 dark:text-zinc-200">{item.label}</dt>
            <dd>
              <span className="text-zinc-400 dark:text-zinc-500" aria-hidden>
                {' '}
                —{' '}
              </span>
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    </PageSection>
  )
}
