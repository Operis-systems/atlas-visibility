import React, { useState, useEffect } from 'react'
import { NavLogo } from './Logo'
import { GoldBtn, GOLD } from './UI'

const NAV_LINKS = ['Problem', 'What We Fix', 'Offer', 'Process', 'FAQ']

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 860) setOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(201,151,42,0.18)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 28px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#hero" style={{ textDecoration: 'none' }} aria-label="Atlas Visibility Home">
          <NavLogo />
        </a>

        {/* Desktop nav */}
        <div className="desk-nav">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.replace(/\s+/g, '-')}`}
              className="nav-link"
            >
              {l}
            </a>
          ))}
          <GoldBtn href="#audit">Free Audit</GoldBtn>
        </div>

        {/* Hamburger */}
        <button
          className="mob-btn"
          onClick={() => setOpen((v) => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            padding: '4px',
            lineHeight: 0,
          }}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mob-menu">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
              style={{
                color: '#bbb',
                fontSize: '13px',
                textDecoration: 'none',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              {l}
            </a>
          ))}
          <GoldBtn
            href="#audit"
            onClick={() => setOpen(false)}
            style={{ justifyContent: 'center' }}
          >
            Request Free Audit
          </GoldBtn>
        </div>
      )}
    </nav>
  )
}

export default Nav
