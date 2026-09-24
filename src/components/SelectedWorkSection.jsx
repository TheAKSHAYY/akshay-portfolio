import React, { useState, useEffect, useRef } from 'react'
import initialReposData from '../data/github_repos.json'

const repoMetaMap = {
  'XRounder': {
    number: '01',
    displayTitle: 'XROUNDER',
    category: 'FULL STACK · LIVE PRODUCT',
    devanagariTag: 'Gitहब · लाइव',
    tagline: 'A learning platform you can actually use.',
    shortDesc: 'Full-stack learning platform built around course hierarchies, admin CMS tooling, role-based auth, and public student access. Shipped on Vercel.',
    techStack: ['React', 'TypeScript', 'Supabase', 'TanStack Router', 'Vercel'],
    liveUrl: 'https://xrounder.in/',
    statA: { label: 'STATUS', value: 'LIVE' },
    statB: { label: 'STACK', value: 'REACT + TS' },
  },
  'Volunteer-Management-System': {
    number: '02',
    displayTitle: 'VOLUNTEER MGMT SYSTEM',
    category: 'JAVA BACKEND · DESKTOP',
    devanagariTag: 'जावा आर्किटेक्चर',
    tagline: 'Enterprise dispatch, engineered in Java.',
    shortDesc: 'Volunteer lifecycle management system built in Java. Covers registration, event coordination, task allocation, and attendance tracking via JDBC + SQL.',
    techStack: ['Java', 'OOP Architecture', 'JDBC / SQL', 'Swing UI'],
    liveUrl: null,
    statA: { label: 'LANGUAGE', value: 'JAVA' },
    statB: { label: 'PATTERN', value: 'OOP + JDBC' },
  },
  'SmartDrive-AI': {
    number: '03',
    displayTitle: 'SMARTDRIVE AI',
    category: 'PYTHON · LOCAL AI',
    devanagariTag: 'स्मार्ट ड्राइव',
    tagline: 'Offline intelligence. No cloud required.',
    shortDesc: 'Intelligent offline-first desktop app that auto-organizes files using metadata rules, OCR text extraction, and semantic search — entirely local.',
    techStack: ['Python', 'OCR Engine', 'Semantic Search', 'Metadata Parser'],
    liveUrl: null,
    statA: { label: 'MODE', value: 'OFFLINE' },
    statB: { label: 'CORE', value: 'PYTHON + OCR' },
  },
  'Wavelength': {
    number: '04',
    displayTitle: 'WAVELENGTH',
    category: 'TYPESCRIPT · WEB',
    devanagariTag: 'वेवलेंथ',
    tagline: 'Sound, visualized in real time.',
    shortDesc: 'Interactive web app exploring audio frequency dynamics, real-time waveform rendering, and reactive UI feedback. TypeScript + Web Audio API.',
    techStack: ['TypeScript', 'Web Audio API', 'React', 'Vercel'],
    liveUrl: 'https://wavelength-orpin-nine.vercel.app',
    statA: { label: 'RUNTIME', value: 'BROWSER' },
    statB: { label: 'API', value: 'WEB AUDIO' },
  },
  'data-structure-quiz-': {
    number: '05',
    displayTitle: 'DSA & DBMS QUIZ ENGINE',
    category: 'ALGORITHMS · CORE WEB',
    devanagariTag: 'Leetकोड · क्विज',
    tagline: 'Zero framework. Pure fundamentals.',
    shortDesc: 'Offline-ready subject-wise practice tools for CS undergraduates — DSA, SQL, and algorithm trivia. JSON-based, no dependency, no framework.',
    techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'JSON Schema'],
    liveUrl: null,
    statA: { label: 'DEPS', value: 'ZERO' },
    statB: { label: 'TYPE', value: 'OFFLINE TOOL' },
  },
}

const curatedKeys = ['XRounder', 'Volunteer-Management-System', 'SmartDrive-AI', 'Wavelength', 'data-structure-quiz-']

const tickerItems = [
  'REAL GITHUB REPOSITORIES', '·', 'AKSHAY SHARMA', '·', 'XROUNDER', '·',
  'JAVA BACKEND', '·', 'REACT', '·', 'PYTHON', '·', 'TYPESCRIPT', '·',
  'LIVE PRODUCTS', '·', 'OPEN SOURCE', '·', '@TheAKSHAYY', '·',
  'BUILT DIFFERENT', '·', 'DSA ENGINEER', '·',
]

export default function SelectedWorkSection() {
  const [repos, setRepos] = useState(initialReposData)
  const [revealedPosters, setRevealedPosters] = useState(new Set())
  const headerRef = useRef(null)
  const posterRefs = useRef([])

  // Header visibility
  const [headerVisible, setHeaderVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.1 }
    )
    if (headerRef.current) obs.observe(headerRef.current)
    return () => obs.disconnect()
  }, [])

  // Per-poster visibility
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx)
            setRevealedPosters(prev => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.15 }
    )
    posterRefs.current.forEach(ref => { if (ref) obs.observe(ref) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/TheAKSHAYY/repos?per_page=100&sort=updated')
      .then(res => { if (!res.ok) throw new Error('not ok'); return res.json() })
      .then(data => { if (Array.isArray(data) && data.length > 0) setRepos(data) })
      .catch(() => {})
  }, [])

  const projects = curatedKeys.map((key) => {
    const liveRepo = repos.find(r => r.name.toLowerCase() === key.toLowerCase())
    const fallbackRepo = initialReposData.find(r => r.name.toLowerCase() === key.toLowerCase())
    const repo = liveRepo || fallbackRepo
    if (!repo) return null
    const meta = repoMetaMap[key] || {}
    return {
      rawName: repo.name,
      githubUrl: repo.html_url || `https://github.com/TheAKSHAYY/${repo.name}`,
      stars: repo.stargazers_count || 0,
      ...meta,
    }
  }).filter(Boolean)

  return (
    <section id="projects" className={`ep-section ep-work-section ${headerVisible ? 'ep-is-visible' : ''}`} aria-label="02 — Selected Work">
      <div className="ep-grain" aria-hidden="true" />

      {/* Section Header */}
      <div className="ep-work-header" ref={headerRef}>
        <div className="ep-chapter-eyebrow">
          <span className="ep-chapter-num">02</span>
          <span className="ep-chapter-rule" />
          <span className="ep-chapter-label">SELECTED WORK</span>
        </div>
        <h2 className="ep-work-mega-title">
          <span className="ep-work-title-built">BUILT</span>
          <span className="ep-work-title-different">DIFFERENT.</span>
        </h2>
        <p className="ep-work-lead">
          Real repositories. Live products and engineered systems — pulled straight from GitHub profile <em>@TheAKSHAYY</em>.
        </p>
        <div className="ep-work-github-stamp">
          <span className="ep-stamp-border">AUTHENTIC REPOSITORIES</span>
          <span className="ep-stamp-sub">@TheAKSHAYY</span>
        </div>
      </div>

      {/* Poster stack */}
      <div className="ep-poster-stack">
        {projects.map((proj, idx) => (
          <article
            key={proj.rawName}
            ref={el => posterRefs.current[idx] = el}
            data-idx={idx}
            className={`ep-poster ep-poster-idx-${idx} ${revealedPosters.has(idx) ? 'ep-poster-revealed' : ''}`}
          >
            <div className="ep-poster-grain" aria-hidden="true" />
            <div className="ep-poster-border" aria-hidden="true" />

            <div className="ep-poster-topbar">
              <div className="ep-poster-num-block">
                <span className="ep-poster-big-num">{proj.number}</span>
                <span className="ep-poster-category">{proj.category}</span>
              </div>
              <div className="ep-poster-topbar-right">
                <span className="ep-poster-devanagari">[{proj.devanagariTag}]</span>
                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
                   className="ep-poster-gh-btn" aria-label={`View ${proj.displayTitle} on GitHub`}>
                  GITHUB <span className="ep-arrow">↗</span>
                </a>
              </div>
            </div>

            <div className="ep-poster-body">
              <div className="ep-poster-title-col">
                <h3 className="ep-poster-title">{proj.displayTitle}</h3>
                <p className="ep-poster-tagline">{proj.tagline}</p>
                <p className="ep-poster-desc">{proj.shortDesc}</p>
              </div>

              <div className="ep-poster-meta-col">
                <div className="ep-poster-stat-pair">
                  <div className="ep-poster-stat">
                    <span className="ep-stat-label">{proj.statA.label}</span>
                    <span className="ep-stat-val">{proj.statA.value}</span>
                  </div>
                  <div className="ep-poster-stat">
                    <span className="ep-stat-label">{proj.statB.label}</span>
                    <span className="ep-stat-val">{proj.statB.value}</span>
                  </div>
                </div>

                <div className="ep-poster-tech-row">
                  {proj.techStack.map((t, i) => (
                    <span key={i} className="ep-tech-tag">{t}</span>
                  ))}
                </div>

                <div className="ep-poster-actions">
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="ep-poster-primary-btn">
                    VIEW ON GITHUB <span className="ep-arrow">→</span>
                  </a>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="ep-poster-live-btn">
                      LIVE DEMO <span className="ep-arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Marquee ticker strip */}
      <div className="ep-ticker-wrap" aria-hidden="true">
        <div className="ep-ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className={`ep-ticker-item ${item === '·' ? 'ep-ticker-item-crimson' : ''}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer strip */}
      <div className="ep-work-footer">
        <span className="ep-work-footer-text">ALL PROJECTS OPEN SOURCE ON GITHUB · [Gitहब संकलन]</span>
        <a href="https://github.com/TheAKSHAYY?tab=repositories" target="_blank" rel="noopener noreferrer"
           className="ep-work-all-repos-btn">
          EXPLORE ALL REPOSITORIES →
        </a>
      </div>
    </section>
  )
}
