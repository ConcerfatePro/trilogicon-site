import { PageSection } from '../components/PageSection'
import { home } from '../content/copy'

export function WhatIsSection() {
  const { whatIs } = home
  return (
    <PageSection>
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{whatIs.title}</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">{whatIs.body}</p>
    </PageSection>
  )
}
