import React, { useState } from 'react'
import { GitLogo, GitHubLogo } from './TechLogos'

export default function GitSection() {
  const [selectedCommit, setSelectedCommit] = useState(0)

  const workflowSteps = [
    { label: 'CODE', note: 'Writing tested, modular changes locally' },
    { label: 'COMMIT', note: 'Creating atomic, meaningful git commits' },
    { label: 'BRANCH', note: 'Isolating features and algorithmic models' },
    { label: 'PUSH', note: 'Synchronizing with remote origin' },
    { label: 'GITHUB', note: 'Code review, CI verification, collaboration' },
  ]

  const commits = [
    {
      hash: 'a84f12d',
      branch: 'main',
      message: 'feat(java): implement generic bounded priority queue with thread safety',
      author: 'Akshay Sharma',
      time: 'Recent commit',
      files: 'src/main/java/structures/BoundedPriorityQueue.java (+72, -0)',
      diff: `+ public class BoundedPriorityQueue<T> {
+     private final PriorityQueue<T> heap;
+     private final int capacity;
+     private final Lock lock = new ReentrantLock();
+     ...
+ }`,
    },
    {
      hash: 'c39e801',
      branch: 'feat/backend-services',
      message: 'refactor(sql): add composite index on order status and user_id',
      author: 'Akshay Sharma',
      time: 'Recent commit',
      files: 'src/main/resources/db/migration/V2__add_order_indexes.sql (+12, -2)',
      diff: `+ -- Composite index to eliminate table scan on order summaries
+ CREATE INDEX CONCURRENTLY idx_orders_user_status 
+ ON orders (user_id, status);`,
    },
    {
      hash: '7b2a95c',
      branch: 'feature/dsa-patterns',
      message: 'feat(dsa): implement Floyd cycle detection with test suite',
      author: 'Akshay Sharma',
      time: 'Recent commit',
      files: 'dsa/patterns/LinkedListCycle.java (+45, -0)',
      diff: `+ public boolean hasCycle(ListNode head) {
+     ListNode slow = head, fast = head;
+     while (fast != null && fast.next != null) {
+         slow = slow.next;
+         fast = fast.next.next;
+         if (slow == fast) return true;
+     }
+     return false;
+ }`,
    },
    {
      hash: '9f1d04b',
      branch: 'main',
      message: 'chore(ci): add automated test pipeline and commitlint hooks',
      author: 'Akshay Sharma',
      time: 'Recent commit',
      files: '.github/workflows/verify.yml (+34, -0)',
      diff: `+ name: SDE Verification Pipeline
+ on: [push, pull_request]
+ jobs:
+   test:
+     runs-on: ubuntu-latest
+     steps:
+       - uses: actions/checkout@v4`,
    },
  ]

  const activeCommit = commits[selectedCommit]

  return (
    <section id="git" className="git-section" aria-label="Git and GitHub Section">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">05 // VERSION CONTROL</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">DAILY DISCIPLINE</span>
        </div>

        {/* Section Header */}
        <div className="git-header-card">
          <div className="git-brand-pair">
            <span className="brand-icon-box git-box">
              <GitLogo size={26} color="#f05032" />
            </span>
            <span className="brand-join">+</span>
            <span className="brand-icon-box github-box">
              <GitHubLogo size={26} color="#ffffff" />
            </span>
          </div>

          <div className="git-header-info">
            <h2 className="git-title">GIT WORKFLOW & REVISION GRAPH</h2>
            <p className="git-subtitle">
              Version control is how software engineering teams collaborate without chaos.
              Disciplined atomic commits, meaningful commit messages, and clean branching topologies.
            </p>
          </div>
        </div>

        {/* The 5-stage Git workflow */}
        <div className="workflow-steps-bar">
          <div className="workflow-label">
            <span>ENGINEERING WORKFLOW:</span>
            <span>FROM LOCAL DISK TO OPEN SOURCE</span>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map((step, idx) => (
              <div key={step.label} className="workflow-item">
                <span className="step-tag">0{idx + 1}</span>
                <strong className="step-label">{step.label}</strong>
                <p className="step-note">{step.note}</p>
                {idx < workflowSteps.length - 1 && (
                  <span className="workflow-arrow">➔</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Commit Branch Graph */}
        <div className="git-graph-workbench">
          <div className="graph-sidebar">
            <div className="sidebar-header">
              <span>COMMITS & BRANCH TOPOLOGY</span>
              <span className="git-branch-pill">branch: {activeCommit.branch}</span>
            </div>

            <div className="commit-nodes-list" role="list">
              {commits.map((commit, idx) => {
                const isSelected = selectedCommit === idx
                return (
                  <button
                    key={commit.hash}
                    type="button"
                    className={`commit-node-item ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setSelectedCommit(idx)}
                    role="listitem"
                  >
                    <div className="commit-graph-indicator">
                      <span className="graph-point" />
                      <span className="graph-line" />
                    </div>
                    <div className="commit-node-details">
                      <div className="commit-node-top">
                        <span className="commit-hash">#{commit.hash}</span>
                        <span className="commit-time">{commit.time}</span>
                      </div>
                      <p className="commit-msg">{commit.message}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Commit Inspector Panel */}
          <div className="commit-inspector">
            <div className="inspector-head-row">
              <div>
                <span className="inspector-meta-branch">{activeCommit.branch}</span>
                <h4 className="inspector-commit-msg">{activeCommit.message}</h4>
              </div>
              <a
                href="https://github.com/TheAKSHAYY"
                target="_blank"
                rel="noopener noreferrer"
                className="github-inspect-btn"
              >
                <GitHubLogo size={16} />
                <span>VIEW ON GITHUB ↗</span>
              </a>
            </div>

            <div className="commit-meta-bar">
              <span>
                AUTHOR: <strong>{activeCommit.author}</strong>
              </span>
              <span>
                SHA: <code>{activeCommit.hash}</code>
              </span>
              <span>
                FILES: <code>{activeCommit.files}</code>
              </span>
            </div>

            <div className="commit-diff-box">
              <span className="diff-header-label">GIT UNIFIED DIFF:</span>
              <pre className="diff-pre">
                <code>{activeCommit.diff}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="github-direct-banner">
          <div className="banner-left">
            <GitHubLogo size={32} />
            <div>
              <strong className="banner-title">github.com/TheAKSHAYY</strong>
              <p className="banner-sub">
                Explore real commits, code repositories, and algorithmic practice.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/TheAKSHAYY"
            target="_blank"
            rel="noopener noreferrer"
            className="banner-cta"
          >
            <span>OPEN GITHUB PROFILE</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
