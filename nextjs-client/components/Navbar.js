'use client'

import { useState, useEffect } from 'react'

function AsalLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="21,2 39,11.5 39,30.5 21,40 3,30.5 3,11.5"
        fill="#FFB800"
        opacity="0.15"
        stroke="#FFB800"
        strokeWidth="1.5"
      />
      <polygon
        points="21,7 35,14.5 35,29.5 21,37 7,29.5 7,14.5"
        fill="#FFB800"
        opacity="0.25"
      />
      <text
        x="21"
        y="25"
        textAnchor="middle"
        fill="#FFB800"
        fontSize="10"
        fontWeight="900"
        fontFamily="Segoe UI, system-ui, sans-serif"
        letterSpacing="0.5"
      >
        ASAL
      </text>
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#results' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="navbar-asal w-100"
      style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none' }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100 gap-3">
          {/* Logo */}
          <a href="#home" className="logo-wrap" style={{ textDecoration: 'none' }}>
            <AsalLogo />
            <div className="logo-text-wrap">
              <span className="logo-name">ASAL</span>
              <span className="logo-sub">Technologies</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="d-none d-lg-flex align-items-center gap-1 flex-grow-1 justify-content-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          {/* Join Us + Hamburger */}
          <div className="d-flex align-items-center gap-2">
            <a href="#contact" className="btn-join nav-link d-none d-sm-inline-block">
              Join Us
            </a>
            <button
              className="navbar-toggler d-lg-none border-0 bg-transparent p-1"
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              <span
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: '#FFB800',
                  margin: '5px 0',
                  transition: 'all 0.3s',
                  transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: '#FFB800',
                  margin: '5px 0',
                  opacity: open ? 0 : 1,
                  transition: 'all 0.3s',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: '#FFB800',
                  margin: '5px 0',
                  transition: 'all 0.3s',
                  transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="navbar-collapse d-lg-none mt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link d-block py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-join nav-link d-inline-block mt-2"
              onClick={() => setOpen(false)}
            >
              Join Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
