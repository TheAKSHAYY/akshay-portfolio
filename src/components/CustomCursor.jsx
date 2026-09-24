import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    // Detect touch device or reduced motion
    const isTouchOrReduced =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isTouchOrReduced) {
      setDisabled(true)
      return
    }

    let mouseX = -100
    let mouseY = -100
    let currentTarget = null
    let lastInspectedTarget = null
    let isVisible = false
    let isActive = false
    let currentLabel = ''
    let rafPending = false

    const updateFrame = () => {
      rafPending = false
      const el = cursorRef.current
      if (!el) return

      // Update position
      el.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

      // Context detection only if target element actually changed
      if (currentTarget !== lastInspectedTarget) {
        lastInspectedTarget = currentTarget
        let newActive = false
        let newLabel = ''

        if (currentTarget && currentTarget.closest) {
          const target = currentTarget.closest(
            'a, button, [data-cursor], .system-node, .arch-tier-node, .array-cell, .foundation-card, .external-link-card'
          )
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
        }

        if (newActive !== isActive) {
          isActive = newActive
          el.classList.toggle('is-active', isActive)
        }

        if (newLabel !== currentLabel) {
          currentLabel = newLabel
          if (labelRef.current) {
            labelRef.current.textContent = newLabel
            el.classList.toggle('has-label', Boolean(newLabel))
          }
        }
      }
    }

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      currentTarget = e.target

      if (!isVisible) {
        isVisible = true
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '1'
        }
      }

      if (!rafPending) {
        rafPending = true
        requestAnimationFrame(updateFrame)
      }
    }

    const onMouseLeave = () => {
      isVisible = false
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
    }

    const onMouseEnter = () => {
      isVisible = true
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave, { passive: true })
    document.addEventListener('mouseenter', onMouseEnter, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  if (disabled) return null

  return (
    <div
      ref={cursorRef}
      className="custom-cursor-follower"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        opacity: 0,
        transition: 'opacity 0.2s ease',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <div className="cursor-dot" />
      <span ref={labelRef} className="cursor-label-badge" />
    </div>
  )
}
