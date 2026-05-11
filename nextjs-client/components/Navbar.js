'use client'
import { useState } from 'react'

function AsalLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <rect key={i} x="20" y="2" width="4" height="10" rx="2"
          fill="#FFB800" transform={`rotate(${deg} 22 22)`} />
      ))}
      <circle cx="22" cy="22" r="11" fill="#FFB800" />
      <circle cx="22" cy="22" r="7.5" fill="#fff" />
      <circle cx="22" cy="22" r="4" fill="#FFB800" />
    </svg>
  )
}

const links = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Services',    href: '#services' },
  { label: 'Case Studies',href: '#engagement' },
  { label: 'Careers',     href: '#careers' },
  { label: 'Contact',     href: '#contact' },
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
            <div style={{ display:'flex', flexDirection:'column', gap: 1 }}>
              <span className="logo-name">ASAL</span>
              <span className="logo-sub">Technologies</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="d-none d-lg-flex align-items-center gap-0">
            {links.map((l, i) => (
              <a key={l.href} href={l.href}
                className={`nav-link-item${i === 0 ? ' active' : ''}`}>
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="d-flex align-items-center gap-2">
            <a href="#contact" className="btn-talk d-none d-sm-inline-flex">
              Let&apos;s Talk &nbsp;<i className="bi bi-arrow-right" />
            </a>

            <button
              className="d-lg-none border-0 bg-transparent p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ cursor:'pointer', lineHeight:0 }}
            >
              <svg width="22" height="18" viewBox="0 0 22 18">
                <rect y={open ? "7.5" : "0"}  width="22" height="2.5" rx="1.25" fill="#111827"
                  style={{ transition:'all .3s', transform: open ? 'rotate(45deg)' : 'none', transformOrigin:'center' }} />
                <rect y="7.5" width="22" height="2.5" rx="1.25" fill="#111827"
                  style={{ opacity: open ? 0 : 1, transition:'opacity .3s' }} />
                <rect y={open ? "7.5" : "15"} width="22" height="2.5" rx="1.25" fill="#111827"
                  style={{ transition:'all .3s', transform: open ? 'rotate(-45deg)' : 'none', transformOrigin:'center' }} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="navbar-mobile-menu">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link-item d-block py-2"
                onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-talk d-inline-flex mt-3"
              onClick={() => setOpen(false)}>
              Let&apos;s Talk &nbsp;<i className="bi bi-arrow-right" />
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
