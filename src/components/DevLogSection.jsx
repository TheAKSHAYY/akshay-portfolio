import React, { useEffect, useRef, useState } from 'react'

const devLog = [
  {
    step: '01', id: 'foundation', year: '2022',
    title: 'BCA — ACADEMIC FOUNDATION',
    status: 'DONE', statusClass: 'ep-log-done',
    headline: 'CS fundamentals begin.',
    body: 'Started Bachelor of Computer Applications — where the real programming began. OS, DBMS, discrete math, C basics. The foundation everything else is built on.',
    tag: 'foundation',
  },
  {
    step: '02', id: 'java', year: '2023',
    title: 'JAVA — PRIMARY LANGUAGE',
    status: 'IN PROGRESS', statusClass: 'ep-log-progress',
    headline: 'Committed to the language.',
    body: 'Chose Java as the primary language. OOP architecture, JVM internals, Collections, JDBC. Alongside — started Android development with the BCA Gurukul project.',
    tag: 'in progress',
  },
  {
    step: '03', id: 'dsa', year: '2023',
    title: 'DSA — DAILY PRACTICE',
    status: 'IN PROGRESS', statusClass: 'ep-log-progress',
    headline: 'Arrays. Sorting. Two Pointers.',
    body: 'Started grinding LeetCode & HackerRank. Arrays, ArrayList, Bubble/Selection Sort, Two Pointers, Two Sum. Building algorithmic intuition one problem at a time.',
    tag: 'in progress', devanagari: '[एल्गोरिदम · अभ्यास]',
  },
  {
    step: '04', id: 'backend', year: '2024',
    title: 'BACKEND — SQL & SYSTEMS',
    status: 'IN PROGRESS', statusClass: 'ep-log-progress',
    headline: 'Data layer. Architecture.',
    body: 'SQL schema design, normalization, ACID principles. Starting to explore Spring Boot, REST architecture, and server-side persistence.',
    tag: 'in progress',
  },
  {
    step: '05', id: 'projects', year: '2024',
    title: 'PROJECTS — SHIPPING REAL THINGS',
    status: 'SHIPPING', statusClass: 'ep-log-shipping',
    headline: 'XRounder is live.',
    body: 'XRounder shipped to production on Vercel. BCA Gurukul and the offline Exam Prep quiz engine are in active development. Real products that real users interact with.',
    tag: 'shipping', devanagari: '[बनाया और भेजा]',
  },
  {
    step: '06', id: 'sde', year: 'NEXT',
    title: 'SOFTWARE DEVELOPER / SDE',
    status: 'NEXT', statusClass: 'ep-log-next',
    headline: 'The destination this log is building toward.',
    body: 'Professional software engineer. Writing reliable backend systems. Building products that matter. This is the frame everything is moving toward.',
    tag: 'next',
  },
]

export default function DevLogSection() {
  const lineRef = useRef(null)
  const sectionRef = useRef(null)
  const entryRefs = useRef([])
  const [lineHeight, setLineHeight] = useState(0)
  const [sectionVisible, setSectionVisible] = useState(false)
  const [revealedEntries, setRevealedEntries] = useState(new Set())

  // Section header
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSectionVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Entry-by-entry reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.entryIdx)
            setRevealedEntries(prev => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.25 }
    )
    entryRefs.current.forEach(ref => { if (ref) obs.observe(ref) })
    return () => obs.disconnect()
  }, [])

  // Scroll-driven line draw
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight
      const sectionH = sectionRef.current.offsetHeight
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (sectionH + windowH * 0.3)))
      setLineHeight(progress * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={`ep-section ep-devlog-section ${sectionVisible ? 'ep-is-visible' : ''}`}
      aria-label="04 — Development Log"
    >
      <div className="ep-grain" aria-hidden="true" />

      <div className="ep-devlog-header">
        <div className="ep-chapter-eyebrow">
          <span className="ep-chapter-num">04</span>
          <span className="ep-chapter-rule" />
          <span className="ep-chapter-label">DEVELOPMENT LOG</span>
        </div>
        <h2 className="ep-devlog-title">
          THE<br /><span className="ep-crimson">TIMELINE.</span>
        </h2>
        <p className="ep-devlog-lead">
          Not a highlight reel — a rough chronological log of where this started and where it's headed.
        </p>
      </div>

      <div className="ep-timeline-wrap">
        <div className="ep-timeline-track">
          <div
            ref={lineRef}
            className="ep-timeline-line"
            style={{ height: `${lineHeight}%` }}
          />
        </div>

        <div className="ep-timeline-entries">
          {devLog.map((entry, idx) => (
            <div
              key={entry.id}
              ref={el => entryRefs.current[idx] = el}
              data-entry-idx={idx}
              className={`ep-log-entry ${entry.statusClass} ${revealedEntries.has(idx) ? 'ep-entry-revealed' : ''}`}
              style={{ transitionDelay: revealedEntries.has(idx) ? `${idx * 0.06}s` : '0s' }}
            >
              <div className="ep-log-node-wrap">
                <div className="ep-log-node" />
                <span className="ep-log-year">{entry.year}</span>
              </div>

              <div className="ep-log-content">
                <div className="ep-log-top-row">
                  <span className="ep-log-step">STEP {entry.step}</span>
                  <span className={`ep-log-status-chip ${entry.statusClass}`}>{entry.status}</span>
                </div>
                <h3 className="ep-log-title">{entry.title}</h3>
                <p className="ep-log-headline">{entry.headline}</p>
                <p className="ep-log-body">{entry.body}</p>
                {entry.devanagari && (
                  <span className="ep-log-devanagari">{entry.devanagari}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
