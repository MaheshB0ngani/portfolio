import React from 'react'

export default function Education({ education }) {
  return (
    <section id="education" className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-4">
          <h2 className="section-heading-left">Education</h2>
          <div className="section-underline" />
        </div>
        <div className="md:col-span-8">
          <div className="bg-white p-6 rounded-md card-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <span className="text-sm text-gray-500">{education.years}</span>
            </div>
            <p className="text-sm text-gray-700 mt-1">{education.school}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
