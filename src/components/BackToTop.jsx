import React from 'react'

function BackToTop({ visible = false }) {
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
