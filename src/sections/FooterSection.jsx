import { Link } from 'react-router-dom'
import { footer } from '../content/copy'

export function FooterSection() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-2xl px-5 py-12 md:px-8">
        <p className="text-sm text-zinc-900 dark:text-zinc-100">{footer.note}</p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
          {footer.links.map((link) =>
            link.external ? (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <p className="mt-10 text-xs text-zinc-500">© {new Date().getFullYear()} Trilogicon</p>
      </div>
    </footer>
  )
}
