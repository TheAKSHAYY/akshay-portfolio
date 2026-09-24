import React, { useState, useEffect, useRef } from 'react'

const skillGroups = [
  {
    id: 'languages',
    groupLabel: 'LANGUAGES',
    groupNum: '01',
    items: [
      {
        id: 'java', name: 'JAVA', tag: 'PRIMARY LANGUAGE', role: 'Core Focus',
        description: 'Vehicle for deep backend engineering. OOP architecture, JVM internals, Collections, Exception handling, JDBC, and high-reliability server code.',
        topics: ['OOP — Polymorphism, Abstraction, Encapsulation', 'Collections — HashMap, ArrayList, HashSet', 'JVM Memory & Garbage Collection', 'JDBC & Backend Persistence'],
      },
      {
        id: 'javascript', name: 'JAVASCRIPT', tag: 'WEB LOGIC · ES6+', role: 'Web Language',
        description: 'Modern ES6+ syntax, asynchronous programming (Promises, async/await), DOM manipulation, and browser APIs.',
        topics: ['ES6+ Syntactic Patterns', 'Async/Await & Event Loop', 'Fetch API & Client Architecture', 'TypeScript Compilation Support'],
      },
      {
        id: 'sql', name: 'SQL', tag: 'RELATIONAL DATABASES', role: 'Data Layer',
        description: 'Relational data modeling, schema normalization, ACID transaction semantics, complex joins, indexing, and query optimization.',
        topics: ['PostgreSQL & MySQL', 'Complex JOINs & Subqueries', 'Schema Normalization (3NF)', 'Indexing & Performance Tuning'],
      },
    ],
  },
  {
    id: 'backend',
    groupLabel: 'BACKEND & FRAMEWORKS',
    groupNum: '02',
    items: [
      {
        id: 'spring-boot', name: 'SPRING BOOT', tag: 'ENTERPRISE BACKEND', role: 'Active Learning',
        description: 'Modern microservices and RESTful backends. Dependency Injection, Spring MVC, Spring Data JPA, application configuration, and filter chains.',
        topics: ['Inversion of Control (IoC) & DI', 'RESTful API Design & Controllers', 'Spring Data JPA & ORM', 'Security & Filter Chains'],
      },
      {
        id: 'supabase', name: 'SUPABASE', tag: 'BACKEND INFRASTRUCTURE · AUTH', role: 'Cloud Backend',
        description: 'Postgres backend-as-a-service, Row-Level Security policies, authentication flows, storage buckets, and real-time listeners.',
        topics: ['PostgreSQL Database Engine', 'Row-Level Security (RLS)', 'JWT Authentication & Role Claims', 'Storage Buckets & Webhooks'],
      },
    ],
  },
  {
    id: 'core',
    groupLabel: 'CORE',
    groupNum: '03',
    items: [
      {
        id: 'dsa', name: 'DSA', tag: 'DATA STRUCTURES · ALGORITHMS', role: 'Daily Practice',
        description: 'Rigorous algorithmic problem solving on LeetCode & HackerRank. Time/Space Complexity analysis, two pointers, recursion, and core data structures.',
        topics: ['Arrays, Strings & Two Pointers', 'Sliding Window & Hashing', 'Linked Lists, Stacks & Queues', 'Time Complexity (Big-O Analysis)'],
        devanagari: 'डीएसए',
      },
    ],
  },
  {
    id: 'tools',
    groupLabel: 'TOOLS & DEVELOPMENT',
    groupNum: '04',
    items: [
      {
        id: 'git', name: 'GIT', tag: 'VERSION CONTROL', role: 'Daily Workflow',
        description: 'Version tracking, commit discipline, branch management, merge conflict resolution, interactive rebase, and working directory control.',
        topics: ['Branching & Merging Strategies', 'Atomic Commit History', 'Rebase & Reset Workflows', 'Diff & Log Inspection'],
      },
      {
        id: 'github', name: 'GITHUB', tag: 'COLLABORATION · OPEN SOURCE', role: 'Ecosystem',
        description: 'Open-source portfolio curation, Pull Requests, Code Reviews, GitHub Actions CI/CD workflows, and issue tracking.',
        topics: ['Pull Request Reviews', 'GitHub Actions Automation', 'Release Tagging & SemVer', 'Public Open-Source Trajectory'],
      },
      {
        id: 'android', name: 'ANDROID', tag: 'MOBILE DEVELOPMENT', role: 'Applied Projects',
        description: 'Native mobile development in Java & Android SDK. Activity lifecycles, Material Design 3, Room/SQLite, and API consumption.',
        topics: ['Android Activity & Fragment Lifecycle', 'Material Design 3 Components', 'Room Database & Offline Storage', 'Shipped: BCA Gurukul'],
      },
      {
        id: 'react', name: 'REACT', tag: 'FRONTEND COMPONENT ARCHITECTURE', role: 'Production UI',
        description: 'Declarative component architecture, Hooks state management, routing, SSR, and production web application delivery.',
        topics: ['Component Composition & Hooks', 'TanStack Router & Query', 'State Machines & Performance', 'Shipped: XRounder (Live)'],
      },
    ],
  },
]

function TheStackSection() {
  const [expandedId, setExpandedId] = useState(null)
  const [sectionVisible, setSectionVisible] = useState(true)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Subtle one-time reveal
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

  const toggle = (id) => setExpandedId(prev => prev === id ? null : id)

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`ep-section ep-stack-section ${sectionVisible ? 'ep-is-visible' : ''}`}
      aria-label="03 — The Stack"
    >
      <div className="ep-grain" aria-hidden="true" />

      <div className="ep-stack-header">
        <div className="ep-chapter-eyebrow">
          <span className="ep-chapter-num">03</span>
          <span className="ep-chapter-rule" />
          <span className="ep-chapter-label">THE STACK</span>
        </div>
        <h2 className="ep-stack-mega-title">
          <span>THE</span>
          <br />
          <span className="ep-crimson">STACK.</span>
        </h2>
        <p className="ep-stack-lead">
          Core technologies, foundational languages, and architectural tools.
          <span className="ep-stack-lead-hint"></span>
        </p>
      </div>

      <div className="ep-stack-grouped" role="list">
        {skillGroups.map((group, gIdx) => (
          <div
            key={group.id}
            className="ep-skill-group ep-group-revealed"
          >
            {/* Group label header */}
            <div className="ep-group-label-row">
              <span className="ep-group-num">{group.groupNum}</span>
              <span className="ep-group-divider" />
              <span className="ep-group-label-text">{group.groupLabel}</span>
            </div>

            {/* Items in group */}
            <div className="ep-group-items">
              {group.items.map((item, iIdx) => {
                const isOpen = expandedId === item.id
                return (
                  <div
                    key={item.id}
                    className={`ep-stack-row ${isOpen ? 'ep-stack-row-open' : ''}`}
                    onClick={() => toggle(item.id)}
                    role="listitem"
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(item.id) }
                    }}
                    aria-expanded={isOpen}
                  >
                    <div className="ep-stack-row-head">
                      <div className="ep-stack-row-identity">
                        <span className="ep-stack-row-name">
                          {item.name}
                          {item.devanagari && (
                            <span className="ep-stack-devanagari-badge" title="Devanagari notation">{item.devanagari}</span>
                          )}
                        </span>
                        <span className="ep-stack-row-tag">{item.tag}</span>
                      </div>
                      <div className="ep-stack-row-right">
                        <span className="ep-stack-row-role">{item.role}</span>
                        <span className="ep-stack-toggle">{isOpen ? '−' : '+'}</span>
                      </div>
                      <span className="ep-stack-toggle ep-stack-toggle-mobile">{isOpen ? '−' : '+'}</span>
                    </div>

                    <div className="ep-stack-accent-line" />

                    {isOpen && (
                      <div className="ep-stack-drawer">
                        <p className="ep-stack-desc">{item.description}</p>
                        <div className="ep-stack-topics">
                          {item.topics.map((t, i) => (
                            <div key={i} className="ep-stack-topic">
                              <span className="ep-topic-dash">—</span>
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="ep-section-rule" aria-hidden="true">
        <span className="ep-rule-line" />
        <span className="ep-rule-text">10 TECHNOLOGIES · COUNTING </span>
        <span className="ep-rule-line" />
      </div>
    </section>
  )
}

export default React.memo(TheStackSection)
