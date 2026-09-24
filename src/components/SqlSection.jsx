import React, { useState } from 'react'
import { DatabaseLogo } from './TechLogos'

export default function SqlSection() {
  const [activeQuery, setActiveQuery] = useState('join')

  const queries = {
    join: {
      id: 'join',
      title: 'Relational JOIN Query',
      desc: 'Retrieving student quiz attempts by joining the students and quiz_results tables.',
      sql: `SELECT 
    s.student_id,
    s.full_name,
    q.subject_name,
    q.score,
    q.total_questions,
    (q.score * 100.0 / q.total_questions) AS percentage
FROM students s
INNER JOIN quiz_results q 
    ON s.student_id = q.student_id
WHERE q.subject_name = 'Java Programming'
ORDER BY q.score DESC;`,
      headers: ['student_id', 'full_name', 'subject_name', 'score', 'percentage'],
      rows: [
        ['BCA-2026-01', 'Akshay Sharma', 'Java Programming', '18/20', '90.0%'],
        ['BCA-2026-04', 'Rahul Verma', 'Java Programming', '16/20', '80.0%'],
        ['BCA-2026-09', 'Priya Singh', 'Java Programming', '15/20', '75.0%'],
      ],
    },
    aggregate: {
      id: 'aggregate',
      title: 'Aggregate & GROUP BY',
      desc: 'Calculating average scores and total tests completed per academic subject.',
      sql: `SELECT 
    subject_name,
    COUNT(result_id) AS total_quizzes_taken,
    ROUND(AVG(score), 2) AS average_score,
    MAX(score) AS highest_score
FROM quiz_results
GROUP BY subject_name
HAVING COUNT(result_id) > 0;`,
      headers: ['subject_name', 'total_quizzes_taken', 'average_score', 'highest_score'],
      rows: [
        ['Java Programming', '48', '16.4', '20'],
        ['Data Structures', '35', '14.8', '19'],
        ['Relational Database (SQL)', '42', '17.1', '20'],
      ],
    },
    schema: {
      id: 'schema',
      title: 'Schema & Foreign Key Constraints',
      desc: 'Enforcing referential integrity and indexes across primary domain tables.',
      sql: `CREATE TABLE students (
    student_id VARCHAR(20) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    semester INT CHECK (semester BETWEEN 1 AND 6),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quiz_results (
    result_id BIGSERIAL PRIMARY KEY,
    student_id VARCHAR(20) REFERENCES students(student_id) ON DELETE CASCADE,
    subject_name VARCHAR(80) NOT NULL,
    score INT NOT NULL,
    total_questions INT NOT NULL
);`,
      headers: ['table_name', 'constraint_type', 'column_name', 'foreign_reference'],
      rows: [
        ['students', 'PRIMARY KEY', 'student_id', '—'],
        ['quiz_results', 'PRIMARY KEY', 'result_id', '—'],
        ['quiz_results', 'FOREIGN KEY', 'student_id', 'students(student_id)'],
      ],
    },
  }

  const current = queries[activeQuery]

  return (
    <section id="sql" className="sql-section" aria-label="SQL and Database Section">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">05 // DATA PERSISTENCE</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">RELATIONAL DATA</span>
        </div>

        {/* Section Header */}
        <div className="sql-header-block">
          <div className="sql-title-row">
            <div>
              <div className="sql-badge-line">
                <DatabaseLogo size={18} color="#38bdf8" />
                <span>RELATIONAL DATABASES &amp; PERSISTENCE</span>
              </div>
              <h2 className="sql-section-title">
                SQL &amp; <span className="text-sql-accent">DATA MODELING.</span>
              </h2>
            </div>

            {/* Subtle Vibe Accent: SQL Syringe Sticker */}
            <div className="sql-vibe-badge" title="SQL Database & Injection Prevention Concept">
              <img
                src="/assets/vibe/vibe_0_sql.png"
                alt="SQL Syringe sticker"
                className="sql-syringe-img"
              />
              <div className="vibe-text">
                <span className="vibe-tag">SQL</span>
                <span className="vibe-sub">Relational Persistence</span>
              </div>
            </div>
          </div>

          <p className="sql-section-subtitle">
            Applications exist to process and persist data reliably. Focused on relational schema design,
            table normalization, foreign key constraints, and writing clean, performant SQL queries.
          </p>
        </div>

        {/* Query Mode Selector Tabs */}
        <div className="sql-tabs-row" role="tablist">
          {Object.keys(queries).map((k) => {
            const item = queries[k]
            const isActive = activeQuery === k
            return (
              <button
                key={k}
                role="tab"
                aria-selected={isActive}
                className={`sql-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveQuery(k)}
              >
                <span className="sql-tab-dot" />
                <span>{item.title}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Query & Schema Terminal */}
        <div className="sql-terminal-box">
          <div className="sql-terminal-header">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="terminal-db-tag">PostgreSQL / SQL Console &middot; akshay_db</span>
            <span className="terminal-query-type">{current.title}</span>
          </div>

          <div className="sql-terminal-grid">
            {/* SQL Code Editor */}
            <div className="sql-query-col">
              <div className="sql-pane-title">SQL EXECUTION QUERY:</div>
              <pre className="sql-code-pre">
                <code>{current.sql}</code>
              </pre>
              <p className="sql-query-desc">&ldquo;{current.desc}&rdquo;</p>
            </div>

            {/* Result Table Preview */}
            <div className="sql-results-col">
              <div className="sql-pane-title">QUERY RESULT SET [SIMULATED]:</div>
              <div className="sql-table-wrapper">
                <table className="sql-result-table">
                  <thead>
                    <tr>
                      {current.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {current.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="sql-result-meta">
                <span>STATUS: 200 OK</span>
                <span>ROWS RETURNED: {current.rows.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
