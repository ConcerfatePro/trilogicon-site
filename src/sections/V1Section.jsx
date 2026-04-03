import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { SectionShell } from '../components/SectionShell'
import { v1 } from '../content/copy'

export function V1Section() {
  return (
    <SectionShell id="v1" className="bg-tril-surface/30">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Scope</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
          {v1.title}
        </h2>
        <p className="mt-2 font-mono text-sm text-zinc-500">{v1.subtitle}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">{v1.intro}</p>
      </motion.div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="border border-zinc-700/80 bg-tril-black p-6 md:p-8"
        >
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-200">
            <span className="flex h-6 w-6 items-center justify-center border border-zinc-600">
              <Check className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            {v1.includesTitle}
          </h3>
          <ul className="mt-6 space-y-3">
            {v1.includes.map((line) => (
              <li
                key={line}
                className="border-l border-zinc-700 pl-4 text-sm leading-snug text-zinc-400"
              >
                {line}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.06 }}
          className="border border-dashed border-zinc-700 bg-tril-elevated/50 p-6 md:p-8"
        >
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <span className="flex h-6 w-6 items-center justify-center border border-zinc-700">
              <Minus className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            {v1.excludedTitle}
          </h3>
          <ul className="mt-6 space-y-3">
            {v1.excluded.map((line) => (
              <li key={line} className="text-sm leading-snug text-zinc-500">
                {line}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-zinc-500">{v1.scopeNote}</p>
    </SectionShell>
  )
}
