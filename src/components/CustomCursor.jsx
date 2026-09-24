import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const activeRef = useRef(false)
  const labelRef = useRef('')
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

    let rafId = null

    const onMouseMove = (e) => {
      const clientX = e.clientX
      const clientY = e.clientY

      if (cursorRef.current) {
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
          }
        })
      }

      if (!visible) setVisible(true)

      // Context detection based on target element
      const target = e.target.closest(
        'a, button, [data-cursor], .system-node, .arch-tier-node, .array-cell, .foundation-card, .external-link-card'
      )

      let newActive = false
      let newLabel = ''

      if (target) {
        newActive = true
        if (target.dataset?.cursor) {
          newLabel = target.dataset.cursor
        } else if (target.closest('.visit-live-link') || target.closest('.view-github-link') || target.closest('.visit-project-btn')) {
          newLabel = 'OPEN ↗'
        } else if (target.closest('.project-tab-card')) {
          newLabel = 'SELECT PROJECT'
        } else if (target.closest('.retro-skill-card')) {
          newLabel = 'INSPECT'
        } else if (target.closest('.roadmap-step-card')) {
          newLabel = 'VIEW STAGE'
        } else if (target.closest('.email-copy-btn')) {
          newLabel = 'COPY'
        } else if (target.closest('.github-inspect-btn') || target.closest('.navbar-github-btn')) {
          newLabel = 'GITHUB ↗'
        }
      }

      // Only trigger React state updates when active or label actually changes
      if (newActive !== activeRef.current) {
        activeRef.current = newActive
        setActive(newActive)
      }
      if (newLabel !== labelRef.current) {
        labelRef.current = newLabel
        setLabel(newLabel)
      }
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [visible])

  if (isTouch || !visible) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor-follower ${active ? 'is-active' : ''} ${label ? 'has-label' : ''}`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <div className="cursor-dot" />
      {label && <span className="cursor-label-badge">{label}</span>}
    </div>
  )
}
