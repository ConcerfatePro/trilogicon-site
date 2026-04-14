import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { whyExists } from '../content/copy'

export function WhySection() {
  return (
    <SectionShell className="bg-tril-surface/50">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Context</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            {whyExists.title}
          </h2>
          <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-zinc-500">
            {whyExists.problemTitle}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {whyExists.problem}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-end border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-tril-black md:p-10"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
            {whyExists.responseTitle}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {whyExists.response}
          </p>
        </motion.div>
      </div>
    </SectionShell>
  )
}
