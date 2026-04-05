import { Link } from 'react-router-dom'
import { TrilogiconMark } from '../components/TrilogiconMark'
import { footer } from '../content/copy'

/**
 * @param {object} props
 * @param {'dark' | 'light'} [props.variant='dark']
 */
export function FooterSection({ variant = 'dark' }) {
  const light = variant === 'light'
  return (
    <footer
      className={
        light ? 'border-t border-zinc-200 bg-[#fafafa]' : 'border-t border-zinc-800 bg-tril-black'
      }
    >
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <TrilogiconMark size={44} tone={light ? 'light' : 'dark'} />
            <div>
              <p className={light ? 'font-mono text-sm text-zinc-900' : 'font-mono text-sm text-zinc-100'}>
                Trilogicon
              </p>
              <p className={light ? 'mt-1 font-mono text-xs text-zinc-500' : 'mt-1 font-mono text-xs text-zinc-500'}>
                {footer.note}
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {footer.links.map((link) =>
              link.placeholder ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    light
                      ? 'font-mono text-xs uppercase tracking-widest text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]'
                      : 'font-mono text-xs uppercase tracking-widest text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tril-black'
                  }
                  aria-disabled
                  onClick={(e) => e.preventDefault()}
                >
                  {link.label}
                  <span
                    className={
                      light
                        ? 'ml-1 text-[10px] normal-case tracking-normal text-zinc-400'
                        : 'ml-1 text-[10px] normal-case tracking-normal text-zinc-700'
                    }
                  >
                    (soon)
                  </span>
                </a>
              ) : link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    light
                      ? 'font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]'
                      : 'font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tril-black'
                  }
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={
                    light
                      ? 'font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]'
                      : 'font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-tril-black'
                  }
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <p
          className={
            light
              ? 'mt-12 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500 md:text-left'
              : 'mt-12 border-t border-zinc-900 pt-8 text-center text-xs text-zinc-600 md:text-left'
          }
        >
          © {new Date().getFullYear()} Trilogicon. Frontend-only preview; no on-chain claims.
        </p>
      </div>
    </footer>
  )
}
