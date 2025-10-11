import React from 'react'

function SkillList({ title, items }) {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
        {items.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills({ skills }) {
  return (
    <section className="mb-8">
      <div className="bg-white p-6 rounded-md card-shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillList title="Primary" items={skills.primary} />
          <SkillList title="Frontend" items={skills.frontend} />
          <SkillList title="Databases & Data" items={[...skills.databases, ...skills.dataEngineering]} />
        </div>
      </div>
    </section>
  )
}
