import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { TrilogiconMark } from './TrilogiconMark'
import { brand, nav } from '../content/copy'
import { useTheme } from '../theme/ThemeContext'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const light = theme === 'light'

  const isActiveLink = (href) => !href.includes('#') && location.pathname === href

  const desktopLinkClass = (active) =>
    `font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black ${
      active
        ? 'text-zinc-900 dark:text-zinc-100'
        : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
    }`

  const mobileLinkClass = (active) =>
    `py-2 font-mono text-sm uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black ${
      active
        ? 'text-zinc-900 dark:text-zinc-100'
        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/90 bg-zinc-50/90 backdrop-blur-md dark:border-zinc-800/90 dark:bg-tril-black/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
          onClick={() => setOpen(false)}
        >
          <TrilogiconMark
            size={36}
            tone={light ? 'light' : 'dark'}
            className={
              light
                ? 'transition-opacity duration-300 group-hover:opacity-80'
                : 'transition-[filter] duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.28)]'
            }
          />
          <span className="font-mono text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            {brand.name}
            <span className="ml-2 text-zinc-500">{brand.ticker}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary">
          {nav.links.map((link) => {
            const active = isActiveLink(link.href)
            return (
              <Link
                key={link.href}
                to={link.href}
                className={desktopLinkClass(active)}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded border border-zinc-300 text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
            aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {light ? <Moon size={18} strokeWidth={1.75} /> : <Sun size={18} strokeWidth={1.75} />}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded border border-zinc-300 text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-tril-black md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile primary">
              {nav.links.map((link) => {
                const active = isActiveLink(link.href)
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={mobileLinkClass(active)}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
