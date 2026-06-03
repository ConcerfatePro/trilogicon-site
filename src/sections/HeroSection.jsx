import { Link } from 'react-router-dom'
import { docsHref, home, sourceUrl } from '../content/copy'

const { hero } = home

export function HeroSection() {
  return (
    <header id="top" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="home-hero-title text-[3rem] font-semibold leading-none text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          {hero.subheading}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]">
          <Link to={docsHref} className="home-link-primary underline underline-offset-4">
            {hero.ctaDocs}
          </Link>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            {hero.ctaSource}
          </a>
        </div>
      </div>
    </header>
  )
}
