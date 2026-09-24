import React, { useState } from 'react'
import { profile } from '../data/site'
import { GitHubLogo } from './TechLogos'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = profile.email

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const socialLinks = [
    {
      name: 'GITHUB',
      url: profile.links.github,
      handle: '@TheAKSHAYY',
      note: 'Code repositories, projects & algorithmic practice',
    },
    {
      name: 'LINKEDIN',
      url: profile.links.linkedin,
      handle: 'Akshay Sharma',
      note: 'Academic background & professional updates',
    },
    {
      name: 'XROUNDER',
      url: profile.links.xrounder,
      handle: 'xrounder.in',
      note: 'Live learning platform built with React & Supabase',
    },
  ]

  return (
    <footer id="contact" className="contact-section" aria-label="Contact and Social Links">
      <div className="section-container">
        {/* Section Header (Req 14) */}
        <div className="editorial-section-header">
          <div className="editorial-number-glyph">04</div>
          <div className="editorial-title-wrap">
            <span className="editorial-sub-tag">// TRANSMISSION</span>
            <h2 className="editorial-hero-heading">
              LET&rsquo;S<br />
              <span className="heading-crimson">BUILD.</span>
            </h2>
            <p className="editorial-lead-statement">
              Open to conversations about software engineering opportunities, backend collaboration, or discussing Java &amp; DSA.
            </p>
          </div>
        </div>

        {/* Contact Main Headline Frame */}
        <div className="contact-main-frame">

          {/* Interactive Email Bar */}
          <div className="contact-email-interaction-box">
            <a
              href={`mailto:${email}`}
              className="email-direct-link"
              aria-label={`Send email to ${email}`}
            >
              <span className="email-addr-text">{email}</span>
              <span className="email-link-arrow">↗</span>
            </a>

            <button
              type="button"
              className="email-copy-btn"
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
            >
              {copied ? '✓ COPIED TO CLIPBOARD' : '📋 COPY EMAIL'}
            </button>
          </div>
        </div>

        {/* Social / External Links Grid */}
        <div className="contact-social-grid">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <div className="social-card-top">
                <strong className="social-platform-title">{link.name}</strong>
                <span className="social-arrow">↗</span>
              </div>
              <span className="social-handle">{link.handle}</span>
              <p className="social-note">{link.note}</p>
            </a>
          ))}
        </div>

        {/* System Bottom Footer Bar */}
        <div className="contact-bottom-bar">
          <div className="bottom-bar-left">
            <span className="bar-author">AKSHAY SHARMA</span>
            <span className="bar-sep">&middot;</span>
            <span className="bar-tag">BCA STUDENT &middot; SDE TRAJECTORY</span>
            <span className="bar-sep">&middot;</span>
            <span className="vintage-script-annotation" style={{ fontSize: '0.78rem', color: '#ff5e67' }} title="Inसेन Builds">[Inसेन बिल्ड]</span>
            <span className="bar-sep">&middot;</span>
            <span className="bar-location">INDIA &#x1F1EE;&#x1F1F3;</span>
          </div>

          <div className="bottom-bar-right">
            <span>Akshay Sharma — BCA student, learning Java &amp; building backend projects. Built while learning, not a finished product.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
