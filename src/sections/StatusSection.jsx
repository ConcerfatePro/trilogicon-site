import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { status } from '../content/copy'

export function StatusSection() {
  return (
    <SectionShell id="status" className="bg-tril-surface/40">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Status</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
          {status.title}
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-500">{status.subtitle}</p>
      </motion.div>

      <ul className="mt-12 space-y-0 divide-y divide-zinc-200 border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {status.items.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="grid gap-3 bg-white p-6 dark:bg-tril-black md:grid-cols-[minmax(0,220px)_1fr] md:gap-8 md:p-8"
          >
            <span className="font-mono text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {item.title}
            </span>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{item.body}</p>
          </motion.li>
        ))}
      </ul>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-600"
      >
        {status.disclaimer}
      </motion.p>
    </SectionShell>
  )
}
