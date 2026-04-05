import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { TrilogiconMark } from './TrilogiconMark'
import { brand, nav } from '../content/copy'

/**
 * @param {object} props
 * @param {'dark' | 'light'} [props.variant='dark']
 */
export function Navbar({ variant = 'dark' }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const light = variant === 'light'
  const isActiveLink = (href) => !href.includes('#') && location.pathname === href
  const desktopLinkClass = (active) =>
    light
      ? `font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] ${active ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`
      : `font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tril-black ${active ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'}`
  const mobileLinkClass = (active) =>
    light
      ? `py-2 font-mono text-sm uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] ${active ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'}`
      : `py-2 font-mono text-sm uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tril-black ${active ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'}`

  return (
    <header
      className={
        light
          ? 'fixed inset-x-0 top-0 z-50 border-b border-zinc-200/90 bg-[#fafafa]/90 backdrop-blur-md'
          : 'fixed inset-x-0 top-0 z-50 border-b border-zinc-800/90 bg-tril-black/85 backdrop-blur-md'
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          to="/"
          className={
            light
              ? 'group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]'
              : 'group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tril-black'
          }
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
          <span
            className={
              light
                ? 'font-mono text-sm font-medium tracking-tight text-zinc-900'
                : 'font-mono text-sm font-medium tracking-tight text-zinc-100'
            }
          >
            {brand.name}
            <span className={light ? 'ml-2 text-zinc-500' : 'ml-2 text-zinc-500'}>{brand.ticker}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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

        <button
          type="button"
          className={
            light
              ? 'flex h-10 w-10 items-center justify-center rounded border border-zinc-300 text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-900 md:hidden'
              : 'flex h-10 w-10 items-center justify-center rounded border border-zinc-800 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100 md:hidden'
          }
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={
              light
                ? 'overflow-hidden border-t border-zinc-200 bg-[#fafafa] md:hidden'
                : 'overflow-hidden border-t border-zinc-800 bg-tril-black md:hidden'
            }
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
