import { useTheme } from '../theme/ThemeContext'

function adaptSectionBg(className, isLight) {
  if (!isLight) return className
  return className
    .replace(/bg-tril-surface\/25/g, 'bg-zinc-100/70')
    .replace(/bg-tril-surface\/30/g, 'bg-zinc-100/80')
    .replace(/bg-tril-surface\/40/g, 'bg-zinc-100')
    .replace(/bg-tril-surface\/50/g, 'bg-zinc-200/35')
    .replace(/bg-tril-surface\/20/g, 'bg-zinc-50/90')
}

export function SectionShell({ id, children, className = '', compact = false, ...props }) {
  const { theme } = useTheme()
  const adapted = adaptSectionBg(className, theme === 'light')
  const pad = compact ? 'py-12 md:py-16' : 'py-16 md:py-24'
  return (
    <section
      id={id}
      className={`relative border-t border-zinc-200 dark:border-zinc-800/80 ${adapted}`}
      {...props}
    >
      <div className={`mx-auto max-w-6xl px-5 md:px-8 ${pad}`}>{children}</div>
    </section>
  )
}
