/** Simple content section — no card chrome, minimal borders */
export function PageSection({ id, children, className = '' }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-2xl px-5 py-14 md:px-8 md:py-16">{children}</div>
    </section>
  )
}
