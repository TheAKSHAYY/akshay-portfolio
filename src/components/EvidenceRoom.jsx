import React, { useEffect, useRef, useState } from 'react'

/* ─── REAL GITHUB PROJECTS DATA ─────────────────────────────────────────── */
const BASE = import.meta.env.BASE_URL

const PROJECTS = [
  {
    id: '01',
    repoName: 'XRounder',
    ghUrl: 'https://github.com/TheAKSHAYY/XRounder',
    liveUrl: 'https://xrounder.in/',
    title: 'XROUNDER',
    category: 'FULL-STACK PLATFORM',
    status: 'LIVE PRODUCTION',
    statusType: 'live',
    tagline: 'An all-in-one learning platform built for BCA students.',
    description:
      'An all-in-one learning platform for BCA students with semester-wise learning content, notes, quizzes, previous papers and exam preparation. Built with a full-stack architecture including role-based auth, admin CMS, and production deployment on Vercel.',
    highlights: [
      'Role-based access control (RBAC) via Supabase Auth',
      'Nested course hierarchy & dynamic curriculum renderer',
      'Client-side state management with TanStack Router',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'TanStack Router', 'Vercel', 'Tailwind CSS'],
    screenshot: `${BASE}assets/xrounder_screenshot.jpg`,
    screenshotAlt: 'XRounder — BCA learning platform dashboard',
    width: 1376,
    height: 768,
  },
  {
    id: '02',
    repoName: 'Volunteer-Management-System',
    ghUrl: 'https://github.com/TheAKSHAYY/Volunteer-Management-System',
    liveUrl: null,
    title: 'VOLUNTEER MGMT SYSTEM',
    category: 'JAVA BACKEND & SQL',
    status: 'DESKTOP APP',
    statusType: 'stable',
    tagline: 'Enterprise dispatch and volunteer lifecycle coordination.',
    description:
      'A robust Java desktop application built to streamline volunteer onboarding, shift scheduling, event allocation, and attendance auditing. Built with pure OOP principles, JDBC transaction safety, and relational schema integrity.',
    highlights: [
      'Relational schema with normalized tables & foreign key constraints',
      'Safe JDBC connection management and parameterized query execution',
      'Event-driven Swing GUI for real-time dispatch and filtering',
    ],
    stack: ['Java', 'OOP Architecture', 'JDBC', 'MySQL', 'Swing UI', 'SQL Schema'],
    screenshot: `${BASE}assets/volunteer_screenshot.jpg`,
    screenshotAlt: 'Volunteer Management System — Java Swing desktop app',
    width: 896,
    height: 1200,
  },
  {
    id: '03',
    repoName: 'SmartDrive-AI',
    ghUrl: 'https://github.com/TheAKSHAYY/SmartDrive-AI',
    liveUrl: null,
    title: 'SMARTDRIVE AI',
    category: 'OFFLINE INTELLIGENCE',
    status: 'LOCAL APPLICATION',
    statusType: 'stable',
    tagline: 'Privacy-first automated file organization and semantic indexing.',
    description:
      'An intelligent offline-first desktop engine that auto-categorizes messy directories, extracts embedded text from documents using local OCR, and provides instant natural language semantic search — 100% on-device with zero cloud dependencies.',
    highlights: [
      'Zero-cloud architecture: completely private local file processing',
      'Automated OCR text extraction pipeline for PDFs & scanned images',
      'Rule-based metadata categorizer with instant keyword indexing',
    ],
    stack: ['Python', 'Tesseract OCR', 'Metadata Parser', 'File System API', 'SQLite'],
    screenshot: `${BASE}assets/smartdrive_screenshot.jpg`,
    screenshotAlt: 'SmartDrive AI — Local intelligent file organizer',
    width: 1376,
    height: 768,
  },
  {
    id: '04',
    repoName: 'WebLength',
    ghUrl: 'https://github.com/TheAKSHAYY/Wavelength',
    liveUrl: 'https://wavelength-orpin-nine.vercel.app',
    title: 'WEBLENGTH',
    category: 'AI GROWTH PLATFORM',
    status: 'LIVE EXPERIMENT',
    statusType: 'live',
    tagline: 'AI-powered YouTube Growth Operating System for creators.',
    description:
      'WebLength helps creators turn a niche or idea into a complete YouTube content strategy — from research and content opportunities to ideas, titles, thumbnails, scripts and video roadmaps. Not a generic AI writing tool. A full growth OS.',
    highlights: [
      'Niche-to-strategy pipeline: idea → research → content plan → scripts',
      'AI-generated titles, thumbnails concepts and video roadmaps',
      'Clean reactive state handling with TypeScript and React',
    ],
    stack: ['TypeScript', 'React', 'AI APIs', 'Vercel'],
    screenshot: `${BASE}assets/wavelength_screenshot.jpg`,
    screenshotAlt: 'WebLength — AI-powered YouTube growth platform',
    width: 1376,
    height: 768,
  },
  {
    id: '05',
    repoName: 'data-structure-quiz-',
    ghUrl: 'https://github.com/TheAKSHAYY/data-structure-quiz-',
    liveUrl: null,
    title: 'DSA & DBMS QUIZ ENGINE',
    category: 'ALGORITHMS & CORE WEB',
    status: 'EDUCATION TOOL',
    statusType: 'stable',
    tagline: 'Zero-framework computer science exam preparation platform.',
    description:
      'A performance-focused practice engine designed for CS undergraduates preparing for technical interviews and university examinations. Covers Tree traversals, Graph algorithms, Normalization, and SQL queries with timer-based evaluation.',
    highlights: [
      'Built with zero runtime dependencies — pure HTML5, CSS3, and vanilla JavaScript',
      'JSON-structured question bank with categorized question banks',
      'Instant score evaluation, timer controls, and detailed solution breakdowns',
    ],
    stack: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'JSON Schema', 'Local Storage'],
    screenshot: `${BASE}assets/dsa_quiz_screenshot.jpg`,
    screenshotAlt: 'DSA & DBMS Quiz Engine — Practice interface',
    width: 1376,
    height: 768,
  },
]

function EvidenceRoom() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [sectionVisible, setSectionVisible] = useState(false)
  const [revealedCards, setRevealedCards] = useState(new Set())
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : activeFilter === 'LIVE'
      ? PROJECTS.filter((p) => p.liveUrl)
      : activeFilter === 'JAVA'
      ? PROJECTS.filter((p) => p.stack.includes('Java'))
      : activeFilter === 'FULLSTACK'
      ? PROJECTS.filter((p) => p.category.includes('FULL-STACK') || p.category.includes('WEB'))
      : PROJECTS

  // Section header reveal
  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSectionVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Card-by-card reveal as visitor scrolls through work
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.cardIdx, 10)
            setRevealedCards((prev) => {
              if (prev.has(idx)) return prev
              const next = new Set(prev)
              next.add(idx)
              return next
            })
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    cardRefs.current.forEach((ref) => {
      if (ref) obs.observe(ref)
    })
    return () => obs.disconnect()
  }, [filteredProjects])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`er-section ${sectionVisible ? 'er-is-visible' : ''}`}
      aria-label="Selected Work — Projects"
    >
      {/* Background ambient texture */}
      <div className="er-bg-ambient" aria-hidden="true" />

      {/* ── SECTION HEADER ── */}
      <div className="er-container">
        <header className="er-header">
          <div className="er-eyebrow">
            <span className="er-eyebrow-num">02</span>
            <span className="er-eyebrow-dot">/</span>
            <span className="er-eyebrow-label">SELECTED WORK</span>
            <span className="er-eyebrow-badge">THE ARCHIVE</span>
          </div>

          <h2 className="er-headline">
            <span className="er-headline-main">WHAT I'VE BUILT.</span>
          </h2>

          <p className="er-lead">
            Production web platforms, enterprise Java backends, and offline intelligence systems.
            Verified from{' '}
            <a
              href="https://github.com/TheAKSHAYY"
              target="_blank"
              rel="noopener noreferrer"
              className="er-github-inline-link"
            >
              github.com/TheAKSHAYY
            </a>
            .
          </p>

          {/* Filter Pills */}
          <div className="er-filters" role="tablist" aria-label="Project filter tabs">
            {[
              { id: 'ALL', label: 'All Projects (5)' },
              { id: 'LIVE', label: 'Live Deployments' },
              { id: 'JAVA', label: 'Java & Backend' },
              { id: 'FULLSTACK', label: 'Web & Frontend' },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`er-filter-btn ${activeFilter === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* ── PROJECTS LIST ── */}
        <div className="er-showcase-list">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 1
            return (
              <article
                key={project.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-card-idx={idx}
                className={`er-project-card ${isEven ? 'is-reversed' : ''} ${
                  revealedCards.has(idx) ? 'er-card-revealed' : ''
                }`}
                aria-label={`Project: ${project.title}`}
              >
                {/* Content Column */}
                <div className="er-card-content">
                  <div className="er-card-meta-top">
                    <span className="er-card-index">{project.id}</span>
                    <span className="er-card-category">{project.category}</span>
                    <span className={`er-card-status er-status-${project.statusType}`}>
                      <span className="er-status-dot" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="er-card-title">{project.title}</h3>
                  <p className="er-card-tagline">{project.tagline}</p>
                  <p className="er-card-desc">{project.description}</p>

                  {/* Highlights */}
                  <div className="er-card-highlights">
                    <span className="er-highlights-label">ARCHITECTURAL HIGHLIGHTS</span>
                    <ul className="er-highlights-list">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="er-highlight-item">
                          <span className="er-bullet">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="er-card-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="er-stack-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="er-card-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="er-btn-primary"
                        aria-label={`Launch ${project.title} live demo`}
                      >
                        <span>Launch Live App</span>
                        <svg className="er-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.ghUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="er-btn-secondary"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <svg className="er-gh-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                {/* Visual / Screenshot Column */}
                <div className="er-card-visual">
                  <a
                    href={project.liveUrl || project.ghUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="er-window-frame"
                    title={`Open ${project.title}`}
                  >
                    {/* Window Titlebar */}
                    <div className="er-window-bar">
                      <div className="er-window-dots">
                        <span className="er-dot er-dot-red" />
                        <span className="er-dot er-dot-yellow" />
                        <span className="er-dot er-dot-green" />
                      </div>
                      <div className="er-window-title">
                        <span className="er-window-path">github.com/TheAKSHAYY/{project.repoName}</span>
                      </div>
                      <div className="er-window-status">
                        <span className="er-window-pill">{project.stack[0]}</span>
                      </div>
                    </div>

                    {/* Screenshot Body */}
                    <div className="er-window-body">
                      <img
                        src={project.screenshot}
                        alt={project.screenshotAlt}
                        className="er-window-img"
                        width={project.width || 1376}
                        height={project.height || 768}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="er-window-overlay">
                        <span className="er-overlay-btn">
                          {project.liveUrl ? 'Visit Production Site ↗' : 'Inspect Source Code ↗'}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* ── SECTION CLOSING / TRANSITION ── */}
        <footer className="er-footer">
          <div className="er-footer-divider" />
          <div className="er-footer-content">
            <div className="er-footer-left">
              <span className="er-footer-num">02 / END OF ARCHIVE</span>
              <p className="er-footer-sub">Explore more experiments, utility scripts, and algorithms on GitHub.</p>
            </div>
            <a
              href="https://github.com/TheAKSHAYY?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="er-footer-btn"
            >
              <span>View All Repositories</span>
              <svg className="er-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default React.memo(EvidenceRoom)
