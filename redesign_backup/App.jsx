import React, { useState, useEffect } from 'react'
import SystemNavbar from './components/SystemNavbar'
import HeroSystem from './components/HeroSystem'
import JavaSection from './components/JavaSection'
import DsaSection from './components/DsaSection'
import SqlSection from './components/SqlSection'
import SpringSection from './components/SpringSection'
import GitSection from './components/GitSection'
import ProjectSection from './components/ProjectSection'
import VibeCodingSection from './components/VibeCodingSection'
import FoundationSection from './components/FoundationSection'
import JourneySection from './components/JourneySection'
import HumanSection from './components/HumanSection'
import ContactSection from './components/ContactSection'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = [
      'hero',
      'java',
      'dsa',
      'sql',
      'spring',
      'git',
      'project',
      'vibe-coding',
      'foundation',
      'journey',
      'human',
      'contact',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

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
      <SystemNavbar activeSection={activeSection} />

      <main className="sde-main-content">
        <HeroSystem />
        <JavaSection />
        <DsaSection />
        <SqlSection />
        <SpringSection />
        <GitSection />
        <ProjectSection />
        <VibeCodingSection />
        <FoundationSection />
        <JourneySection />
        <HumanSection />
      </main>

      <ContactSection />
    </div>
  )
}
