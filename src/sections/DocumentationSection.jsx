import { Link } from 'react-router-dom'
import { PageSection } from '../components/PageSection'
import { home } from '../content/copy'

function DocLinks({ items }) {
  return (
    <ul className="doc-list mt-3 space-y-2">
      {items.map((item) => (
        <li key={item.href + item.label}>
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-list__link"
            >
              {item.label}
            </a>
          ) : item.href.startsWith('/#') ? (
            <a href={item.href} className="doc-list__link">
              {item.label}
            </a>
          ) : (
            <Link to={item.href} className="doc-list__link">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export function DocumentationSection() {
  const { docs } = home
  return (
    <PageSection id="docs" className="border-t border-zinc-200/80 dark:border-zinc-800/60">
      <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{docs.title}</h2>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        {docs.intro}
      </p>

      <h3 className="mt-10 text-sm font-medium text-zinc-800 dark:text-zinc-200">Start here</h3>
      <DocLinks items={docs.startHere} />

      <h3 className="mt-10 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        Developer reference
      </h3>
      <DocLinks items={docs.reference} />
    </PageSection>
  )
}
