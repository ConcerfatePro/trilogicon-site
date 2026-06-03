/** Plain page background — no network mesh or decorative overlays */
export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-zinc-50 dark:bg-tril-black" aria-hidden />
  )
}
