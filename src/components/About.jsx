import React from 'react'

export default function About({ summary, profile }) {
  return (
    <section className="mb-12">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-3">About</h2>
        <p className="text-gray-700 mb-4">{summary}</p>
        <p className="text-gray-700">{profile}</p>
      </div>
    </section>
  )
}
