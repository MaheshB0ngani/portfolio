import React from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import resume from './data/resume'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        <aside className="md:col-span-4 lg:col-span-3">
          <Sidebar resume={resume} />
        </aside>
        <main className="md:col-span-8 lg:col-span-9">
          <section id="about">
            <About summary={resume.summary} profile={resume.profile} />
          </section>
          <section id="skills">
            <Skills skills={resume.skills} />
          </section>
          <section id="experience">
            <Experience experiences={resume.experience} />
          </section>
          <section id="projects">
            <Projects projects={resume.projects} />
          </section>
          <section id="contact">
            <Contact contact={resume.contact} />
          </section>
          <Footer />
        </main>
      </div>
    </div>
  )
}
