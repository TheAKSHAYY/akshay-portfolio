import React from 'react'

/**
 * High-fidelity 8-bit / Pixel-art Retro Tech Logos
 * Built with crisp SVG geometry, crispEdges rendering, and tech-signature palettes.
 */

export function RetroJavaLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-java ${className}`}
      aria-label="Retro Java Logo"
    >
      {/* Steam pixel curves */}
      <rect x="10" y="2" width="2" height="2" fill="#ff7a59" />
      <rect x="12" y="4" width="2" height="2" fill="#ff7a59" />
      <rect x="7" y="4" width="2" height="2" fill="#ff9e7d" />
      <rect x="9" y="6" width="2" height="2" fill="#ff9e7d" />
      <rect x="14" y="3" width="2" height="2" fill="#ffa07a" />
      
      {/* Cup rim & body */}
      <rect x="5" y="9" width="12" height="2" fill="#ffffff" />
      <rect x="5" y="11" width="11" height="6" fill="#e76f51" />
      <rect x="6" y="11" width="9" height="5" fill="#f4a261" />
      <rect x="7" y="17" width="7" height="2" fill="#e76f51" />
      
      {/* Cup handle */}
      <rect x="16" y="11" width="3" height="2" fill="#ffffff" />
      <rect x="17" y="13" width="2" height="2" fill="#ffffff" />
      <rect x="16" y="15" width="3" height="2" fill="#ffffff" />
      
      {/* Saucer */}
      <rect x="4" y="20" width="14" height="2" fill="#ffffff" />
      <rect x="6" y="21" width="10" height="1" fill="#e76f51" />
    </svg>
  )
}

export function RetroDsaLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-dsa ${className}`}
      aria-label="Retro DSA Logo"
    >
      {/* Root Node */}
      <rect x="10" y="2" width="4" height="4" fill="#fbbf24" />
      <rect x="11" y="3" width="2" height="2" fill="#ffffff" />
      
      {/* Branches to Left/Right */}
      <rect x="8" y="7" width="2" height="2" fill="#d97706" />
      <rect x="14" y="7" width="2" height="2" fill="#d97706" />
      
      {/* Left Node */}
      <rect x="4" y="10" width="4" height="4" fill="#f59e0b" />
      <rect x="5" y="11" width="2" height="2" fill="#ffffff" />
      
      {/* Right Node */}
      <rect x="16" y="10" width="4" height="4" fill="#f59e0b" />
      <rect x="17" y="11" width="2" height="2" fill="#ffffff" />

      {/* Sub branches */}
      <rect x="3" y="15" width="2" height="2" fill="#b45309" />
      <rect x="7" y="15" width="2" height="2" fill="#b45309" />
      <rect x="19" y="15" width="2" height="2" fill="#b45309" />

      {/* Leaf Nodes */}
      <rect x="2" y="18" width="3" height="3" fill="#fbbf24" />
      <rect x="7" y="18" width="3" height="3" fill="#fbbf24" />
      <rect x="19" y="18" width="3" height="3" fill="#fbbf24" />
    </svg>
  )
}

export function RetroSqlLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-sql ${className}`}
      aria-label="Retro SQL Database Logo"
    >
      {/* Disk 1 (Top) */}
      <rect x="4" y="3" width="16" height="2" fill="#38bdf8" />
      <rect x="3" y="5" width="18" height="3" fill="#0284c7" />
      <rect x="5" y="6" width="4" height="1" fill="#7dd3fc" />
      <rect x="17" y="6" width="2" height="1" fill="#38bdf8" />

      {/* Disk 2 (Middle) */}
      <rect x="4" y="9" width="16" height="1" fill="#38bdf8" />
      <rect x="3" y="10" width="18" height="3" fill="#0369a1" />
      <rect x="5" y="11" width="4" height="1" fill="#7dd3fc" />
      <rect x="17" y="11" width="2" height="1" fill="#38bdf8" />

      {/* Disk 3 (Bottom) */}
      <rect x="4" y="14" width="16" height="1" fill="#38bdf8" />
      <rect x="3" y="15" width="18" height="4" fill="#075985" />
      <rect x="5" y="17" width="4" height="1" fill="#7dd3fc" />
      <rect x="17" y="17" width="2" height="1" fill="#38bdf8" />

      {/* Query lightning indicator */}
      <rect x="13" y="9" width="2" height="2" fill="#34d399" />
      <rect x="12" y="11" width="2" height="2" fill="#34d399" />
      <rect x="14" y="13" width="2" height="2" fill="#34d399" />
    </svg>
  )
}

export function RetroBackendLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-backend ${className}`}
      aria-label="Retro Backend Server Logo"
    >
      {/* Outer server chassis */}
      <rect x="3" y="3" width="18" height="18" fill="#1e1b4b" />
      <rect x="4" y="4" width="16" height="4" fill="#312e81" />
      <rect x="4" y="10" width="16" height="4" fill="#312e81" />
      <rect x="4" y="16" width="16" height="4" fill="#312e81" />

      {/* Blinking server LEDs */}
      <rect x="6" y="5" width="2" height="2" fill="#34d399" />
      <rect x="9" y="5" width="2" height="2" fill="#60a5fa" />
      <rect x="6" y="11" width="2" height="2" fill="#34d399" />
      <rect x="9" y="11" width="2" height="2" fill="#a78bfa" />
      <rect x="6" y="17" width="2" height="2" fill="#f43f5e" />
      <rect x="9" y="17" width="2" height="2" fill="#34d399" />

      {/* Server slots */}
      <rect x="13" y="5" width="5" height="1" fill="#818cf8" />
      <rect x="13" y="11" width="5" height="1" fill="#818cf8" />
      <rect x="13" y="17" width="5" height="1" fill="#818cf8" />
    </svg>
  )
}

export function RetroGitLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-git ${className}`}
      aria-label="Retro Git Logo"
    >
      {/* 45-degree pixel diamond */}
      <rect x="10" y="2" width="4" height="2" fill="#f05032" />
      <rect x="7" y="4" width="10" height="2" fill="#f05032" />
      <rect x="5" y="6" width="14" height="2" fill="#f05032" />
      <rect x="3" y="8" width="18" height="8" fill="#f05032" />
      <rect x="5" y="16" width="14" height="2" fill="#f05032" />
      <rect x="7" y="18" width="10" height="2" fill="#f05032" />
      <rect x="10" y="20" width="4" height="2" fill="#f05032" />

      {/* Inner commit nodes & branch */}
      <rect x="7" y="8" width="3" height="3" fill="#ffffff" />
      <rect x="14" y="8" width="3" height="3" fill="#ffffff" />
      <rect x="14" y="13" width="3" height="3" fill="#ffffff" />
      <rect x="8" y="10" width="2" height="5" fill="#ffffff" />
      <rect x="10" y="11" width="4" height="2" fill="#ffffff" />
    </svg>
  )
}

export function RetroGitHubLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-github ${className}`}
      aria-label="Retro GitHub Logo"
    >
      {/* Cat head & ears */}
      <rect x="5" y="4" width="3" height="3" fill="#ffffff" />
      <rect x="16" y="4" width="3" height="3" fill="#ffffff" />
      <rect x="6" y="7" width="12" height="8" fill="#ffffff" />
      <rect x="4" y="9" width="16" height="6" fill="#ffffff" />

      {/* Cat face inside cutout */}
      <rect x="7" y="10" width="2" height="3" fill="#090d16" />
      <rect x="15" y="10" width="2" height="3" fill="#090d16" />
      <rect x="11" y="12" width="2" height="2" fill="#090d16" />

      {/* Cat body & tentacles */}
      <rect x="6" y="15" width="12" height="4" fill="#ffffff" />
      <rect x="5" y="19" width="3" height="2" fill="#ffffff" />
      <rect x="10" y="19" width="4" height="2" fill="#ffffff" />
      <rect x="16" y="19" width="3" height="2" fill="#ffffff" />
    </svg>
  )
}

export function RetroSpringBootLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-spring ${className}`}
      aria-label="Retro Spring Boot Logo"
    >
      {/* Spring circular border */}
      <rect x="8" y="2" width="8" height="2" fill="#22c55e" />
      <rect x="4" y="4" width="16" height="2" fill="#22c55e" />
      <rect x="2" y="8" width="20" height="8" fill="#15803d" />
      <rect x="4" y="18" width="16" height="2" fill="#22c55e" />
      <rect x="8" y="20" width="8" height="2" fill="#22c55e" />

      {/* Green Pixel Leaf */}
      <rect x="10" y="5" width="4" height="4" fill="#86efac" />
      <rect x="8" y="9" width="8" height="5" fill="#ffffff" />
      <rect x="11" y="10" width="2" height="7" fill="#16a34a" />
      <rect x="13" y="14" width="3" height="3" fill="#86efac" />
    </svg>
  )
}

export function RetroReactLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-react ${className}`}
      aria-label="Retro React Logo"
    >
      {/* Core nucleus */}
      <rect x="10" y="10" width="4" height="4" fill="#00e5ff" />
      <rect x="11" y="11" width="2" height="2" fill="#ffffff" />

      {/* Orbit 1: Horizontal */}
      <rect x="3" y="11" width="3" height="2" fill="#38bdf8" />
      <rect x="18" y="11" width="3" height="2" fill="#38bdf8" />

      {/* Orbit 2: Diagonal Top-Left to Bottom-Right */}
      <rect x="5" y="5" width="3" height="2" fill="#00e5ff" />
      <rect x="16" y="17" width="3" height="2" fill="#00e5ff" />

      {/* Orbit 3: Diagonal Top-Right to Bottom-Left */}
      <rect x="16" y="5" width="3" height="2" fill="#00e5ff" />
      <rect x="5" y="17" width="3" height="2" fill="#00e5ff" />

      {/* Outer orbit boundary markers */}
      <rect x="9" y="3" width="6" height="1" fill="#0284c7" />
      <rect x="9" y="20" width="6" height="1" fill="#0284c7" />
    </svg>
  )
}

export function RetroAndroidLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-android ${className}`}
      aria-label="Retro Android Logo"
    >
      {/* Antennae */}
      <rect x="6" y="3" width="2" height="2" fill="#3ddc84" />
      <rect x="16" y="3" width="2" height="2" fill="#3ddc84" />
      <rect x="7" y="5" width="2" height="2" fill="#3ddc84" />
      <rect x="15" y="5" width="2" height="2" fill="#3ddc84" />

      {/* Robot Dome Head */}
      <rect x="5" y="7" width="14" height="5" fill="#3ddc84" />
      <rect x="7" y="9" width="2" height="2" fill="#090d16" />
      <rect x="15" y="9" width="2" height="2" fill="#090d16" />

      {/* Neck separation */}
      <rect x="5" y="12" width="14" height="1" fill="#090d16" />

      {/* Robot Body */}
      <rect x="5" y="13" width="14" height="6" fill="#3ddc84" />
      <rect x="2" y="13" width="2" height="5" fill="#3ddc84" />
      <rect x="20" y="13" width="2" height="5" fill="#3ddc84" />

      {/* Legs */}
      <rect x="7" y="19" width="3" height="3" fill="#3ddc84" />
      <rect x="14" y="19" width="3" height="3" fill="#3ddc84" />
    </svg>
  )
}

export function RetroSupabaseLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-supabase ${className}`}
      aria-label="Retro Supabase Logo"
    >
      {/* Pixel Lightning Bolt */}
      <rect x="12" y="2" width="4" height="4" fill="#3ecf8e" />
      <rect x="10" y="6" width="5" height="3" fill="#3ecf8e" />
      <rect x="7" y="9" width="7" height="3" fill="#3ecf8e" />
      <rect x="4" y="12" width="14" height="3" fill="#3ecf8e" />
      <rect x="9" y="15" width="7" height="3" fill="#10b981" />
      <rect x="11" y="18" width="4" height="4" fill="#059669" />
    </svg>
  )
}

export function RetroTypeScriptLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-typescript ${className}`}
      aria-label="Retro TypeScript Logo"
    >
      {/* Blue Cartridge */}
      <rect x="3" y="3" width="18" height="18" fill="#3178c6" />
      <rect x="4" y="4" width="16" height="1" fill="#60a5fa" />
      <rect x="4" y="4" width="1" height="16" fill="#60a5fa" />

      {/* Letter T */}
      <rect x="6" y="9" width="6" height="2" fill="#ffffff" />
      <rect x="8" y="11" width="2" height="6" fill="#ffffff" />

      {/* Letter S */}
      <rect x="13" y="9" width="5" height="2" fill="#ffffff" />
      <rect x="13" y="11" width="2" height="2" fill="#ffffff" />
      <rect x="13" y="13" width="5" height="2" fill="#ffffff" />
      <rect x="16" y="15" width="2" height="2" fill="#ffffff" />
      <rect x="13" y="17" width="5" height="2" fill="#ffffff" />
    </svg>
  )
}

export function RetroJavaScriptLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-javascript ${className}`}
      aria-label="Retro JavaScript Logo"
    >
      {/* Yellow Cartridge */}
      <rect x="3" y="3" width="18" height="18" fill="#f7df1e" />

      {/* Letter J */}
      <rect x="7" y="10" width="2" height="5" fill="#000000" />
      <rect x="5" y="14" width="2" height="2" fill="#000000" />
      <rect x="6" y="15" width="3" height="2" fill="#000000" />

      {/* Letter S */}
      <rect x="12" y="10" width="5" height="2" fill="#000000" />
      <rect x="12" y="12" width="2" height="1" fill="#000000" />
      <rect x="12" y="13" width="5" height="2" fill="#000000" />
      <rect x="15" y="15" width="2" height="1" fill="#000000" />
      <rect x="12" y="16" width="5" height="2" fill="#000000" />
    </svg>
  )
}

export function RetroPythonLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-python ${className}`}
      aria-label="Retro Python Logo"
    >
      {/* Blue Top Snake */}
      <rect x="6" y="3" width="7" height="6" fill="#38bdf8" />
      <rect x="11" y="9" width="4" height="3" fill="#38bdf8" />
      <rect x="8" y="5" width="2" height="2" fill="#ffffff" />

      {/* Yellow Bottom Snake */}
      <rect x="11" y="15" width="7" height="6" fill="#facc15" />
      <rect x="9" y="12" width="4" height="3" fill="#facc15" />
      <rect x="14" y="17" width="2" height="2" fill="#000000" />
    </svg>
  )
}

export function RetroCLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-c ${className}`}
      aria-label="Retro C Language Logo"
    >
      {/* Dark Slate Cartridge */}
      <rect x="3" y="3" width="18" height="18" fill="#0f172a" />
      <rect x="4" y="4" width="16" height="1" fill="#38bdf8" />

      {/* Pixel Letter C */}
      <rect x="8" y="7" width="8" height="2" fill="#38bdf8" />
      <rect x="6" y="9" width="3" height="6" fill="#38bdf8" />
      <rect x="8" y="15" width="8" height="2" fill="#38bdf8" />
      <rect x="14" y="9" width="2" height="2" fill="#7dd3fc" />
      <rect x="14" y="13" width="2" height="2" fill="#7dd3fc" />
    </svg>
  )
}

export function RetroIntelliJLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-intellij ${className}`}
      aria-label="Retro IntelliJ Logo"
    >
      {/* IDE Frame */}
      <rect x="3" y="3" width="18" height="18" fill="#1e1e24" />
      <rect x="3" y="3" width="6" height="6" fill="#f43f5e" />
      <rect x="15" y="15" width="6" height="6" fill="#00e5ff" />

      <rect x="7" y="15" width="5" height="2" fill="#ffffff" />
      <rect x="6" y="9" width="3" height="2" fill="#facc15" />
      <rect x="10" y="9" width="5" height="2" fill="#86efac" />
    </svg>
  )
}

export function RetroFigmaLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-figma ${className}`}
      aria-label="Retro Figma Logo"
    >
      <rect x="6" y="3" width="5" height="5" fill="#f24e1e" />
      <rect x="13" y="3" width="5" height="5" fill="#ff7262" />
      <rect x="6" y="9" width="5" height="5" fill="#a259ff" />
      <rect x="13" y="9" width="5" height="5" fill="#1abcfe" />
      <rect x="6" y="15" width="5" height="5" fill="#0acf83" />
    </svg>
  )
}

export function RetroVercelLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-vercel ${className}`}
      aria-label="Retro Vercel Logo"
    >
      <rect x="11" y="4" width="2" height="2" fill="#ffffff" />
      <rect x="10" y="6" width="4" height="2" fill="#ffffff" />
      <rect x="9" y="8" width="6" height="2" fill="#ffffff" />
      <rect x="8" y="10" width="8" height="2" fill="#ffffff" />
      <rect x="7" y="12" width="10" height="2" fill="#ffffff" />
      <rect x="6" y="14" width="12" height="2" fill="#ffffff" />
      <rect x="5" y="16" width="14" height="2" fill="#ffffff" />
      <rect x="4" y="18" width="16" height="2" fill="#ffffff" />
    </svg>
  )
}

export function RetroToolLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-tool ${className}`}
      aria-label="Retro Tool Logo"
    >
      <rect x="14" y="4" width="5" height="3" fill="#94a3b8" />
      <rect x="17" y="7" width="2" height="4" fill="#94a3b8" />
      <rect x="11" y="10" width="4" height="4" fill="#cbd5e1" />
      <rect x="7" y="14" width="4" height="4" fill="#64748b" />
      <rect x="4" y="17" width="4" height="4" fill="#475569" />
    </svg>
  )
}

export function RetroSystemDesignLogo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      shapeRendering="crispEdges"
      className={`retro-icon retro-sysdesign ${className}`}
      aria-label="Retro System Design Logo"
    >
      <rect x="2" y="5" width="6" height="4" fill="#a78bfa" />
      <rect x="16" y="5" width="6" height="4" fill="#a78bfa" />
      <rect x="9" y="15" width="6" height="5" fill="#c084fc" />
      <rect x="5" y="9" width="2" height="4" fill="#7c3aed" />
      <rect x="17" y="9" width="2" height="4" fill="#7c3aed" />
      <rect x="7" y="13" width="10" height="2" fill="#7c3aed" />
    </svg>
  )
}
