import React, { useState, useEffect } from 'react'
import initialReposData from '../data/github_repos.json'

// Curated metadata enhancements mapped to real GitHub repositories
const repoMetaMap = {
  'XRounder': {
    posterType: 'image-heavy',
    displayTitle: 'XROUNDER',
    devanagariTag: 'Gitहब • लाइव',
    badge: 'LIVE PRODUCT · FULL STACK',
    shortDesc: 'A full-stack learning platform built around educational content and course management — course hierarchies, admin CMS tooling, and public student access.',
    techStack: ['React', 'TypeScript', 'Supabase', 'TanStack Router', 'Vercel'],
    liveUrl: 'https://xrounder.in/',
    features: ['Course hierarchy & CMS', 'Role-based Auth (Admin/SuperAdmin)', 'Supabase RLS database', 'SSR & SEO optimized'],
    statHighlight: 'LIVE PRODUCTION'
  },
  'Volunteer-Management-System': {
    posterType: 'typography-heavy',
    displayTitle: 'VOLUNTEER MANAGEMENT SYSTEM',
    devanagariTag: 'Jaवा आर्किटेक्चर',
    badge: 'JAVA BACKEND · DESKTOP',
    shortDesc: 'Volunteer Management System engineered in Java for managing volunteer registration, task allocation, event coordination, and attendance tracking.',
    techStack: ['Java', 'OOP Architecture', 'JDBC / SQL', 'Desktop UI'],
    liveUrl: null,
    features: ['Volunteer lifecycle registration', 'Event & shift allocation logic', 'Relational database schema', 'Attendance tracking module'],
    statHighlight: 'JAVA CORE'
  },
  'SmartDrive-AI': {
    posterType: 'split-layout',
    displayTitle: 'SMARTDRIVE AI',
    devanagariTag: 'स्मार्ट ड्राइव',
    badge: 'PYTHON · DESKTOP AI',
    shortDesc: 'An intelligent offline-first desktop application that automatically organizes files using metadata rules, OCR document extraction, and semantic search.',
    techStack: ['Python', 'OCR Engine', 'Semantic Search', 'Metadata Parser'],
    liveUrl: null,
    features: ['Rule-based file organizer', 'Local OCR text extraction', 'Offline-first privacy model', 'Semantic query parser'],
    statHighlight: 'LOCAL AI'
  },
  'Wavelength': {
    posterType: 'minimal',
    displayTitle: 'WAVELENGTH',
    devanagariTag: 'वेवलेंथ',
    badge: 'TYPESCRIPT · WEB APP',
    shortDesc: 'A modern web engineering project exploring interactive audio frequency dynamics, waveforms, and reactive interface feedback.',
    techStack: ['TypeScript', 'Web Audio API', 'React', 'Vercel'],
    liveUrl: 'https://wavelength-orpin-nine.vercel.app',
    features: ['Real-time audio visualizer', 'Responsive waveform render', 'TypeScript type-safe pipelines', 'Vercel edge deployment'],
    statHighlight: 'INTERACTIVE AUDIO'
  },
  'data-structure-quiz-': {
    posterType: 'oversized',
    displayTitle: 'DSA & DBMS QUIZ ENGINE',
    devanagariTag: 'Leetकोड • क्विज',
    badge: 'ALGORITHMS · WEB CORE',
    shortDesc: 'Offline-ready subject-wise practice tools built for Computer Science undergraduates — covering Data Structures, SQL, and algorithm trivia.',
    techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'JSON Schema'],
    liveUrl: null,
    features: ['Subject-wise question banks', 'Timer & instant scoring', 'Retry wrong answers logic', 'Zero framework dependency'],
    statHighlight: 'CORE FUNDAMENTALS'
  }
}

export default function ProjectSection() {
  const [repos, setRepos] = useState(initialReposData)
  const [hoveredPoster, setHoveredPoster] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  // Dynamically fetch from GitHub API with fallback to initial data
  useEffect(() => {
    fetch('https://api.github.com/users/TheAKSHAYY/repos?per_page=100&sort=updated')
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok')
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data)
        }
      })
      .catch((err) => {
        console.warn('Using local fallback for GitHub repositories:', err)
      })
  }, [])

  // Filter and order curated key repositories
  const curatedKeys = ['XRounder', 'Volunteer-Management-System', 'SmartDrive-AI', 'Wavelength', 'data-structure-quiz-']
  
  const featuredProjects = curatedKeys
    .map((key, idx) => {
      const liveRepo = repos.find((r) => r.name.toLowerCase() === key.toLowerCase())
      const fallbackRepo = initialReposData.find((r) => r.name.toLowerCase() === key.toLowerCase())
      const repo = liveRepo || fallbackRepo
      if (!repo) return null

      const meta = repoMetaMap[key] || {}
      return {
        number: `0${idx + 1}`,
        rawName: repo.name,
        title: meta.displayTitle || repo.name.toUpperCase(),
        description: meta.shortDesc || repo.description || 'Open source engineering project.',
        githubUrl: repo.html_url || `https://github.com/TheAKSHAYY/${repo.name}`,
        liveUrl: meta.liveUrl || repo.homepage || null,
        language: repo.language || meta.techStack?.[0] || 'Code',
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        posterType: meta.posterType || 'minimal',
        badge: meta.badge || 'OPEN SOURCE',
        techStack: meta.techStack || [repo.language || 'Software Engineering'],
        devanagariTag: meta.devanagariTag || 'Gitहब',
        features: meta.features || [],
        statHighlight: meta.statHighlight || 'GITHUB REPO'
      }
    })
    .filter(Boolean)

  return (
    <section id="projects" className="vintage-posters-section" aria-label="Selected Work — Cinematic Project Posters">
      <div className="section-container">
        {/* SECTION HEADER (REQ: 03 / SELECTED WORK -> BUILT DIFFERENT) */}
        <div className="editorial-section-header poster-section-header">
          <div className="editorial-number-glyph">02</div>
          <div className="editorial-title-wrap">
            <span className="editorial-sub-tag">// 03 / SELECTED WORK · REAL GITHUB SHOWCASE</span>
            <h2 className="editorial-hero-heading">
              BUILT<br />
              <span className="heading-crimson">DIFFERENT.</span>
            </h2>
            <p className="editorial-lead-statement">
              Live products, Java systems, and algorithmic engines pulled straight from my public GitHub profile. Each artifact crafted with rigorous fundamentals.
            </p>
          </div>

          <div className="poster-header-stamp" aria-hidden="true">
            <span className="stamp-border">AUTHENTIC REPOSITORIES</span>
            <span className="stamp-author">@TheAKSHAYY</span>
          </div>
        </div>

        {/* VINTAGE CINEMATIC POSTER WALL */}
        <div className="poster-wall-grid">
          {featuredProjects.map((proj, index) => {
            const isHovered = hoveredPoster === proj.rawName

            return (
              <article
                key={proj.rawName}
                className={`vintage-project-poster poster-type-${proj.posterType} ${isHovered ? 'is-poster-hovered' : ''}`}
                onMouseEnter={() => setHoveredPoster(proj.rawName)}
                onMouseLeave={() => setHoveredPoster(null)}
              >
                {/* Vintage Poster Texture Overlays */}
                <div className="poster-grain-layer" aria-hidden="true" />
                <div className="poster-vignette-layer" aria-hidden="true" />
                <div className="poster-edge-border" aria-hidden="true" />

                {/* POSTER HEADER ROW */}
                <div className="poster-card-topbar">
                  <div className="poster-num-badge">
                    <span className="poster-num-big">{proj.number}</span>
                    <span className="poster-badge-chip">{proj.badge}</span>
                  </div>

                  <div className="poster-top-actions">
                    <span className="vintage-script-annotation poster-devanagari-stamp">
                      [{proj.devanagariTag}]
                    </span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poster-github-direct-btn"
                      aria-label={`View ${proj.title} on GitHub`}
                    >
                      <span>GITHUB</span>
                      <span className="arrow-glyph">↗</span>
                    </a>
                  </div>
                </div>

                {/* POSTER HERO VISUAL / COMPOSITION VARIANT */}
                {proj.posterType === 'image-heavy' && (
                  <div className="poster-visual-frame frame-image-heavy">
                    <div className="visual-terminal-chrome">
                      <div className="chrome-dots">
                        <span className="dot dot-red" />
                        <span className="dot dot-ivory" />
                        <span className="dot dot-crimson" />
                      </div>
                      <span className="chrome-url">https://xrounder.in/ &middot; LIVE APPLICATION</span>
                      <span className="chrome-tag">TS / REACT / SUPABASE</span>
                    </div>
                    <div className="visual-preview-canvas canvas-dark-split">
                      <div className="split-canvas-left">
                        <span className="preview-watermark">XROUNDER</span>
                        <div className="preview-hero-mock">
                          <span className="mock-title">Interactive Course Architecture</span>
                          <p className="mock-desc">Hierarchical content models, SSR caching, role claims, and full admin course management.</p>
                          <div className="mock-pills">
                            <span>Admin CMS</span>
                            <span>TanStack Start</span>
                            <span>Edge Auth</span>
                          </div>
                        </div>
                      </div>
                      <div className="split-canvas-right">
                        <div className="stat-giant-box">
                          <span className="stat-label">STATUS</span>
                          <span className="stat-value-live">SHIPPED</span>
                          <span className="stat-sub">Vercel Production</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {proj.posterType === 'typography-heavy' && (
                  <div className="poster-visual-frame frame-typography-heavy">
                    <div className="type-heavy-watermark" aria-hidden="true">JAVA</div>
                    <div className="type-heavy-content">
                      <div className="java-badge-banner">
                        <span className="java-cup-icon">☕</span>
                        <span>ENTERPRISE VOLUNTEER DISPATCH SYSTEM</span>
                      </div>
                      <div className="type-heavy-specs">
                        <div className="spec-col">
                          <span className="spec-title">// SYSTEM MODULES</span>
                          <span className="spec-item">&bull; Volunteer Roster &amp; Profiles</span>
                          <span className="spec-item">&bull; Task Dispatch &amp; Shifts</span>
                          <span className="spec-item">&bull; Attendance Verification</span>
                        </div>
                        <div className="spec-col">
                          <span className="spec-title">// STACK INTERNALS</span>
                          <span className="spec-item">&bull; Core Java &amp; Collections</span>
                          <span className="spec-item">&bull; Relational Data Model</span>
                          <span className="spec-item">&bull; Swing / Desktop Architecture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {proj.posterType === 'split-layout' && (
                  <div className="poster-visual-frame frame-split-layout">
                    <div className="split-ai-left">
                      <div className="ai-status-led">
                        <span className="led-pulse" />
                        <span>LOCAL AI DAEMON</span>
                      </div>
                      <span className="split-ai-sub">OFFLINE INTELLIGENCE</span>
                      <p className="split-ai-para">Processes local documents, runs OCR parsing, and performs semantic searches without cloud dependency.</p>
                    </div>
                    <div className="split-ai-right">
                      <div className="ocr-rule-display">
                        <span className="rule-line">[OCR-EXTRACT] &rarr; Document_048.pdf</span>
                        <span className="rule-line highlight">[SEMANTIC-INDEX] &rarr; Match: 98.4%</span>
                        <span className="rule-line">[METADATA-SORT] &rarr; /Organized/Finance</span>
                      </div>
                    </div>
                  </div>
                )}

                {proj.posterType === 'minimal' && (
                  <div className="poster-visual-frame frame-minimal-waves">
                    <div className="audio-wave-visualizer" aria-hidden="true">
                      {[40, 65, 85, 30, 95, 70, 50, 80, 100, 60, 45, 90, 75, 55, 85, 40].map((h, i) => (
                        <span key={i} className="wave-bar" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="wave-caption">
                      <span>AUDIO REACTIVE FREQUENCY ENGINE</span>
                      <span>TYPESCRIPT &middot; WEB AUDIO</span>
                    </div>
                  </div>
                )}

                {proj.posterType === 'oversized' && (
                  <div className="poster-visual-frame frame-oversized-quiz">
                    <div className="quiz-numerals-stack">
                      <div className="num-row">
                        <span className="num-giant">DSA</span>
                        <span className="num-slash">/</span>
                        <span className="num-giant">DBMS</span>
                      </div>
                      <div className="quiz-meta-strip">
                        <span>DATA STRUCTURES</span>
                        <span>&bull;</span>
                        <span>SQL NORMALIZATION</span>
                        <span>&bull;</span>
                        <span>ALGORITHMS</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* POSTER MAIN BODY */}
                <div className="poster-body-block">
                  <div className="poster-title-row">
                    <h3 className="poster-editorial-title">{proj.title}</h3>
                    <span className="poster-stat-highlight">{proj.statHighlight}</span>
                  </div>

                  <p className="poster-description-text">{proj.description}</p>

                  {/* KEY CAPABILITIES BULLETS */}
                  {proj.features.length > 0 && (
                    <ul className="poster-features-list">
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx} className="poster-feature-item">
                          <span className="feat-bullet">&mdash;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* TECH STACK STRIP */}
                  <div className="poster-tech-strip">
                    {proj.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="poster-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* POSTER ACTION BAR */}
                  <div className="poster-action-bar">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poster-primary-action-btn"
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="action-arrow">&rarr;</span>
                    </a>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="poster-live-demo-link"
                      >
                        <span>LIVE DEPLOYMENT</span>
                        <span className="action-arrow">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* BOTTOM POSTER FOOTER STRIP */}
        <div className="poster-section-footer">
          <div className="footer-left-info">
            <span className="footer-git-icon">⌥</span>
            <span>ALL PROJECTS OPEN SOURCE ON GITHUB</span>
            <span className="footer-sep">&middot;</span>
            <span className="vintage-script-annotation" style={{ fontSize: '0.82rem' }}>[Gitहब संकलन]</span>
          </div>
          <a
            href="https://github.com/TheAKSHAYY?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-all-repos-btn"
          >
            <span>EXPLORE ALL 13+ REPOSITORIES &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}