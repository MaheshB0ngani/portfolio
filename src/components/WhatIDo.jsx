import React from 'react'

export default function WhatIDo({ data }) {
  if (!data) return null
  return (
    <section id="what-i-do" className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-4">
          <h2 className="section-heading-left">What I do</h2>
          <div className="section-underline" />
        </div>
        <div className="md:col-span-8">
          <div className="bg-white p-6 rounded-md card-shadow">
            <div className="grid grid-cols-1 items-center">
              { data.illustration && (
              <div className="flex justify-center">
                <img alt="illustration" className="max-h-72" src={data.illustration} />
              </div>
              )}
              <div>
                <p className="uppercase tracking-wide text-gray-400 text-xs">Crazy full stack developer who wants to explore every tech stack</p>
                <ul className="mt-4 flex flex-wrap gap-4 opacity-80">
                  {data.techIcons?.map((t, i) => (
                    <li key={i} className="software-skill-inline flex flex-col items-center w-16">
                      <i className={`${t.icon} text-indigo-500 text-2xl`} aria-hidden="true"></i>
                      <p className="text-[10px] uppercase tracking-wide text-gray-500 mt-1">{t.label}</p>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-3 text-gray-700 text-sm">
                  {data.bullets?.map((b, i) => (
                    <li key={i} className="flex"><span className="mr-2">⚡</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
