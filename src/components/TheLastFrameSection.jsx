import React, { useEffect, useRef, useState } from 'react'
import { profile } from '../data/site'

function TheLastFrameSection() {
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const email = profile.email

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const handleCopy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const links = [
    {
      name: 'GITHUB', url: profile.links.github,
      handle: '@TheAKSHAYY',
      note: 'Code repositories, open-source projects & algorithmic practice',
    },
    {
      name: 'LINKEDIN', url: profile.links.linkedin,
      handle: 'Akshay Sharma',
      note: 'Academic background & professional updates',
    },
    {
      name: 'XROUNDER', url: profile.links.xrounder,
      handle: 'xrounder.in',
      note: 'Live learning platform — React + Supabase, shipped to production',
    },
  ]

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className={`ep-section ep-lastframe-section ${visible ? 'ep-is-visible' : ''}`}
      aria-label="06 — The Last Frame"
    >
      <div className="ep-grain" aria-hidden="true" />
      <div className="ep-reg-mark ep-reg-tl" aria-hidden="true">◎</div>
      <div className="ep-reg-mark ep-reg-tr" aria-hidden="true">◎</div>

      <div className="ep-lastframe-inner">
        <div className="ep-chapter-eyebrow">
          <span className="ep-chapter-num">06</span>
          <span className="ep-chapter-rule" />
          <span className="ep-chapter-label">THE LAST FRAME</span>
        </div>

        <h2 className="ep-lastframe-headline">
          <span className="ep-lf-lets">THE WORK</span>
          <br />
          <span className="ep-lf-build ep-crimson">CONTINUES.</span>
        </h2>

        <p className="ep-lastframe-sub">
          Project ho, experiment ho, ya koi crazy idea &mdash;
          let's build it.
          <span className="ep-lf-devanagari" title="Let's Connect"> [जुड़ते हैं]</span>
        </p>

        <a href={`mailto:${email}`} className="ep-lastframe-cta-link" aria-label="Start a conversation">
          START SOMETHING →
        </a>

        <div className="ep-email-block">
          <a href={`mailto:${email}`} className="ep-email-link" aria-label={`Send email to ${email}`}>
            <span className="ep-email-addr">{email}</span>
            <span className="ep-email-arrow">↗</span>
          </a>
          <button type="button" className="ep-email-copy-btn" onClick={handleCopy} aria-label="Copy email address">
            {copied ? '✓ COPIED' : '⌘ COPY EMAIL'}
          </button>
        </div>

        <div className="ep-social-grid">
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="ep-social-card">
              <div className="ep-social-card-top">
                <strong className="ep-social-name">{link.name}</strong>
                <span className="ep-social-arrow">↗</span>
              </div>
              <span className="ep-social-handle">{link.handle}</span>
              <p className="ep-social-note">{link.note}</p>
            </a>
          ))}
        </div>

        <div className="ep-credits-bar">
          <div className="ep-credits-left">
            <span className="ep-credits-name">AKSHAY SHARMA</span>
            <span className="ep-credits-sep">·</span>
            <span className="ep-credits-tag">BCA STUDENT · SDE TRAJECTORY</span>
            <span className="ep-credits-sep">·</span>
            <span className="ep-credits-location">INDIA 🇮🇳</span>
          </div>
          <div className="ep-credits-right">
            <span className="ep-credits-note">Built while learning. Not a finished product.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(TheLastFrameSection)
