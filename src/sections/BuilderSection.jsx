import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { builder } from '../content/copy'

export function BuilderSection() {
  return (
    <SectionShell id="builder" className="bg-tril-surface/30">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            {builder.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            {builder.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mt-10 border-l-2 border-zinc-400 pl-6 dark:border-zinc-600 md:pl-8"
        >
          <div className="space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {builder.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <footer className="mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="font-mono text-sm text-zinc-800 dark:text-zinc-200">— {builder.signOff}</p>
            {builder.signRole ? (
              <p className="mt-1 font-mono text-xs text-zinc-500">{builder.signRole}</p>
            ) : null}
          </footer>
        </motion.div>
      </div>
    </SectionShell>
  )
}
