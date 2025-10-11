import React from 'react'

export default function Projects({ projects }) {
  return (
    <section className="mb-8">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <a key={i} className="group bg-white rounded-md card-shadow overflow-hidden flex hover:shadow-lg transition-shadow" href="#" aria-label={p.title}>
            {/* <div className="w-40 h-28 flex-shrink-0 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}project-placeholder.png`} alt="project" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
            </div> */}
            <div className="p-6 flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{p.description}</p>
              {/* <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="text-indigo-600 hover:underline cursor-pointer">Source</span>
                <span className="text-gray-300">•</span>
                <span className="text-indigo-600 hover:underline cursor-pointer">Demo</span>
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
