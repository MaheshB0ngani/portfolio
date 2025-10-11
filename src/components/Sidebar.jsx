import React from 'react'

export default function Sidebar({ resume }) {
  return (
    <div className="sticky top-6">
      <div className="bg-white p-6 rounded-md card-shadow text-center">
        <div className="mb-4">
          <img src="/avatar-placeholder.svg" alt="avatar" className="avatar mx-auto" />
        </div>
        <h1 className="text-xl font-semibold">{resume.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{resume.title}</p>

        <div className="mt-6 text-left">
          <h3 className="text-sm font-medium text-gray-700">Contact</h3>
          <ul className="text-sm text-gray-700 mt-2 space-y-1">
            <li>{resume.contact.phone}</li>
            <li><a href={`mailto:${resume.contact.email}`} className="text-indigo-600">{resume.contact.email}</a></li>
          </ul>
        </div>

        <nav className="mt-6 text-left">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a className="hover:text-indigo-600" href="#about">About</a></li>
            <li><a className="hover:text-indigo-600" href="#skills">Skills</a></li>
            <li><a className="hover:text-indigo-600" href="#experience">Experience</a></li>
            <li><a className="hover:text-indigo-600" href="#projects">Projects</a></li>
            <li><a className="hover:text-indigo-600" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="mt-6 text-center">
          <a className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700" href="/resume.txt" download>Download Resume</a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={`mailto:${resume.contact.email}`} aria-label="email" className="text-gray-600 hover:text-indigo-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"></path></svg>
          </a>
          <a href="#" aria-label="linkedin" className="text-gray-600 hover:text-indigo-600">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76c.966 0 1.75.79 1.75 1.76s-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a href="#" aria-label="twitter" className="text-gray-600 hover:text-indigo-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
          </a>
          <a href="#" aria-label="github" className="text-gray-600 hover:text-indigo-600">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.19a11 11 0 012.89-.39c.98 0 1.97.13 2.89.39 2.2-1.5 3.17-1.19 3.17-1.19.62 1.57.23 2.73.11 3.02.74.81 1.18 1.85 1.18 3.11 0 4.43-2.71 5.41-5.29 5.69.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
