import React, { useState } from 'react'
import { SectionLabel, GOLD } from './UI'

const FIXES = [
  {
    title: 'Business Profile Categories',
    desc: 'Primary and secondary categories chosen to put your listing in front of the right local searches — not just the obvious ones.',
    icon: '🏷️',
  },
  {
    title: 'Service Descriptions',
    desc: 'Every service written with local search intent in mind. Clear, keyword-rich, and customer-facing.',
    icon: '📝',
  },
  {
    title: 'Photos & Trust Signals',
    desc: 'A complete photo checklist: team, equipment, before/after. Listings with real photos get 42% more call requests.',
    icon: '📸',
  },
  {
    title: 'Reviews & Response Strategy',
    desc: 'A system to generate more reviews plus response templates that show Google — and customers — you\'re engaged.',
    icon: '⭐',
  },
  {
    title: 'Local Keyword Positioning',
    desc: 'We identify the exact terms your customers use and make sure your profile speaks that language throughout.',
    icon: '🔍',
  },
  {
    title: 'Competitor Comparison',
    desc: 'We audit your top local competitors and show you exactly where you\'re behind — and how to close the gap fast.',
    icon: '📊',
  },
  {
    title: 'Call Tracking Setup Guide',
    desc: 'Guidance on tracking which searches generate revenue — not just impressions or traffic you can\'t act on.',
    icon: '📞',
  },
  {
    title: '30-Day Posting Framework',
    desc: 'A ready-to-use content plan for Google Posts: promotions, project highlights, and trust-building updates.',
    icon: '📅',
  },
]

interface FixCardProps {
  icon: string
  title: string
  desc: string
  delay: number
}

const FixCard: React.FC<FixCardProps> = ({ icon, title, desc, delay }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        style={{
          background: hovered ? '#111111' : '#0a0a0a',
          padding: '32px 28px',
          border: `1px solid ${hovered ? 'rgba(201,151,42,0.3)' : '#1a1a1a'}`,
          cursor: 'default',
          transition: 'background 0.2s, border-color 0.2s',
          height: '100%',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ fontSize: '26px', marginBottom: '16px' }}>{icon}</div>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            color: '#fff',
            fontSize: '17px',
            margin: '0 0 10px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: '#555',
            fontSize: '13px',
            lineHeight: 1.7,
            margin: 0,
            fontFamily: "'Barlow', sans-serif",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

const WhatWeFix: React.FC = () => {
  return (
    <section
      id="What-We-Fix"
      className="section-pad"
      style={{ background: '#0f0f0f' }}
    >
      <div className="container">
        <div
          className="reveal"
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <SectionLabel>What We Fix</SectionLabel>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(30px, 4vw, 54px)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#fff',
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}
          >
            Every piece of your Google presence —{' '}
            <span style={{ color: GOLD }}>optimized.</span>
          </h2>
          <p
            style={{
              color: '#555',
              fontSize: '15px',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            Most businesses have 5–8 fixable problems hiding in their Google
            Business Profile. Here's what we address in every engagement.
          </p>
        </div>

        <div className="fix-grid">
          {FIXES.map((f, i) => (
            <FixCard
              key={f.title}
              {...f}
              delay={Math.min(i * 0.06, 0.3)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeFix
