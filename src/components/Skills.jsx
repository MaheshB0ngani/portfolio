import React from 'react'

function SkillsIconList({ title, items = [] }) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <ul className="flex flex-wrap gap-3">
        {items.map((s, i) => {
          const icon = typeof s === 'string' ? { icon: 'fas fa-circle', label: s } : s
          const cls = icon.icon || 'fas fa-circle'
          return (
            <li key={i} className="software-skill-inline flex flex-col items-center w-16">
              <i className={`${cls} text-indigo-500 text-2xl`} aria-hidden="true"></i>
              <p className="text-[10px] uppercase tracking-wide text-gray-500 mt-1 text-center">{icon.label}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Skills({ skills = {} }) {
  return (
    <section className="mb-8">
      <div className="bg-white p-6 rounded-md card-shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillsIconList title="Primary" items={skills.primary ?? []} />
          <SkillsIconList title="Frontend" items={skills.frontend ?? []} />
          <SkillsIconList title="Databases" items={skills.databases ?? []} />
          <SkillsIconList title="Data Engineering" items={skills.dataEngineering ?? []} />
        </div>
      </div>
    </section>
  )
}
