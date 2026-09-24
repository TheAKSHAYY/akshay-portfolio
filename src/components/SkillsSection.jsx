import React, { useState } from 'react'

export default function SkillsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  const stackItems = [
    {
      id: 'java',
      number: '01',
      name: 'JAVA',
      tag: 'PRIMARY LANGUAGE & CORE RUNTIME',
      role: 'Core Focus',
      description: 'Vehicle for deep backend engineering: Object-Oriented Architecture, JVM internals, Collections framework, Exception models, and high-reliability server code.',
      topics: ['OOP (Polymorphism, Abstraction, Encapsulation)', 'Collections (HashMap, ArrayList, HashSet)', 'JVM Memory & Garbage Collection', 'JDBC & Backend Persistence'],
    },
    {
      id: 'spring-boot',
      number: '02',
      name: 'SPRING BOOT',
      tag: 'ENTERPRISE BACKEND ARCHITECTURE',
      role: 'Active Learning',
      description: 'Building modern microservices and RESTful backends: Dependency Injection, Spring MVC, Spring Data JPA, and application configuration.',
      topics: ['Inversion of Control (IoC) & DI', 'RESTful API Design & Controllers', 'Spring Data JPA & ORM', 'Security & Filter Chains'],
    },
    {
      id: 'sql',
      number: '03',
      name: 'SQL',
      tag: 'RELATIONAL DATABASES & PERSISTENCE',
      role: 'Data Engineering',
      description: 'Relational data modeling, schema normalization, ACID transaction semantics, complex joins, indexing, and query optimization.',
      topics: ['PostgreSQL & MySQL', 'Complex JOINs & Subqueries', 'Schema Normalization (3NF)', 'Indexing & Performance Tuning'],
    },
    {
      id: 'dsa',
      number: '04',
      name: 'DSA',
      tag: 'DATA STRUCTURES & ALGORITHMS',
      role: 'Daily Practice',
      description: 'Rigorous algorithmic problem solving on LeetCode & HackerRank: Time & Space Complexity analysis, pointers, recursion, and core data structures.',
      topics: ['Arrays, Strings & Two Pointers', 'Sliding Window & Hashing', 'Linked Lists, Stacks & Queues', 'Time Complexity (Big-O Analysis)'],
    },
    {
      id: 'git',
      number: '05',
      name: 'GIT',
      tag: 'DISTRIBUTED VERSION CONTROL',
      role: 'Daily Workflow',
      description: 'Version tracking, commit discipline, branch management, merge conflict resolution, interactive rebase, and working directory control.',
      topics: ['Branching & Merging Strategies', 'Atomic Commit History', 'Rebase & Reset Workflows', 'Diff & Log Inspection'],
    },
    {
      id: 'github',
      number: '06',
      name: 'GITHUB',
      tag: 'COLLABORATION & OPEN SOURCE',
      role: 'Ecosystem',
      description: 'Open-source portfolio curation, Pull Requests, Code Reviews, GitHub Actions CI/CD workflows, and issue tracking.',
      topics: ['Pull Request Reviews', 'GitHub Actions Automation', 'Release Tagging & SemVer', 'Public Open-Source Trajectory'],
    },
    {
      id: 'android',
      number: '07',
      name: 'ANDROID',
      tag: 'MOBILE APPLICATION DEVELOPMENT',
      role: 'Applied Projects',
      description: 'Native mobile app development using Java & Android SDK: Activity lifecycles, Material Design 3, SQLite/Room, and API consumption.',
      topics: ['Android Activity & Fragment Lifecycle', 'Material Design 3 Components', 'Room Database & Offline Storage', 'Shipped with BCA Gurukul'],
    },
    {
      id: 'javascript',
      number: '08',
      name: 'JAVASCRIPT',
      tag: 'MODERN WEB LOGIC & RUNTIME',
      role: 'Web Language',
      description: 'Modern ES6+ syntax, asynchronous programming (Promises, async/await), DOM manipulation, and browser APIs.',
      topics: ['ES6+ Syntactic Patterns', 'Async/Await & Event Loop', 'Fetch API & Client Architecture', 'TypeScript Compilation Support'],
    },
    {
      id: 'react',
      number: '09',
      name: 'REACT',
      tag: 'FRONTEND COMPONENT ARCHITECTURE',
      role: 'Production UI',
      description: 'Declarative component architecture, Hooks state management, routing, SSR, and production web application delivery.',
      topics: ['Component Composition & Hooks', 'TanStack Router & Query', 'State Machines & Performance', 'Shipped with XRounder (Live)'],
    },
    {
      id: 'supabase',
      number: '10',
      name: 'SUPABASE',
      tag: 'BACKEND INFRASTRUCTURE & AUTH',
      role: 'Cloud Backend',
      description: 'Postgres backend as a service, Row-Level Security (RLS) policies, authentication flows, storage buckets, and real-time database listeners.',
      topics: ['PostgreSQL Database Engine', 'Row-Level Security (RLS)', 'JWT Authentication & Role Claims', 'Storage Buckets & Webhooks'],
    },
  ]

  return (
    <section id="skills" className="editorial-stack-section" aria-label="The Stack — Core Technologies">
      <div className="section-container">
        {/* Section Header (Req 13) */}
        <div className="editorial-section-header">
          <div className="editorial-number-glyph">03</div>
          <div className="editorial-title-wrap">
            <span className="editorial-sub-tag">// SYSTEM CAPABILITIES</span>
            <h2 className="editorial-hero-heading">
              THE<br />
              <span className="heading-crimson">STACK.</span>
            </h2>
            <p className="editorial-lead-statement">
              Core technologies, foundational languages, and architectural tools that power my engineering workflow.
            </p>
          </div>
        </div>

        {/* Oversized Typographic Rows (Req 13) */}
        <div className="editorial-stack-list" role="list">
          {stackItems.map((item, index) => {
            const isExpanded = expandedId === item.id
            const isHovered = hoveredIdx === index

            return (
              <div
                key={item.id}
                className={`editorial-stack-row ${isExpanded ? 'is-expanded' : ''} ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setExpandedId(isExpanded ? null : item.id)
                  }
                }}
              >
                <div className="stack-row-header">
                  <span className="stack-row-num">{item.number}</span>
                  <div className="stack-row-name-wrap">
                    <h3 className="stack-row-name">
                      {item.name}
                      {item.id === 'dsa' && (
                        <span className="vintage-script-badge" title="DSए Algorithmic Practice">DSए</span>
                      )}
                    </h3>
                    <span className="stack-row-tag">{item.tag}</span>
                  </div>
                  <div className="stack-row-meta">
                    <span className="stack-row-role">{item.role}</span>
                    <span className="stack-row-toggle-icon">{isExpanded ? '−' : '+'}</span>
                  </div>
                </div>

                <div className="stack-row-accent-line" />

                {isExpanded && (
                  <div className="stack-row-drawer">
                    <p className="stack-row-desc">{item.description}</p>
                    <div className="stack-row-topics-grid">
                      {item.topics.map((t, i) => (
                        <div key={i} className="stack-topic-chip">
                          <span className="topic-dash">—</span>
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
    </section>
  )
}
