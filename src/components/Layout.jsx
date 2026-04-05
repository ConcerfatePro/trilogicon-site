import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { SiteBackdrop } from './SiteBackdrop'
import { FooterSection } from '../sections/FooterSection'

export function Layout() {
  const location = useLocation()
  const isV2Page = location.pathname === '/v2'

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
    <div
      className={
        isV2Page
          ? 'relative isolate min-h-svh bg-[#fafafa] text-zinc-900 antialiased'
          : 'relative isolate min-h-svh bg-tril-black text-zinc-100 antialiased'
      }
    >
      {!isV2Page ? <SiteBackdrop /> : null}
      <Navbar variant={isV2Page ? 'light' : 'dark'} />
      <div className="relative z-[1]">
        <Outlet />
        <FooterSection variant={isV2Page ? 'light' : 'dark'} />
      </div>
    </div>
  )
}
