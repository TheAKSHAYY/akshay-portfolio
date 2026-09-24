import React, { useState, useEffect, useRef } from 'react'
import SystemNavbar from './components/SystemNavbar'
import HeroSystem from './components/HeroSystem'
import ThePersonSection from './components/ThePersonSection'
import EvidenceRoom from './components/EvidenceRoom'
import TheStackSection from './components/TheStackSection'
import DevLogSection from './components/DevLogSection'
import StillBuildingSection from './components/StillBuildingSection'
import TheLastFrameSection from './components/TheLastFrameSection'
import CustomCursor from './components/CustomCursor'
import './styles.css'
import './editorial_lower.css'
import './evidence_room.css'
import './portfolio_polish.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showStickyNav, setShowStickyNav] = useState(false)
  const stickyNavRef = useRef(false)

  useEffect(() => {
    // 1. IntersectionObserver for active section tracking (zero forced reflow, zero offsetTop reads)
    const sectionIds = ['hero', 'about', 'projects', 'skills', 'journey', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // 2. Throttled scroll check for sticky navbar toggle ONLY (no DOM layout reading)
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isSticky = window.scrollY > 120
          if (isSticky !== stickyNavRef.current) {
            stickyNavRef.current = isSticky
            setShowStickyNav(isSticky)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="sde-portfolio-app">
      <CustomCursor />
      {showStickyNav && <SystemNavbar activeSection={activeSection} />}

      <main className="sde-main-content">
        <HeroSystem />
        <ThePersonSection />
        <EvidenceRoom />
        <TheStackSection />
        <DevLogSection />
        <StillBuildingSection />
      </main>

      <TheLastFrameSection />
    </div>
  )
}
