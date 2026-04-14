import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TrilogiconMark } from '../components/TrilogiconMark'
import { XLogo } from '../components/icons/XLogo'
import { brand, hero, social } from '../content/copy'
import { useTheme } from '../theme/ThemeContext'

export function HeroSection() {
  const { theme } = useTheme()
  const light = theme === 'light'

  return (
    <div
      id="top"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-transparent pt-24 pb-20 dark:border-zinc-800/80 md:pt-32 md:pb-28"
    >
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.045]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        >
          <div className="flex items-start gap-5">
            <TrilogiconMark size={64} tone={light ? 'light' : 'dark'} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {brand.name}{' '}
                <span className="text-zinc-700 dark:text-zinc-300">{brand.ticker}</span>
              </p>
              <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">{brand.tagline}</p>
              <p className="mt-1 inline-flex items-center gap-2 font-mono text-xs text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-sm bg-zinc-400 dark:bg-zinc-500" aria-hidden />
                {brand.statusLine}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-4xl font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg"
        >
          <p>{hero.lead}</p>
          <p className="text-zinc-500 dark:text-zinc-500">{hero.secondary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Link
            to="/v2"
            className="inline-flex items-center justify-center gap-2 border border-zinc-900 bg-zinc-900 px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-white transition-[box-shadow,background-color] hover:bg-zinc-800 hover:shadow-md dark:border-zinc-100 dark:bg-zinc-100 dark:text-tril-black dark:hover:bg-white dark:hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
          >
            {hero.ctaExploreV2}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
          <Link
            to="/#vision"
            className="inline-flex items-center justify-center gap-2 border border-zinc-300 bg-transparent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
          >
            {hero.ctaVision}
          </Link>
          <Link
            to="/#v1"
            className="inline-flex items-center justify-center gap-2 border border-zinc-300 bg-transparent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
          >
            {hero.ctaV1}
          </Link>
          <Link
            to="/#source"
            className="inline-flex items-center justify-center gap-2 border border-zinc-300 bg-transparent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-800 transition-colors hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
          >
            {hero.ctaSource}
          </Link>
          <Link
            to="/#roadmap"
            className="inline-flex items-center justify-center gap-2 border border-transparent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-800 dark:hover:text-zinc-300"
          >
            {hero.ctaRoadmap}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.38 }}
          className="mt-10 flex flex-wrap items-center gap-4 border-t border-zinc-200/80 pt-10 dark:border-zinc-800/80"
        >
          <a
            href={social.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.xLabel}: ${social.xHandle} (opens in a new tab)`}
            className="group inline-flex items-center gap-3 rounded border border-zinc-200 bg-white/80 px-4 py-3 transition-colors hover:border-zinc-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-800 dark:bg-tril-surface/40 dark:hover:border-zinc-600 dark:hover:bg-tril-surface/80 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-tril-black"
          >
            <span className="text-zinc-900 transition-opacity group-hover:opacity-90 dark:text-zinc-100">
              <XLogo className="h-5 w-5" />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                {social.xLabel}
              </span>
              <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">{social.xHandle}</span>
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
