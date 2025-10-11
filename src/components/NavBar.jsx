import React from 'react'

export default function NavBar() {
  return (
    <header className="w-full py-3 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container-custom px-4 flex items-center justify-center gap-8 space-x-8 text-sm text-gray-700 nav-links">
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#projects" className="hover:text-indigo-600">Projects</a>
        <a href="#experience" className="hover:text-indigo-600">Experience</a>
        <a href="#education" className="hover:text-indigo-600">Education</a>
      </nav>
    </header>
  )
}
