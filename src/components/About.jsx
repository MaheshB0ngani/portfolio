import React from 'react'

export default function About({ summary, profile }) {
  return (
    <section className="mb-8">
      <div className="bg-white p-6 rounded-md card-shadow">
        <h2 className="text-2xl font-semibold mb-3">About</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">{summary}</p>
        <p className="text-gray-700 leading-relaxed">{profile}</p>
      </div>
    </section>
  )
}
