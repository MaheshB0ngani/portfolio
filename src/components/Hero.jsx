import React from 'react'

export default function Hero({ name, title, contact }) {
  return (
    <section className="relative overflow-hidden hero-gradient grid-overlay">
      <div className="container-custom px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-9">
            <p className="text-base md:text-lg text-gray-600 mb-2 md:mb-4">Hello! <span role="img" aria-label="wave">👋</span></p>
            <h1 className="hero-title font-extrabold tracking-tight leading-tight">
              <span className="font-mono">I&apos;m</span> <span className="text-indigo-600 font-mono">{name}</span>
            </h1>
            <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">{title}</p>
            <div className="mt-6 md:mt-8 flex items-center space-x-4 hero-icons">
              <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-indigo-600" aria-label="email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="linkedin">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 9h4v12H2z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="twitter">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="github">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.19a11 11 0 012.89-.39c.98 0 1.97.13 2.89.39 2.2-1.5 3.17-1.19 3.17-1.19.62 1.57.23 2.73.11 3.02.74.81 1.18 1.85 1.18 3.11 0 4.43-2.71 5.41-5.29 5.69.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-5"></div>
        </div>
      </div>
    </section>
  )
}
