import React, { useState } from 'react'

export default function HumanSection() {
  const [selectedInterest, setSelectedInterest] = useState('chess')

  const interests = [
    {
      id: 'chess',
      title: 'CHESS',
      icon: '♟',
      subtitle: 'Calculation & Foresight',
      desc: 'Looking multiple plies ahead, managing board tension, and understanding that every move inherently creates an irreversible weakness.',
      signal: 'STRATEGIC THINKING',
    },
    {
      id: 'movies',
      title: 'CINEMA',
      icon: '🎬',
      subtitle: 'Narrative & Atmosphere',
      desc: 'Appreciating pacing, framing, sound design, and character arcs. Great films demonstrate the power of meticulous craftsmanship.',
      signal: 'STORYTELLING & CRAFT',
    },
    {
      id: 'music',
      title: 'MUSIC',
      icon: '🎧',
      subtitle: 'Rhythm for Deep Focus',
      desc: 'Ambient frequencies, synth textures, and repetitive cadences that soundtrack long, uninterrupted engineering sessions.',
      signal: 'FLOW STATE',
    },
    {
      id: 'gaming',
      title: 'GAMING',
      icon: '🎮',
      subtitle: 'Interactive Systems',
      desc: 'Analyzing game design mechanics, emergent physics, state machines, and real-time player feedback loops.',
      signal: 'SYSTEM EXPLORATION',
    },
    {
      id: 'training',
      title: 'TRAINING',
      icon: '⚡',
      subtitle: 'Discipline & Compounding',
      desc: 'Progressive overload in the gym reinforces the same mental model needed for software: incremental, daily compounding effort.',
      signal: 'CONSISTENCY & COMPOUNDING',
    },
  ]

  const active = interests.find((item) => item.id === selectedInterest) || interests[0]

  return (
    <section id="human" className="human-section" aria-label="Personality and Human Layer">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">10 // THE HUMAN LAYER</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">SECONDARY TO ENGINEERING</span>
        </div>

        {/* Section Header */}
        <div className="human-header">
          <h2 className="human-title">THERE IS A PERSON BEHIND THE SYSTEM</h2>
          <p className="human-subtitle">
            Engineering judgment is shaped by more than technical manuals. Strategy, narrative,
            music, and physical discipline inform how I think about focus, endurance, and craft.
          </p>
        </div>

        {/* Interest Selector Grid */}
        <div className="human-grid">
          {interests.map((item) => {
            const isSelected = selectedInterest === item.id
            return (
              <button
                key={item.id}
                type="button"
                className={`human-pill-btn ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setSelectedInterest(item.id)}
              >
                <span className="pill-icon">{item.icon}</span>
                <span className="pill-title">{item.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Interest Card */}
        <div className="human-active-card">
          <div className="human-card-meta">
            <span className="human-signal">{active.signal}</span>
            <h3 className="human-active-title">
              {active.icon} {active.title} — {active.subtitle}
            </h3>
          </div>
          <p className="human-active-desc">"{active.desc}"</p>
        </div>
      </div>
    </section>
  )
}
