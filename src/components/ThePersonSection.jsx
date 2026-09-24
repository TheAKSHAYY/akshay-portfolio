import React, { useEffect, useRef, useState } from 'react'

function ThePersonSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`ep-section ep-person-section ${visible ? 'ep-is-visible ep-visible' : ''}`}
      aria-label="01 — The Person"
    >
      <div className="ep-grain" aria-hidden="true" />
      <div className="ep-reg-mark ep-reg-tl" aria-hidden="true">◎</div>
      <div className="ep-reg-mark ep-reg-tr" aria-hidden="true">◎</div>

      <div className="ep-person-inner">

        <div className="ep-person-left">
          <div className="ep-chapter-eyebrow">
            <span className="ep-chapter-num">01</span>
            <span className="ep-chapter-rule" />
            <span className="ep-chapter-label">THE PERSON</span>
          </div>

          <h2 className="ep-person-headline">
            <span className="ep-headline-not">NOT</span>
            <br />
            <span className="ep-headline-just">JUST</span>
            <br />
            <span className="ep-headline-code">CODE.</span>
          </h2>

          <div className="ep-archival-strip">
            <span className="ep-strip-item">AKSHAY SHARMA</span>
            <span className="ep-strip-sep">·</span>
            <span className="ep-strip-item">BCA STUDENT</span>
            <span className="ep-strip-sep">·</span>
            <span className="ep-strip-item">INDIA</span>
            <span className="ep-strip-sep">·</span>
            <span className="ep-strip-item ep-strip-devanagari" title="Code se Kahani"></span>
          </div>
        </div>

        <div className="ep-person-right">
          <p className="ep-person-pull-quote">
            "I got into programming because I wanted to understand how software actually works — not just how to use it."
          </p>

          <div className="ep-person-bio-cols">
            <p className="ep-person-body">
              Right now that means going deep into <strong>Java</strong>, grinding through <strong>DSA</strong> on LeetCode &amp; HackerRank, and figuring out <strong>backend engineering</strong> one layer at a time. I learn best when I have something to build.
            </p>
            <p className="ep-person-body">
              The goal is clear: become a capable, thoughtful <strong>software developer / SDE</strong> who writes reliable code and builds things people actually use. Always a project open on the screen.
            </p>
            <p className="ep-person-hinglish" title="Not just code. I turn ideas into reality.">
              BCA II Year <br />

                    </p>
          </div>

          <div className="ep-focus-block">
            <span className="ep-focus-label">// CURRENTLY FOCUSED ON</span>
            <ul className="ep-focus-list">
              <li><span className="ep-focus-bullet">—</span> Deepening Java fundamentals &amp; OOP</li>
              <li><span className="ep-focus-bullet">—</span> Daily DSA practice on LeetCode &amp; HackerRank</li>
              <li><span className="ep-focus-bullet">—</span> Learning SQL &amp; backend systems</li>
              <li><span className="ep-focus-bullet">—</span> Shipping XRounder &amp; BCA Gurukul</li>
            </ul>
          </div>

          <div className="ep-destination-card">
            <span className="ep-dest-label">DESTINATION</span>
            <span className="ep-dest-title">SOFTWARE DEVELOPER / SDE</span>
            <span className="ep-dest-sub">Java · Backend · Systems Architecture</span>
          </div>
        </div>
      </div>

      <div className="ep-section-rule" aria-hidden="true">
        <span className="ep-rule-line" />
        <span className="ep-rule-text">BCA TO SDE · STILL LOADING ·</span>
        <span className="ep-rule-line" />
      </div>
    </section>
  )
}

export default React.memo(ThePersonSection)
