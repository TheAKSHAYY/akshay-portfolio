import React, { useState, useEffect, useRef } from 'react'

export default function HeroSystem() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Refined subtle scroll parallax (calm, sophisticated movement)
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 900
  const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1.2)

  // Giant typography: subtle horizontal & vertical shift behind portrait
  const textTranslateX = progress * 110
  const textTranslateY = progress * 30
  const textScale = 1 + progress * 0.02
  const textOpacity = 1 - progress * 0.15

  // Portrait: stable anchor, very gentle parallax
  const portraitTranslateY = progress * 35

  // Small labels gentle float
  const labelTranslateY = -progress * 25

  return (
    <section id="hero" ref={heroRef} className="cinematic-hero" aria-label="Hero poster — Akshay Sharma">
      {/* 1. DUAL VERTICAL SPLIT BACKGROUND CANVAS (CLEAN & MINIMAL) */}
      <div className="hero-split-background" aria-hidden="true">
        {/* Left Side: Near-Black #080808 */}
        <div className="bg-half bg-dark-side">
          <div className="dark-film-vignette" />
        </div>

        {/* Right Side: Warm Ivory #F1F0EB */}
        <div className="bg-half bg-ivory-side">
          <div className="ivory-paper-texture" />
        </div>

        {/* Subtle Film Grain Texture */}
        <div className="film-grain-overlay" />
      </div>

      {/* 2. MINIMALIST EDITORIAL NAVIGATION */}
      <header className="cinematic-nav-overlay" role="navigation">
        <a href="#hero" className="nav-brand-editorial" aria-label="Akshay Sharma - Home">
          <span className="brand-editorial-text">AKSHAY</span>
        </a>

        <nav className="nav-links-editorial" aria-label="Main navigation links">
          <a href="#about" className="nav-editorial-link">ABOUT</a>
          <a href="#projects" className="nav-editorial-link">WORK</a>
          <a href="#skills" className="nav-editorial-link">SKILLS</a>
          <a href="#contact" className="nav-editorial-link">CONTACT</a>
        </nav>
      </header>

      {/* 3. LAYER 3: GIANT RED EDITORIAL NAME (RESPONSIVE, FULLY VISIBLE & SCROLL-ANIMATED BEHIND PORTRAIT) */}
      <div
        className="giant-name-typography-wrap"
        style={{
          transform: `translate3d(${textTranslateX}px, ${textTranslateY}px, 0) scale(${textScale})`,
          opacity: textOpacity,
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      >
        <div className="giant-name-row">
          <div className="name-word-block akshay-block">
            <span className="giant-word akshay">AKSHAY</span>
            <span className="vintage-script-annotation inseen-easter-egg" title="Inसेन">[Inसेन]</span>
          </div>
          <div className="name-word-block sharma-block">
            <span className="giant-word sharma">SHARMA</span>
          </div>
        </div>
      </div>

      {/* 4. LAYER 4: REFINED EDITORIAL ANNOTATIONS (SPARSE, CALM, 10% DETAIL) */}
      <div
        className="editorial-details-layer"
        style={{
          transform: `translate3d(0, ${labelTranslateY}px, 0)`,
        }}
      >
        {/* TOP LEFT: DISCIPLINE & ROLE CLASSIFICATION */}
        <div className="editorial-meta-box top-left-refined">
          <span className="category-sub-tag hero-meta-strong">// SOFTWARE DEVELOPER</span>
          <span className="role-focus-tag hero-role-strong">JAVA &bull; BACKEND &bull; DSA</span>
          <div className="red-accent-dash-line" />
        </div>

        {/* MID RIGHT: CLEAN MINIMAL VERTICAL TECH LIST */}
        <div className="editorial-meta-box mid-right-refined">
          <span className="tech-vertical-label">
            JAVA <span className="vintage-script-badge-clean" title="Jaवा Core">Jaवा</span>
          </span>
          <span className="tech-vertical-label">DSA</span>
          <span className="tech-vertical-label">BACKEND</span>
          <span className="tech-vertical-label">SPRING</span>
          <span className="tech-vertical-label">SQL</span>
          <span className="tech-vertical-label">
            GITHUB <span className="vintage-script-badge-clean" title="Gitहब">Gitहब</span>
          </span>
        </div>

        {/* BOTTOM LEFT: MINIMAL EDITORIAL STATEMENT */}
        <div className="editorial-meta-box bottom-left-refined">
          <p className="clean-hero-quote">
            &ldquo;A better version of me is always in progress.&rdquo;
          </p>
          <span className="location-badge">UP, BAREILLY &middot; INDIA</span>
        </div>
      </div>

      {/* 5. LAYER 5: TRANSPARENT PNG PORTRAIT (UNCHANGED, CENTERED FOREGROUND ANCHOR) */}
      <div
        className="hero-portrait-stage"
        style={{
          transform: `translate3d(-50%, ${portraitTranslateY}px, 0)`,
          willChange: 'transform',
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/akshay_suit_cutout.png`}
          alt="Akshay Sharma — Software Developer"
          className="portrait-person-cutout"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* 6. BOTTOM SCROLL INDICATOR */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <a href="#about" className="scroll-prompt-link" aria-label="Scroll to explore">
          <span className="scroll-arrow-line" />
          <span className="scroll-text">SCROLL TO EXPLORE &darr;</span>
        </a>
      </div>
    </section>
  )
}
