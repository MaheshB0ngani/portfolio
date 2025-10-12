import React from 'react'

export default function Experience({ experiences }) {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-4">
          <h2 className="section-heading-left">Experience</h2>
          <div className="section-underline" />
        </div>

        <div className="md:col-span-8">
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card bg-white p-6 rounded-md card-shadow card-interactive">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                      <div className="text-sm text-indigo-600">{exp.role}</div>
                    </div>
                    <div className="text-sm text-gray-500">{exp.period}</div>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-3">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
