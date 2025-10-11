import React from 'react'

export default function About({ summary, profile }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">About</h2>
      <p className="mb-4">{summary}</p>
      <p className="text-gray-700">{profile}</p>
    </section>
  )
}
