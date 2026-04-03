import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TrilogiconMark } from '../components/TrilogiconMark'
import { brand, hero } from '../content/copy'

export function HeroSection() {
  return (
    <div
      id="top"
      className="relative overflow-hidden border-b border-zinc-800/80 bg-tril-black pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 49%, rgb(63 63 70) 50%, transparent 51%),
            linear-gradient(0deg, transparent 0%, transparent 49%, rgb(63 63 70) 50%, transparent 51%)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        >
          <div className="flex items-start gap-5">
            <TrilogiconMark size={64} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {brand.name}{' '}
                <span className="text-zinc-300">{brand.ticker}</span>
              </p>
              <p className="mt-2 max-w-md text-sm text-zinc-400">{brand.tagline}</p>
              <p className="mt-1 inline-flex items-center gap-2 font-mono text-xs text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-sm bg-zinc-500" aria-hidden />
                {brand.statusLine}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-4xl font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-100 md:text-5xl lg:text-6xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          <p>{hero.lead}</p>
          <p className="text-zinc-500">{hero.secondary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href="#vision"
            className="inline-flex items-center justify-center gap-2 border border-zinc-100 bg-zinc-100 px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-tril-black transition-[box-shadow,background-color] hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
          >
            {hero.ctaVision}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
          <a
            href="#v1"
            className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-transparent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-200 transition-colors hover:border-zinc-500 hover:text-zinc-50"
          >
            {hero.ctaV1}
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center justify-center gap-2 border border-transparent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
          >
            {hero.ctaRoadmap}
          </a>
        </motion.div>
      </div>
    </div>
  )
}
