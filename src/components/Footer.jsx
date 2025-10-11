import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Mahesh Bongani. Built with React + Tailwind.
      </div>
    </footer>
  )
}
