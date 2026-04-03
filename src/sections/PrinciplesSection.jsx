import { SectionShell } from '../components/SectionShell'
import { PrincipleCard } from '../components/PrincipleCard'
import { principles } from '../content/copy'

export function PrinciplesSection() {
  return (
    <SectionShell>
      <div className="mb-12 md:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Principles</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
          {principles.title}
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.items.map((item, i) => (
          <PrincipleCard key={item.key} title={item.title} body={item.body} index={i} />
        ))}
      </div>
    </SectionShell>
  )
}
