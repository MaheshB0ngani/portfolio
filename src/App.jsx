import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import resume from './data/resume'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
  <Hero name={resume.name} title={resume.title} contact={resume.contact} socials={resume.socials} />
      <main className="container-custom px-4 py-10 space-y-10">
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <h2 className="section-heading-left">About</h2>
            <div className="section-underline" />
          </div>
          <div className="md:col-span-8"><About summary={resume.summary} profile={resume.profile} /></div>
        </section>

        <section id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <h2 className="section-heading-left">Skills</h2>
            <div className="section-underline" />
          </div>
          <div className="md:col-span-8"><Skills skills={resume.skills} /></div>
        </section>

        <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <h2 className="section-heading-left">Projects</h2>
            <div className="section-underline" />
          </div>
          <div className="md:col-span-8"><Projects projects={resume.projects} /></div>
        </section>

        <section id="experience">
          <Experience experiences={resume.experience} />
        </section>

        <Education education={resume.education} />

        <section id="contact" className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <h2 className="section-heading-left">Contact</h2>
            <div className="section-underline" />
          </div>
          <div className="md:col-span-8"><Contact contact={resume.contact} /></div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
