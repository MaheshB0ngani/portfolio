import React from 'react'

export default function Experience({ experiences }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">{exp.company}</h3>
              <span className="text-sm text-gray-600">{exp.period}</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">{exp.role}</div>
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
