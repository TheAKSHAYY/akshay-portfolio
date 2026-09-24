import React, { useEffect, useRef, useState } from 'react'

function StillBuildingSection() {
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
      { threshold: 0.1 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`ep-section ep-still-section ${visible ? 'ep-visible' : ''}`}
      aria-label="05 — Still Building"
    >
      <div className="ep-grain" aria-hidden="true" />
      <div className="ep-reg-mark ep-reg-tl" aria-hidden="true">◎</div>
      <div className="ep-reg-mark ep-reg-br" aria-hidden="true">◎</div>

      <div className="ep-still-inner">
        <div className="ep-chapter-eyebrow ep-still-eyebrow">
          <span className="ep-chapter-num">05</span>
          <span className="ep-chapter-rule" />
          <span className="ep-chapter-label">STILL BUILDING</span>
        </div>

        <h2 className="ep-still-headline">
          <span className="ep-still-line-1">THE</span>
          <br />
          <span className="ep-still-line-2">WORK</span>
          <br />
          <span className="ep-still-line-3 ep-crimson">CONTINUES.</span>
        </h2>

        <div className="ep-still-body">
          <p className="ep-still-para">
            This isn't a finished portfolio. It's a living document — updated as new things are built, new systems are understood, and new problems are solved.
          </p>
          <p className="ep-still-para">
            The next chapter is Spring Boot, advanced DSA patterns, and system design fundamentals. The build never stops.
          </p>
        </div>

        <div className="ep-still-currently-grid">
          <div className="ep-currently-item">
            <span className="ep-currently-label">CURRENTLY LEARNING</span>
            <span className="ep-currently-val">Spring Boot</span>
          </div>
          <div className="ep-currently-item">
            <span className="ep-currently-label">CURRENTLY PRACTICING</span>
            <span className="ep-currently-val">Advanced DSA</span>
          </div>
          <div className="ep-currently-item">
            <span className="ep-currently-label">CURRENTLY SHIPPING</span>
            <span className="ep-currently-val">BCA Gurukul App</span>
          </div>
          <div className="ep-currently-item">
            <span className="ep-currently-label">CURRENTLY EXPLORING</span>
            <span className="ep-currently-val">System Design</span>
          </div>
        </div>

        <div className="ep-still-devanagari" title="Still learning, still building">
          
        </div>
      </div>
    </section>
  )
}

export default React.memo(StillBuildingSection)
