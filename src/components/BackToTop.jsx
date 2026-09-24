import React, { useState, useEffect, useRef } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show after scrolling past hero (approx 450px)
          const shouldShow = window.scrollY > 450
          if (shouldShow !== visibleRef.current) {
            visibleRef.current = shouldShow
            setVisible(shouldShow)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`back-to-top-btn ${visible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      data-cursor="TOP ↑"
    >
      <span className="btt-label">BACK TO TOP</span>
      <span className="btt-arrow" aria-hidden="true">↑</span>
    </button>
  )
}

export default React.memo(BackToTop)
