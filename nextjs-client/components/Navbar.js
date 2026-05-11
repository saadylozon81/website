'use client'

import { useState } from 'react'

function AsalLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* outer ring segments */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <rect
          key={i}
          x="20" y="3"
          width="4" height="9"
          rx="2"
          fill="#FFB800"
          transform={`rotate(${deg} 22 22)`}
        />
      ))}
      {/* center circle */}
      <circle cx="22" cy="22" r="10" fill="#FFB800" />
      <circle cx="22" cy="22" r="7" fill="#fff" />
      <circle cx="22" cy="22" r="4" fill="#FFB800" />
    </svg>
  )
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#engagement' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar-asal w-100">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo */}
          <a href="#home" className="logo-wrap">
            <AsalLogo />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span className="logo-name">ASAL</span>
              <span className="logo-sub">Technologies</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className={`nav-link${i === 0 ? ' active' : ''}`}>
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="d-flex align-items-center gap-2">
            <a href="#contact" className="btn-talk d-none d-sm-inline-flex">
              Let&apos;s Talk <i className="bi bi-arrow-right" />
            </a>
            <button
              className="d-lg-none border-0 bg-transparent p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ cursor: 'pointer' }}
            >
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display: 'block', width: 24, height: 2,
                  background: '#111827', margin: '5px 0',
                  transition: 'all 0.3s',
                  transform: open
                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                      : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="navbar-mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link d-block py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-talk d-inline-flex mt-3" onClick={() => setOpen(false)}>
              Let&apos;s Talk <i className="bi bi-arrow-right" />
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
