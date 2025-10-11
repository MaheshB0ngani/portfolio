import React from 'react'

export default function Sidebar({ resume }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="text-center">
        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold">{resume.name}</h1>
        <p className="text-sm text-gray-600 mt-1">{resume.title}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700">Contact</h3>
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          <li>{resume.contact.phone}</li>
          <li><a href={`mailto:${resume.contact.email}`} className="text-indigo-600">{resume.contact.email}</a></li>
        </ul>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2 text-sm">
          <li><a className="text-gray-700 hover:text-indigo-600" href="#about">About</a></li>
          <li><a className="text-gray-700 hover:text-indigo-600" href="#skills">Skills</a></li>
          <li><a className="text-gray-700 hover:text-indigo-600" href="#experience">Experience</a></li>
          <li><a className="text-gray-700 hover:text-indigo-600" href="#projects">Projects</a></li>
          <li><a className="text-gray-700 hover:text-indigo-600" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="mt-6 text-center">
        <a className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" href="#contact">Download Resume</a>
      </div>
    </div>
  )
}
