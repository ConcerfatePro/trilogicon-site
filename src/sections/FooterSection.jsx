import { TrilogiconMark } from '../components/TrilogiconMark'
import { footer } from '../content/copy'

export function FooterSection() {
  return (
    <footer className="border-t border-zinc-800 bg-tril-black">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <TrilogiconMark size={44} />
            <div>
              <p className="font-mono text-sm text-zinc-100">Trilogicon</p>
              <p className="mt-1 font-mono text-xs text-zinc-500">{footer.note}</p>
            </div>
          </div>
          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Footer"
          >
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  link.placeholder
                    ? 'text-zinc-600'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                {...(link.placeholder
                  ? {
                      'aria-disabled': true,
                      onClick: (e) => e.preventDefault(),
                    }
                  : {})}
              >
                {link.label}
                {link.placeholder && (
                  <span className="ml-1 text-[10px] normal-case tracking-normal text-zinc-700">
                    (soon)
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-12 border-t border-zinc-900 pt-8 text-center text-xs text-zinc-600 md:text-left">
          © {new Date().getFullYear()} Trilogicon. Frontend-only preview; no on-chain claims.
        </p>
      </div>
    </footer>
  )
}
