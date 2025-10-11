import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import resume from './data/resume'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header name={resume.name} title={resume.title} contact={resume.contact} />
      <main className="flex-1 container mx-auto px-4 py-10">
        <About summary={resume.summary} profile={resume.profile} />
        <Skills skills={resume.skills} />
        <Experience experiences={resume.experience} />
        <Projects projects={resume.projects} />
        <Contact contact={resume.contact} />
      </main>
      <Footer />
    </div>
  )
}
