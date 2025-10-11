import React from 'react'

export default function Projects({ projects }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-md card-shadow overflow-hidden flex">
            <img src="/project-placeholder.png" alt="project" className="w-40 h-28 object-cover" />
            <div className="p-6 flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{p.description}</p>
              <div className="mt-4 flex space-x-3 text-sm">
                <a className="text-indigo-600 hover:underline" href="#">Source</a>
                <a className="text-indigo-600 hover:underline" href="#">Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
