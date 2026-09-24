import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Detect touch device or reduced motion
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouch(true)
      return
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)

      // Context detection based on target element
      const target = e.target.closest(
        'a, button, [data-cursor], .system-node, .arch-tier-node, .array-cell, .foundation-card, .external-link-card'
      )

      if (target) {
        setActive(true)
        if (target.dataset?.cursor) {
          setLabel(target.dataset.cursor)
        } else if (target.closest('.visit-live-link') || target.closest('.view-github-link') || target.closest('.visit-project-btn')) {
          setLabel('OPEN ↗')
        } else if (target.closest('.project-tab-card')) {
          setLabel('SELECT PROJECT')
        } else if (target.closest('.retro-skill-card')) {
          setLabel('INSPECT')
        } else if (target.closest('.roadmap-step-card')) {
          setLabel('VIEW STAGE')
        } else if (target.closest('.email-copy-btn')) {
          setLabel('COPY')
        } else if (target.closest('.github-inspect-btn') || target.closest('.navbar-github-btn')) {
          setLabel('GITHUB ↗')
        } else {
          setLabel('')
        }
      } else {
        setActive(false)
        setLabel('')
      }
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [visible])

  if (isTouch || !visible) return null

  return (
    <div
      className={`custom-cursor-follower ${active ? 'is-active' : ''} ${label ? 'has-label' : ''}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      <div className="cursor-dot" />
      {label && <span className="cursor-label-badge">{label}</span>}
    </div>
  )
}
