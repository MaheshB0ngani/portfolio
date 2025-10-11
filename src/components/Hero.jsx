import React from 'react'

export default function Hero({ name, title, contact, socials }) {
  return (
    <section className="relative overflow-hidden hero-gradient grid-overlay pt-20">
      <div className="container-custom px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-9">
            <p className="text-base md:text-lg text-gray-600 mb-2 md:mb-4">Hello! <span role="img" aria-label="wave">👋</span></p>
            <h1 className="hero-title font-extrabold tracking-tight leading-tight">
              <span className="font-mono">I&apos;m</span> <span className="text-indigo-600 font-mono">{name}</span>
            </h1>
            <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">{title}</p>
            <div className="mt-6 md:mt-8 flex items-center space-x-4 hero-icons">
              <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-indigo-600" aria-label="email">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"></path></svg>
              </a>
              {socials?.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600" aria-label="linkedin">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM7 19H4V9h3v10zM5.5 7.6C4.4 7.6 3.5 6.7 3.5 5.6S4.4 3.5 5.5 3.5 7.5 4.4 7.5 5.6 6.6 7.6 5.5 7.6zM20 19h-3v-5.4c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V19h-3V9h3v1.4h.1c.4-.8 1.6-1.6 3.3-1.6C19.1 8.8 20 10.9 20 13.8V19z"/>
                </svg>
              </a>)}
              {socials?.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600" aria-label="twitter">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.4 3H23l-7.9 9.1L23.7 21h-6.2l-4.9-6.6-5.6 6.6H1.3l8.5-9.9L1 3h6.3l4.4 5.9L20.4 3z"/></svg>
              </a>)}
              {socials?.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600" aria-label="github">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.19a11 11 0 012.89-.39c.98 0 1.97.13 2.89.39 2.2-1.5 3.17-1.19 3.17-1.19.62 1.57.23 2.73.11 3.02.74.81 1.18 1.85 1.18 3.11 0 4.43-2.71 5.41-5.29 5.69.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
              </a>)}
              {socials?.stackoverflow && (
              <a href={socials.stackoverflow} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600" aria-label="stackoverflow">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.4 19.1v-4.2h1.8V21H5v-6.1h1.8v4.2h10.6zM8 17.3h7.6v-1.8H8v1.8zm.2-3.1l7.4 1 .2-1.7-7.5-1-.1 1.7zm.5-3l7 2 .5-1.7-7-2-.5 1.7zm1.4-3l6.3 3.6.9-1.5L11 6.6l-.9 1.5zM14.4 4l5.2 5.1 1.3-1.3-5.2-5.1L14.4 4z"/></svg>
              </a>)}
            </div>
          </div>
          <div className="md:col-span-5"></div>
        </div>
      </div>
    </section>
  )
}
