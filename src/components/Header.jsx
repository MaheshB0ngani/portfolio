import React from 'react'

export default function Header({ name, title, contact }) {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <div className="text-sm text-right">
          <div>{contact.phone}</div>
          <div>
            <a href={`mailto:${contact.email}`} className="text-indigo-600">{contact.email}</a>
          </div>
        </div>
      </div>
    </header>
  )
}
