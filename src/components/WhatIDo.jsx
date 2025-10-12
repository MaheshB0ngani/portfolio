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
                <p className="tracking-wide text-gray-400 text-s">Crazy full stack developer who wants to explore every tech stack</p>
                <ul className="mt-4 flex flex-wrap gap-4 opacity-80">
                  {data.techIcons?.map((t, i) => (
                    <li key={i} className="software-skill-inline flex flex-col items-center w-16">
                      <i className={`${t.icon} text-indigo-500 text-2xl`} aria-hidden="false"></i>
                      <p className="text-[10px] uppercase tracking-wide px-2 py-1 bg-indigo-50 text-indigo-600 mt-1 rounded-full">{t.label}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-6">
                  {Array.isArray(data.bullets) && data.bullets.map((group, idx) => (
                    <div key={idx} className="">
                      <h3 className="text-sm font-semibold text-gray-800 flex items-center">
                        <span className="mr-2">⚡</span>{group.subject}
                      </h3>
                      <ul className="mt-2 list-disc list-inside text-gray-700 text-sm space-y-1 ml-1">
                        {group.points?.map((p, i) => (
                            <li key={i} className="flex"><span className="mr-2 ml-2">🔹</span><span>{p}</span></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
