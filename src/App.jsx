import React, { useState, useEffect } from 'react'
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

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showStickyNav, setShowStickyNav] = useState(false)

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'journey', 'contact']

    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowStickyNav(scrollY > 100)

      const scrollPosition = scrollY + 220
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
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
