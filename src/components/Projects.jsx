import React from 'react'

export default function Projects({ projects }) {
  return (
    <section className="mb-8">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="group bg-white rounded-md card-shadow card-interactive overflow-hidden flex relative" href="#" aria-label={p.title}>
            {/* <div className="w-40 h-28 flex-shrink-0 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}project-placeholder.png`} alt="project" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
            </div> */}
            <div className="p-6 flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{p.description}</p>
              {(p.tags?.length || p.links?.source || p.links?.demo) && (
                <div className="mt-4 flex items-center flex-wrap gap-2 text-xs">
                  {p.tags?.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">{t}</span>
                  ))}
                  <span className="flex-1"></span>
                  {p.links?.source && <a className="text-indigo-600 hover:underline" href={p.links.source} target="_blank" rel="noopener noreferrer">Source</a>}
                  {p.links?.demo && <a className="text-indigo-600 hover:underline ml-3" href={p.links.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
                </div>
              )}
            </div>
            <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity text-gray-300 group-hover:text-gray-500">↗</div>
          </div>
        ))}
      </div>
    </section>
  )
}
