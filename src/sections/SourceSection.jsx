import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionShell } from '../components/SectionShell'
import { source } from '../content/copy'

export function SourceSection() {
  return (
    <SectionShell id="source" className="bg-tril-surface/25">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{source.kicker}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
          {source.title}
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {source.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mt-12 border border-zinc-200 bg-white/90 p-6 dark:border-zinc-800 dark:bg-tril-black/80 md:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">{source.coreLabel}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
          {source.coreDescription}
        </p>
        <a
          href={source.coreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-zinc-300 bg-transparent px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-500 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-tril-black"
        >
          {source.coreLinkLabel}
          <ExternalLink className="h-3.5 w-3.5 opacity-70" strokeWidth={2} aria-hidden />
        </a>
      </motion.div>
    </SectionShell>
  )
}
