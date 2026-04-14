import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { architecture } from '../content/copy'

export function ArchitectureSection() {
  return (
    <SectionShell id="architecture">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Structure</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
          {architecture.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-500">
          {architecture.subtitle}
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-zinc-200 dark:bg-zinc-800 md:left-1/2 md:block md:-translate-x-1/2" />
        <div className="grid gap-4 md:grid-cols-2 md:gap-x-12 md:gap-y-6">
          {architecture.modules.map((m, i) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`relative border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-tril-surface md:p-6 ${
                i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{m.body}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 rounded border border-zinc-200 bg-zinc-100/80 p-6 font-mono text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-tril-elevated dark:text-zinc-500 md:text-sm"
      >
        {architecture.rustNote}
      </motion.p>
    </SectionShell>
  )
}
