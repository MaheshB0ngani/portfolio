import React from 'react'
import siteConfig from '../data/site.config'

export default function NavBar() {
  return (
    <header className="w-full py-3 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container-custom px-4 flex items-center justify-center gap-8 space-x-8 text-sm text-gray-700 nav-links">
        {siteConfig.sections.filter(s => s.enabled).map(s => (
          <a key={s.id} href={`#${s.id}`} className="hover:text-indigo-600">{s.label}</a>
        ))}
      </nav>
    </header>
  )
}
