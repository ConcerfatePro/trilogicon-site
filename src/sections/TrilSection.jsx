import { PageSection } from '../components/PageSection'
import { home } from '../content/copy'

export function TrilSection() {
  const { tril } = home
  return (
    <PageSection>
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{tril.title}</h2>
      <p className="mt-4 text-[15px] text-zinc-600 dark:text-zinc-400">{tril.body}</p>
      {tril.optional ? (
        <p className="mt-2 text-[15px] text-zinc-500 dark:text-zinc-500">{tril.optional}</p>
      ) : null}
    </PageSection>
  )
}
