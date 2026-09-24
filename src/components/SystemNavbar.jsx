import React, { useState } from 'react'

export default function SystemNavbar({ activeSection = 'hero' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'THE PERSON' },
    { id: 'projects', label: 'WORK' },
    { id: 'skills', label: 'STACK' },
    { id: 'journey', label: 'LOG' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <header className="cinematic-sticky-navbar" role="banner">
      <div className="navbar-editorial-container">
        <a href="#hero" className="navbar-brand-editorial" aria-label="Akshay Sharma - Top">
          <span className="brand-dot-crimson" />
          <span className="brand-editorial-title">AKSHAY</span>
        </a>

        <nav className={`navbar-editorial-links ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main Navigation">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.id}`}
              className={`nav-editorial-item ${activeSection === item.id ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-editorial-actions">
          <a
            href="https://github.com/TheAKSHAYY"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-github-editorial-link"
            aria-label="Visit Akshay's GitHub Profile"
          >
            <span>GITHUB ↗</span>
          </a>
          <button
            type="button"
            className="navbar-burger-minimal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

