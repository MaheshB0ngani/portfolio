import React from 'react'

export default function Experience({ experiences }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <span className="text-sm text-gray-600">{exp.period}</span>
            </div>
            <div className="text-sm text-gray-700 mb-3 font-medium">{exp.role}</div>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
