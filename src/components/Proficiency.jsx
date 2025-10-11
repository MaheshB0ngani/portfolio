import React from 'react'

export default function Proficiency({ items }) {
  if (!items?.length) return null
  return (
    <section id="proficiency" className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-4">
          <h2 className="section-heading-left">Proficiency</h2>
          <div className="section-underline" />
        </div>
        <div className="md:col-span-8">
          <div className="bg-white p-6 rounded-md card-shadow">
            <div className="space-y-6">
              {items.map((p, i) => (
                <div key={i}>
                  <div className="text-sm text-gray-700 mb-2">{p.label}</div>
                  <div className="w-full h-3 rounded-full bg-gray-100">
                    <div className="h-3 rounded-full bg-indigo-400" style={{width: `${Math.min(100, Math.max(0, p.value))}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
