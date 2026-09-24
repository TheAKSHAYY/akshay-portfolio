import React from 'react'

export function JavaLogo({ size = 28, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Java Logo">
      {/* Steam lines */}
      <path d="M7.5 4.2c2.2.8 3.5-.8 4.2-1.7-.5 1.5-1.8 2.5-3.8 2.2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10.8 1.8c1.5.8 2.5-.2 3.2-1-.4 1.3-1.4 2-3.1 1.7" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4.8 6.5c3.2 1 5.2-.8 6.5-2.2-.8 2-2.8 3.2-5.8 2.8" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Cup body */}
      <path d="M4 9h12.5v6.2c0 2.6-2.1 4.8-4.8 4.8H8.8C6.1 20 4 17.8 4 15.2V9z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      {/* Cup handle */}
      <path d="M16.5 10.5h1.2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-1.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Saucer */}
      <path d="M2.5 21.5h16" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Coffee fill detail */}
      <path d="M6 12.5h8.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1 2" opacity="0.6" />
    </svg>
  )
}

export function SpringBootLogo({ size = 28, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Spring Boot Logo">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill={color} opacity="0.2" />
      {/* Spring Leaf contour */}
      <path d="M6.2 16.8c3.2 1.6 7.4.8 9.8-1.6 2.4-2.4 2.8-6.1 1.2-8.8-2.6 1.8-6.5 4.5-8.5 7.1-.6.8-1.5 2.1-2.5 3.3z" fill={color} />
      <path d="M17.2 6.4c-2.8-1-6.1-.2-8.2 1.9-2.1 2.1-2.5 5.2-1.4 7.6 2.1-1.6 5.4-3.9 7.2-6.2.7-.9 1.6-2.1 2.4-3.3z" stroke={color} strokeWidth="1.2" fill="none" opacity="0.8" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  )
}

export function DatabaseLogo({ size = 28, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="SQL Database Logo">
      {/* Top ellipse */}
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke={color} strokeWidth="1.6" />
      {/* Middle section */}
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke={color} strokeWidth="1.6" />
      {/* Bottom section */}
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke={color} strokeWidth="1.6" />
      {/* Inner query/data indicator */}
      <circle cx="8" cy="11" r="1" fill={color} />
      <circle cx="8" cy="17" r="1" fill={color} />
      <line x1="12" y1="11" x2="16" y2="11" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="12" y1="17" x2="16" y2="17" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function GitLogo({ size = 28, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Git Logo">
      {/* 45 degree diamond body */}
      <path d="M21.7 10.9L13.1 2.3c-.8-.8-2.1-.8-2.9 0L8 4.5l3.2 3.2c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.1 3.1c.8-.3 1.8-.1 2.4.5.9.9.9 2.3 0 3.1-.9.9-2.3.9-3.1 0-.7-.7-.8-1.7-.4-2.5l-2.9-2.9v5.1c.3.2.5.5.6.9.5 1.1 0 2.4-1.1 2.9s-2.4 0-2.9-1.1c-.5-1.1 0-2.4 1.1-2.9.4-.2.9-.2 1.3-.1V9.5c-.4-.1-.8-.3-1.1-.6-.8-.8-.8-2 0-2.8.2-.2.5-.4.8-.5L6.6 3.2 2.3 7.5c-.8.8-.8 2.1 0 2.9l8.6 8.6c.8.8 2.1.8 2.9 0l7.9-7.9c.8-.8.8-2.1 0-2.9z" fill={color} />
    </svg>
  )
}

export function GitHubLogo({ size = 28, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="GitHub Logo">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function LeetCodeLogo({ size = 28, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="LeetCode Logo">
      {/* Outer bracket shape */}
      <path d="M15.2 3.8l-7.6 6.3c-.9.8-.9 2.2 0 3l7.6 6.3" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Top accent arm */}
      <path d="M17.5 7.5L12 3" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Middle horizontal bar */}
      <path d="M11 12.5h9.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function ReactLogo({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="React Logo">
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" stroke={color} strokeWidth="1.3" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" stroke={color} strokeWidth="1.3" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" stroke={color} strokeWidth="1.3" />
      <circle cx="12" cy="12" r="1.8" fill={color} />
    </svg>
  )
}

export function TypeScriptLogo({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript Logo">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke={color} strokeWidth="1.5" />
      <path d="M6 8.5h6m-3 0v8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 15.5c.8.6 1.8.8 2.6.4.8-.4 1.2-1.2 1-2-.3-1.1-2.4-1.2-2.8-2.2-.3-.8 0-1.7.8-2.1.8-.4 1.8-.2 2.4.3" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function SupabaseLogo({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Supabase Logo">
      <path d="M13.2 2L3 14.2h8l-1.8 7.8 11.8-12.2H13.2L13.2 2z" fill={color} />
    </svg>
  )
}

export function AndroidLogo({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Android Logo">
      <path d="M6 10c0-3.3 2.7-6 6-6s6 2.7 6 6H6z" stroke={color} strokeWidth="1.5" />
      <line x1="8" y1="3" x2="6" y2="1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="3" x2="18" y2="1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="7.5" r="0.8" fill={color} />
      <circle cx="15" cy="7.5" r="0.8" fill={color} />
      <rect x="6" y="11.5" width="12" height="8" rx="2" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

export function ApiServerIcon({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="API Server Icon">
      <rect x="3" y="4" width="18" height="6" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" stroke={color} strokeWidth="1.5" />
      <circle cx="6.5" cy="7" r="1" fill={color} />
      <circle cx="9.5" cy="7" r="1" fill={color} />
      <circle cx="6.5" cy="17" r="1" fill={color} />
      <circle cx="9.5" cy="17" r="1" fill={color} />
      <line x1="15" y1="7" x2="18" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="17" x2="18" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Interactive TechBadge component:
 * Controlled monochrome by default -> illuminates with authentic brand color + title & role on hover
 */
export function TechBadge({
  id,
  name,
  role,
  brandColor = '#3b82f6',
  IconComponent,
  size = 22,
  active = false,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`tech-badge ${active ? 'is-active' : ''}`}
      onClick={onClick}
      style={{ '--brand-color': brandColor }}
      data-tech={id}
      aria-label={`${name}: ${role}`}
    >
      <span className="tech-badge-icon">
        <IconComponent size={size} color="currentColor" />
      </span>
      <span className="tech-badge-info">
        <span className="tech-badge-name">{name}</span>
        <span className="tech-badge-role">{role}</span>
      </span>
    </button>
  )
}
