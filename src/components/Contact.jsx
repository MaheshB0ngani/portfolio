import React from 'react'

export default function Contact({ contact }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">Contact</h2>
      <p className="text-sm">Phone: {contact.phone}</p>
      <p className="text-sm">
        Email: <a className="text-indigo-600" href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
    </section>
  )
}
