import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { brand, nav } from '../content/copy'
import { useTheme } from '../theme/ThemeContext'

const linkClass =
  'text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const light = theme === 'light'

  const isActiveLink = (href) => !href.includes('#') && location.pathname === href

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/95 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-tril-black/95">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          to="/"
          className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
          onClick={() => setOpen(false)}
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`${linkClass}${isActiveLink(link.href) ? ' text-zinc-900 dark:text-zinc-100' : ''}`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {light ? <Moon size={18} strokeWidth={1.75} /> : <Sun size={18} strokeWidth={1.75} />}
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-zinc-500 hover:text-zinc-900 md:hidden dark:hover:text-zinc-100"
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
            <nav className="flex flex-col gap-3 px-5 py-4" aria-label="Mobile primary">
              {nav.links.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={linkClass}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
