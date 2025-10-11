import React from 'react'

export default function Projects({ projects }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
