import React from 'react'

export default function Projects({ projects }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
