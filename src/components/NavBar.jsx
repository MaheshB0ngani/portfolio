import React from 'react'

export default function NavBar() {
  return (
    <header className="w-full py-4">
      <nav className="container-custom flex items-center justify-end space-x-6 text-sm text-gray-700">
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#projects" className="hover:text-indigo-600">Projects</a>
        <a href="#experience" className="hover:text-indigo-600">Experience</a>
        <a href="#education" className="hover:text-indigo-600">Education</a>
      </nav>
    </header>
  )
}
