import { Link } from 'react-router-dom'
import { TrilogiconMark } from '../components/TrilogiconMark'
import { footer } from '../content/copy'
import { useTheme } from '../theme/ThemeContext'

export function FooterSection() {
  const { theme } = useTheme()
  const light = theme === 'light'

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-tril-black">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <TrilogiconMark size={44} tone={light ? 'light' : 'dark'} />
            <div>
              <p className="font-mono text-sm text-zinc-900 dark:text-zinc-100">Trilogicon</p>
              <p className="mt-1 font-mono text-xs text-zinc-500">{footer.note}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {footer.links.map((link) =>
              link.placeholder ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-widest text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:text-zinc-600 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
                  aria-disabled
                  onClick={(e) => e.preventDefault()}
                >
                  {link.label}
                  <span className="ml-1 text-[10px] normal-case tracking-normal text-zinc-400 dark:text-zinc-700">
                    (soon)
                  </span>
                </a>
              ) : link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-400 dark:focus-visible:ring-offset-tril-black"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <p className="mt-12 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500 dark:border-zinc-900 dark:text-zinc-600 md:text-left">
          © {new Date().getFullYear()} Trilogicon. Frontend-only preview; no on-chain claims.
        </p>
      </div>
    </footer>
  )
}
