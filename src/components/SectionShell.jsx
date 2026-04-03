export function SectionShell({ id, children, className = '', ...props }) {
  return (
    <section
      id={id}
      className={`relative border-t border-zinc-800/80 ${className}`}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">{children}</div>
    </section>
  )
}
