import React, { useEffect, useRef, useState } from 'react'

const devLog = [
  {
    step: '01', id: 'foundation', year: '2024',
    title: 'STARTED BCA',
    status: 'DONE', statusClass: 'ep-log-done',
    headline: 'Programming fundamentals and CS foundation.',
    body: 'Started Bachelor of Computer Applications — where real programming began. OS, DBMS, discrete math, C basics. The foundation everything else is built on.',
    tag: 'foundation',
  },
  {
    step: '02', id: 'first-builds', year: '2023',
    title: 'FIRST BUILDS',
    status: 'DONE', statusClass: 'ep-log-done',
    headline: 'Started building practical web and Android projects.',
    body: 'Chose Java as the primary language. OOP, JVM internals, Collections, JDBC. Started building actual things — not just solving textbook problems.',
    tag: 'done',
  },
  {
    step: '03', id: 'xrounder', year: '2024',
    title: 'XROUNDER',
    status: 'SHIPPED', statusClass: 'ep-log-shipping',
    headline: 'Built a learning platform for BCA students.',
    body: 'XRounder shipped to production on Vercel. An all-in-one learning platform for BCA students — semester-wise content, notes, quizzes, previous papers, and exam prep. React + Supabase. Live and growing.',
    tag: 'shipped', devanagari: '[बनाया और भेजा]',
  },
  {
    step: '04', id: 'weblength', year: '2024',
    title: 'WEBLENGTH',
    status: 'SHIPPED', statusClass: 'ep-log-shipping',
    headline: 'Built an AI-powered YouTube creator growth product.',
    body: 'WebLength — a YouTube Growth Operating System. Turns a niche or idea into a complete content strategy: research, content opportunities, titles, thumbnails, scripts and video roadmaps. Not a generic AI tool.',
    tag: 'shipped',
  },
  {
    step: '05', id: 'dsa', year: '2024',
    title: 'DSA — DAILY PRACTICE',
    status: 'IN PROGRESS', statusClass: 'ep-log-progress',
    headline: 'Arrays. Sorting. Two Pointers.',
    body: 'Grinding LeetCode & HackerRank daily. Arrays, ArrayList, sorting algorithms, Two Pointers, Two Sum. Building algorithmic intuition one problem at a time.',
    tag: 'in progress', devanagari: '[एल्गोरिदम · अभ्यास]',
  },
  {
    step: '06', id: 'next', year: 'NEXT',
    title: 'NEXT',
    status: 'NEXT', statusClass: 'ep-log-next',
    headline: 'Deepening Java, Spring Boot, DSA and backend development.',
    body: 'Spring Boot, advanced DSA patterns, system design fundamentals. The build never stops. Professional software engineer — that\'s where this log is headed.',
    tag: 'next',
  },
]

function DevLogSection() {
  const lineRef = useRef(null)
  const sectionRef = useRef(null)
  const entryRefs = useRef([])
  const [sectionVisible, setSectionVisible] = useState(false)
  const [revealedEntries, setRevealedEntries] = useState(new Set())

  // Section header - subtle one-time reveal
  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSectionVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Entry-by-entry reveal - unobserve immediately once revealed
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.entryIdx, 10)
            setRevealedEntries(prev => {
              if (prev.has(idx)) return prev
              const next = new Set(prev)
              next.add(idx)
              return next
            })
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    entryRefs.current.forEach(ref => { if (ref) obs.observe(ref) })
    return () => obs.disconnect()
  }, [])

  // Scroll-driven line draw via GPU-accelerated transform (scaleY) with zero React re-renders
  useEffect(() => {
    let ticking = false

    const updateLine = () => {
      if (!sectionRef.current || !lineRef.current) {
        ticking = false
        return
      }
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight

      // Only perform work if section is in or near viewport
      if (rect.bottom > 0 && rect.top < windowH) {
        const sectionH = sectionRef.current.offsetHeight
        const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (sectionH + windowH * 0.3)))
        lineRef.current.style.transform = `translateX(-50%) scaleY(${progress})`
      }
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateLine)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateLine()

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
            style={{ height: '100%', transform: 'translateX(-50%) scaleY(0)', transformOrigin: 'top', willChange: 'transform' }}
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

export default React.memo(DevLogSection)
