import React, { useState } from 'react'

export default function VibeCodingSection() {
  const [stage, setStage] = useState('review') // 'raw', 'review', 'fixed'

  const pipelineSteps = [
    { name: 'IDEA', desc: 'Identify system need' },
    { name: 'PROMPT', desc: 'Precise context & constraints' },
    { name: 'AI', desc: 'Rapid initial synthesis' },
    { name: 'CODE', desc: 'Inspect generated syntax' },
    { name: 'REVIEW', desc: 'Human engineering audit' },
    { name: 'DEBUG', desc: 'Isolate concurrency & edge bugs' },
    { name: 'UNDERSTAND', desc: 'Verify invariants from first principles' },
    { name: 'SHIP', desc: 'Deploy robust, tested software' },
  ]

  const rawAiCode = `// AI Generated Draft: In-Memory Request Rate Limiter
public class RateLimiter {
    // ⚠️ FLAW: Standard HashMap is NOT thread-safe!
    // Race conditions cause silent data corruption or infinite loops
    private Map<String, Integer> requestCounts = new HashMap<>();

    public boolean allowRequest(String userId) {
        int count = requestCounts.getOrDefault(userId, 0);
        if (count >= 100) return false;
        
        requestCounts.put(userId, count + 1); // Non-atomic check-then-act!
        return true;
    }
}`

  const fixedCode = `// Akshay's Refactor: Thread-Safe Atomic Rate Limiter
public class RateLimiter {
    // ✓ FIXED: ConcurrentHashMap guarantees thread-safe memory visibility
    private final ConcurrentMap<String, AtomicInteger> requestCounts = 
            new ConcurrentHashMap<>();
    private static final int MAX_REQUESTS = 100;

    public boolean allowRequest(String userId) {
        // ✓ ATOMIC: computeIfAbsent ensures single instance initialization
        AtomicInteger counter = requestCounts.computeIfAbsent(
            userId, k -> new AtomicInteger(0)
        );
        
        // ✓ ATOMIC: incrementAndGet avoids race condition entirely
        int current = counter.incrementAndGet();
        return current <= MAX_REQUESTS;
    }
}`

  return (
    <section id="vibe-coding" className="vibe-coding-section" aria-label="Built with Vibe Coding">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">07 // ENGINEERING METHODOLOGY</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">HUMAN-IN-THE-LOOP</span>
        </div>

        {/* Section Header */}
        <div className="vibe-header-card">
          <div className="vibe-badge-pill">
            <span className="vibe-pulse" />
            <span>AI ACCELERATION + ENGINEERING JUDGMENT</span>
          </div>
          <h2 className="vibe-title">BUILT WITH VIBE CODING</h2>
          <p className="vibe-subtitle">
            AI helps me build faster. Engineering judgment still matters.
            Vibe coding is not blindly accepting AI output—it is AI speed combined with
            human critical thinking, code auditing, and architectural discipline.
          </p>
        </div>

        {/* The 8-Step Pipeline */}
        <div className="vibe-pipeline-bar">
          <div className="pipeline-legend">
            <span>THE 8-STEP DISCIPLINED LOOP:</span>
            <span>FROM INCEPTION TO PRODUCTION</span>
          </div>

          <div className="pipeline-steps-grid">
            {pipelineSteps.map((step, idx) => (
              <div key={step.name} className="vibe-step-cell">
                <span className="step-index">0{idx + 1}</span>
                <strong className="step-name">{step.name}</strong>
                <span className="step-desc">{step.desc}</span>
                {idx < pipelineSteps.length - 1 && (
                  <span className="step-arrow">➔</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Code Review Simulator */}
        <div className="vibe-simulator-box">
          <div className="simulator-header">
            <div className="sim-title-group">
              <span className="sim-tag">INTERACTIVE CASE STUDY</span>
              <h3 className="sim-title">Concurrency Audit: AI Draft vs Human Fix</h3>
            </div>

            <div className="sim-actions-toggle">
              <button
                type="button"
                className={`toggle-btn ${stage === 'raw' ? 'is-active' : ''}`}
                onClick={() => setStage('raw')}
              >
                1. AI GENERATION
              </button>
              <button
                type="button"
                className={`toggle-btn ${stage === 'review' ? 'is-active' : ''}`}
                onClick={() => setStage('review')}
              >
                2. AKSHAY AUDIT
              </button>
              <button
                type="button"
                className={`toggle-btn ${stage === 'fixed' ? 'is-active' : ''}`}
                onClick={() => setStage('fixed')}
              >
                3. REFACTORED FIX
              </button>
            </div>
          </div>

          {/* Alert Callout Based on Stage */}
          {stage === 'raw' && (
            <div className="sim-alert warn">
              <span className="alert-icon">⚠️</span>
              <div>
                <strong>UNCHECKED SYNTHESIS:</strong>
                <p>AI generated working syntax, but overlooked concurrent thread execution safety.</p>
              </div>
            </div>
          )}

          {stage === 'review' && (
            <div className="sim-alert danger">
              <span className="alert-icon">🔍</span>
              <div>
                <strong>ENGINEERING AUDIT IDENTIFIED DEFECT:</strong>
                <p>
                  <code>HashMap</code> is not thread-safe. Concurrent threads executing <code>put()</code>{' '}
                  cause race conditions and lost updates under real backend loads.
                </p>
                <button
                  type="button"
                  className="apply-fix-inline-btn"
                  onClick={() => setStage('fixed')}
                >
                  ⚡ APPLY AKSHAY'S REFACTOR
                </button>
              </div>
            </div>
          )}

          {stage === 'fixed' && (
            <div className="sim-alert success">
              <span className="alert-icon">✓</span>
              <div>
                <strong>PASSED ENGINEERING AUDIT:</strong>
                <p>
                  Refactored to <code>ConcurrentHashMap</code> and <code>AtomicInteger</code>. Thread-safe,
                  lock-free, verified under stress tests. Ready to ship.
                </p>
              </div>
            </div>
          )}

          {/* Code Viewer Panel */}
          <div className="simulator-code-display">
            <div className="code-meta-top">
              <span className="filename-tag">
                {stage === 'fixed' ? 'RateLimiter_Fixed.java' : 'RateLimiter_RawAIDraft.java'}
              </span>
              <span className={`status-badge ${stage === 'fixed' ? 'ok' : 'fail'}`}>
                {stage === 'fixed' ? 'TESTS PASSING (100%)' : 'AUDIT FAILED (RACE HAZARD)'}
              </span>
            </div>

            <pre className="sim-pre">
              <code>{stage === 'fixed' ? fixedCode : rawAiCode}</code>
            </pre>
          </div>

          {/* Philosophy Footer Card */}
          <div className="philosophy-summary-card">
            <div className="philo-quote">
              "Vibe coding without engineering fundamentals is technical debt. Vibe coding with
              rigorous fundamentals is a superpower."
            </div>
            <div className="philo-author">— Akshay Sharma</div>
          </div>
        </div>
      </div>
    </section>
  )
}
