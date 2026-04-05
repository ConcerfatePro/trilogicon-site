import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionShell } from '../components/SectionShell'
import { roadmap } from '../content/copy'

export function RoadmapSection() {
  return (
    <SectionShell id="roadmap">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Roadmap</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
          {roadmap.title}
        </h2>
        <p className="mt-3 max-w-xl text-zinc-500">{roadmap.subtitle}</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800 md:left-6" aria-hidden />
        <ol className="space-y-6">
          {roadmap.versions.map((v, i) => (
            <motion.li
              key={v.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="relative flex gap-6 pl-2 md:gap-10"
            >
              <div className="relative z-10 flex min-h-10 min-w-10 shrink-0 items-center justify-center border border-zinc-600 bg-tril-black px-2 py-2 font-mono text-[10px] font-medium leading-none text-zinc-200 md:text-xs">
                {v.id}
              </div>
              <div className="flex-1 border border-zinc-800 bg-tril-elevated/80 p-6 pt-5 md:p-8">
                <h3 className="font-mono text-sm font-medium uppercase tracking-widest text-zinc-100">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{v.body}</p>
                {v.href ? (
                  <Link
                    to={v.href}
                    className="mt-5 inline-flex items-center border border-zinc-700 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tril-black"
                  >
                    {v.cta}
                  </Link>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </SectionShell>
  )
}
