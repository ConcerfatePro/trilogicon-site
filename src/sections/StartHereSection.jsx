import { Link } from 'react-router-dom'
import { SectionShell } from '../components/SectionShell'
import { home } from '../content/copy'

export function StartHereSection() {
  const { links } = home
  return (
    <SectionShell compact>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {links.title}
      </h2>
      <ul className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
        {links.items.map((item) => (
          <li key={item.label} className="grid gap-1 py-5 first:pt-2 md:grid-cols-[7rem_1fr] md:gap-8">
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-100"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                className="font-mono text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-100"
              >
                {item.label}
              </Link>
            )}
            <p className="text-sm text-zinc-600 dark:text-zinc-500">{item.body}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
