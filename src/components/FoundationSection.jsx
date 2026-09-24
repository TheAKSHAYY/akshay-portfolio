import React, { useState } from 'react'
import { primarySkills, otherTechnologies, currentLearning, tools } from '../data/site'
import { JavaLogo, DatabaseLogo, GitLogo, GitHubLogo, LeetCodeLogo, ApiServerIcon, ReactLogo, AndroidLogo, SupabaseLogo } from './TechLogos'

export default function FoundationSection() {
  const [activeTab, setActiveTab] = useState('primary')

  const getPrimaryIcon = (name) => {
    if (name.includes('Java')) return JavaLogo
    if (name.includes('DSA')) return LeetCodeLogo
    if (name.includes('SQL')) return DatabaseLogo
    if (name.includes('Backend')) return ApiServerIcon
    if (name.includes('Git') && !name.includes('GitHub')) return GitLogo
    if (name.includes('GitHub')) return GitHubLogo
    return ApiServerIcon
  }

  const getOtherIcon = (name) => {
    if (name.includes('React')) return ReactLogo
    if (name.includes('Android')) return AndroidLogo
    if (name.includes('Supabase')) return SupabaseLogo
    return null
  }

  return (
    <section id="skills" className="foundation-section" aria-label="Skills and Tools Architecture">
      <div className="section-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow">
          <span className="eyebrow-num">08 // SKILLS &amp; TOOLS</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-badge">AUTHENTIC CAPABILITIES</span>
        </div>

        {/* Section Header */}
        <div className="foundation-header-block">
          <h2 className="foundation-section-title">
            TECHNICAL TOOLBOX &amp; <span className="text-skills-accent">SKILLS.</span>
          </h2>
          <p className="foundation-section-subtitle">
            Zero fabricated mastery percentages or exaggerated senior claims.
            Presented transparently according to actual relevance, hands-on project application, and active learning focus.
          </p>
        </div>

        {/* 4 Category Selector Tabs */}
        <div className="skills-category-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'primary'}
            className={`category-tab-btn ${activeTab === 'primary' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('primary')}
          >
            <span>01. Primary Skills</span>
            <span className="tab-count">({primarySkills.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'other'}
            className={`category-tab-btn ${activeTab === 'other' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('other')}
          >
            <span>02. Other Tech / Experience</span>
            <span className="tab-count">({otherTechnologies.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'learning'}
            className={`category-tab-btn ${activeTab === 'learning' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('learning')}
          >
            <span>03. Current Learning</span>
            <span className="tab-count">({currentLearning.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'tools'}
            className={`category-tab-btn ${activeTab === 'tools' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <span>04. Developer Tools</span>
            <span className="tab-count">({tools.length})</span>
          </button>
        </div>

        {/* Tab Panel Content */}
        <div className="skills-panel-wrapper">
          {/* TAB 1: Primary Skills */}
          {activeTab === 'primary' && (
            <div className="primary-skills-grid">
              {primarySkills.map((skill) => {
                const IconComp = getPrimaryIcon(skill.name)
                return (
                  <div key={skill.name} className="primary-skill-card">
                    <div className="skill-card-top">
                      <div className="skill-icon-wrap">
                        <IconComp size={22} color="currentColor" />
                      </div>
                      <span className="skill-role-badge">{skill.role}</span>
                    </div>

                    <strong className="skill-title">{skill.name}</strong>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                )
              })}
            </div>
          )}

          {/* TAB 2: Other Technologies & Experience */}
          {activeTab === 'other' && (
            <div className="other-tech-grid">
              {otherTechnologies.map((item) => {
                const IconComp = getOtherIcon(item.name)
                return (
                  <div key={item.name} className="other-tech-card">
                    <div className="other-card-header">
                      {IconComp ? (
                        <div className="other-icon-wrap">
                          <IconComp size={18} color="currentColor" />
                        </div>
                      ) : (
                        <span className="other-icon-dot" />
                      )}
                      <span className="relevance-tag">{item.relevance}</span>
                    </div>
                    <strong className="other-name">{item.name}</strong>
                    <span className="other-role">{item.role}</span>
                  </div>
                )
              })}
            </div>
          )}

          {/* TAB 3: Current Learning */}
          {activeTab === 'learning' && (
            <div className="learning-topics-grid">
              {currentLearning.map((item, idx) => (
                <div key={item.name} className="learning-card">
                  <div className="learning-card-top">
                    <span className="learning-index">0{idx + 1}</span>
                    <span className="learning-pulse-dot" />
                  </div>
                  <strong className="learning-name">{item.name}</strong>
                  <p className="learning-note">{item.note}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Developer Tools */}
          {activeTab === 'tools' && (
            <div className="tools-display-grid">
              {tools.map((tool) => (
                <div key={tool} className="tool-chip-card">
                  <span className="tool-bracket">[</span>
                  <span className="tool-title">{tool}</span>
                  <span className="tool-bracket">]</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
