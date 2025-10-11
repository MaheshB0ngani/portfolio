import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="text-center text-sm text-gray-600 py-6">
        © {new Date().getFullYear()} Mahesh Bongani. Built with React + Tailwind.
      </div>
    </footer>
  )
}
