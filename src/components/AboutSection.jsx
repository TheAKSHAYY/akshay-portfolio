import React, { useState } from 'react'
import { journeyProgression } from '../data/site'

export default function AboutSection() {
  const [activeStageIdx, setActiveStageIdx] = useState(1) // Default to Java

  const activeStage = journeyProgression[activeStageIdx]

  return (
    <section id="about" className="about-section" aria-label="About Akshay Sharma and SDE Progression">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">01 // IDENTITY &amp; PROGRESSION</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">BCA TO SDE</span>
        </div>

        {/* Large Editorial Number & Heading (Req 11) */}
        <div className="editorial-section-header">
          <div className="editorial-number-glyph">01</div>
          <div className="editorial-title-wrap">
            <span className="editorial-sub-tag">// IDENTITY &amp; PROGRESSION</span>
            <h2 className="editorial-hero-heading">
              NOT JUST<br />
              <span className="heading-crimson">CODE.</span>
            </h2>
            <p className="editorial-lead-statement">
              &ldquo;I'm Akshay Sharma — a BCA student and aspiring software engineer focused on Java, backend development, DSA and building real products.&rdquo;
            </p>
          </div>
        </div>

        {/* Narrative & Builder Mindset Header */}
        <div className="about-header-grid">
          <div className="about-bio-block">
            <p className="about-sub-para">
              I got into programming because I wanted to understand how software actually works, not just how to use it.
              Right now, that means going deep into <strong>Java</strong>, grinding through <strong>DSA problems</strong> on LeetCode &amp; HackerRank, and figuring out <strong>backend engineering</strong> one layer at a time.
            </p>

            <p className="about-sub-para">
              I learn best when I have something to build — a platform, an app, a tool — so alongside the theory, there's always a project open on my screen.
              The goal is clear: become a capable, thoughtful <strong>software developer / SDE</strong> who writes reliable code and builds things people actually use.
            </p>

            {/* Core Tech Chips */}
            <div className="about-chip-row">
              <span className="about-tech-chip">Java</span>
              <span className="about-tech-chip">DSA</span>
              <span className="about-tech-chip">Backend Dev</span>
              <span className="about-tech-chip">SQL</span>
              <span className="about-tech-chip">Git / GitHub</span>
            </div>
          </div>

          {/* Right Column: Focus Panel ("Right now I'm...") & Long-Term Goal */}
          <div className="about-side-panel-col">
            <div className="about-focus-panel">
              <div className="focus-panel-title">
                <span className="focus-indicator-pulse" />
                <span>RIGHT NOW I'M...</span>
              </div>
              <ul className="focus-item-list">
                <li className="focus-item">
                  <span className="focus-check">✓</span>
                  <span>Deepening Java fundamentals</span>
                </li>
                <li className="focus-item">
                  <span className="focus-check">✓</span>
                  <span>Practicing DSA on LeetCode <span className="vintage-script-annotation" style={{ marginLeft: '4px', fontSize: '0.82rem' }}>[Leetकोड]</span> &amp; HackerRank</span>
                </li>
                <li className="focus-item">
                  <span className="focus-check">✓</span>
                  <span>Learning SQL &amp; backend basics</span>
                </li>
                <li className="focus-item">
                  <span className="focus-check">✓</span>
                  <span>Shipping XRounder &amp; BCA Gurukul</span>
                </li>
              </ul>
            </div>

            <div className="about-goal-highlight-card">
              <div className="goal-card-top">
                <span className="goal-indicator-dot" />
                <span className="goal-tag">LONG-TERM GOAL</span>
              </div>
              <p className="goal-quote">
                &ldquo;To become a capable, thoughtful software developer / SDE who writes reliable code and builds things people actually use.&rdquo;
              </p>
              <div className="goal-meta-row">
                <span>DESTINATION: SOFTWARE DEVELOPER / SDE</span>
                <span>FOCUS: JAVA &amp; BACKEND</span>
              </div>
            </div>
          </div>
        </div>

        {/* SDE PROGRESSION ROADMAP */}
        <div className="progression-roadmap-wrapper">
          <div className="roadmap-header-line">
            <span className="roadmap-title-tag">THE PATH SO FAR // JOURNEY ROADMAP:</span>
            <span className="roadmap-hint">Not a highlight reel — a rough log of where I've been and where this is headed</span>
          </div>

          {/* 6-Stage Timeline Track */}
          <div className="roadmap-timeline-grid">
            {journeyProgression.map((stage, idx) => {
              const isSelected = activeStageIdx === idx
              const isPast = idx < activeStageIdx

              return (
                <button
                  key={stage.id}
                  type="button"
                  className={`roadmap-step-card ${isSelected ? 'is-selected' : ''} ${isPast ? 'is-past' : ''}`}
                  onClick={() => setActiveStageIdx(idx)}
                >
                  <div className="step-card-top">
                    <span className="step-num">{stage.step}</span>
                    <span className="step-status-chip">{stage.status}</span>
                  </div>

                  <div className="step-icon-row">
                    {stage.vibeAsset ? (
                      <img
                        src={stage.vibeAsset}
                        alt={stage.vibeAlt}
                        className="step-vibe-mini-img"
                      />
                    ) : (
                      <span className="step-target-glyph">&#9733;</span>
                    )}
                    <strong className="step-name">{stage.title}</strong>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Milestone Detail Card */}
          <div className="roadmap-detail-spotlight">
            <div className="detail-spotlight-left">
              <div className="spotlight-stage-badge">
                <span>STAGE {activeStage.step} // {activeStage.tag.toUpperCase()}</span>
                <span className="spotlight-status">{activeStage.status}</span>
              </div>

              <h3 className="spotlight-stage-title">{activeStage.title}</h3>
              <h4 className="spotlight-headline">{activeStage.headline}</h4>
              <p className="spotlight-desc">{activeStage.description}</p>
            </div>

            {activeStage.vibeAsset && (
              <div className="detail-spotlight-right">
                <div className="vibe-stage-badge-box">
                  <img
                    src={activeStage.vibeAsset}
                    alt={activeStage.vibeAlt}
                    className="vibe-stage-img"
                  />
                  <span className="vibe-stage-caption">{activeStage.vibeAlt}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
