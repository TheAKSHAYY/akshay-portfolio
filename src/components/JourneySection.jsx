import React, { useState } from 'react'
import { journeyProgression } from '../data/site'

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState(1) // Default to Java step

  const current = journeyProgression[activeStep]

  return (
    <section id="journey" className="journey-section" aria-label="SDE Progression Journey">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">02 // PROGRESSION ROADMAP</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">AUTHENTIC TRAJECTORY</span>
        </div>

        {/* Section Header */}
        <div className="journey-header">
          <h2 className="journey-title">FROM BCA STUDENT TO SDE</h2>
          <p className="journey-subtitle">
            A clear, deliberate progression without exaggeration. Grounded in continuous learning,
            deepening Java fundamentals, algorithmic problem solving, and building real-world products.
          </p>
        </div>

        {/* Interactive 6-Stage Timeline Track */}
        <div className="journey-track-wrapper" role="region" aria-label="Progression timeline">
          <div className="journey-track">
            {journeyProgression.map((item, idx) => {
              const isSelected = activeStep === idx
              const isPast = idx < activeStep

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`journey-node ${isSelected ? 'is-selected' : ''} ${isPast ? 'is-past' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  aria-label={`Step ${item.step}: ${item.title} (${item.status})`}
                >
                  <div className="node-marker-wrap">
                    <span className="node-circle">
                      {item.vibeAsset ? (
                        <img
                          src={item.vibeAsset}
                          alt={item.vibeAlt}
                          className="node-vibe-mini-icon"
                        />
                      ) : (
                        <span className="node-step-txt">{item.step}</span>
                      )}
                    </span>
                    {idx < journeyProgression.length - 1 && (
                      <span className="node-connecting-line" />
                    )}
                  </div>

                  <span className="node-step-idx">{item.step} // STAGE</span>
                  <strong className="node-name">{item.title}</strong>
                  <span className="node-status-chip">{item.status}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Milestone Inspection Card */}
        <div className="journey-detail-card">
          <div className="detail-card-header">
            <div className="detail-badge-group">
              <span className="detail-tag">{current.tag}</span>
              <span className="detail-step-badge">STAGE {current.step} OF 06</span>
            </div>
            <span className="detail-status-pill">{current.status}</span>
          </div>

          <div className="detail-content-layout">
            <div className="detail-text-col">
              <h3 className="detail-title">{current.title}</h3>
              <h4 className="detail-headline">{current.headline}</h4>
              <p className="detail-desc">{current.description}</p>
            </div>

            {current.vibeAsset && (
              <div className="detail-visual-col">
                <div className="detail-vibe-card">
                  <img
                    src={current.vibeAsset}
                    alt={current.vibeAlt}
                    className="detail-vibe-image"
                  />
                  <span className="vibe-caption">{current.vibeAlt}</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Flow Navigation */}
          <div className="detail-card-footer">
            <div className="footer-nav-buttons">
              <button
                type="button"
                className="step-nav-btn prev"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              >
                &larr; Previous Stage
              </button>
              <button
                type="button"
                className="step-nav-btn next"
                disabled={activeStep === journeyProgression.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(journeyProgression.length - 1, prev + 1))}
              >
                Next Stage &rarr;
              </button>
            </div>

            <div className="progression-indicator-text">
              <span>ACTIVE STAGE: {current.title.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
