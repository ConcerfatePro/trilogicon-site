import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { SiteBackdrop } from './SiteBackdrop'
import { FooterSection } from '../sections/FooterSection'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return (
    <div className="relative isolate min-h-svh bg-tril-black text-zinc-100 antialiased">
      <SiteBackdrop />
      <Navbar />
      <div className="relative z-[1]">
        <Outlet />
        <FooterSection />
      </div>
    </div>
  )
}
