import React, { useState } from 'react'
import { SectionLabel, GOLD } from './UI'

const STEPS = [
  {
    n: '01',
    title: 'Free Audit',
    desc: "We review your Google Business Profile, local rankings, competitor positioning, and the specific gaps costing you calls. No charge, no obligation.",
  },
  {
    n: '02',
    title: 'Visibility Plan',
    desc: "You receive a clear breakdown of exactly what needs to change, what it looks like after, and how each fix connects to more calls.",
  },
  {
    n: '03',
    title: 'Profile Optimization',
    desc: "We execute the full optimization: categories, descriptions, service areas, photo checklist, review strategy, and competitive positioning.",
  },
  {
    n: '04',
    title: '30-Day Plan',
    desc: "You walk away with a ready-to-use monthly posting framework and recommendations to keep building trust and visibility over time.",
  },
]

interface StepCardProps {
  n: string
  title: string
  desc: string
  isFirst: boolean
}

const StepCard: React.FC<StepCardProps> = ({ n, title, desc, isFirst }) => {
  const [hovered, setHovered] = useState(false)
  const active = hovered || isFirst

  return (
    <div
      style={{
        background: '#0a0a0a',
        padding: '40px 28px',
        borderTop: `3px solid ${active ? GOLD : 'transparent'}`,
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: '42px',
          color: 'rgba(201,151,42,0.15)',
          lineHeight: 1,
          letterSpacing: '0.02em',
          marginBottom: '20px',
        }}
      >
        {n}
      </div>
      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          color: '#fff',
          fontSize: '18px',
          margin: '0 0 14px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: '#555',
          fontSize: '13px',
          lineHeight: 1.75,
          margin: 0,
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {desc}
      </p>
    </div>
  )
}

const Process: React.FC = () => {
  return (
    <section
      id="Process"
      className="section-pad"
      style={{ background: '#0a0a0a' }}
    >
      <div className="container-md">
        <div
          className="reveal"
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <SectionLabel>How It Works</SectionLabel>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 52px)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#fff',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Simple. Fast.{' '}
            <span style={{ color: GOLD }}>Built for busy owners.</span>
          </h2>
        </div>

        <div className="process-grid reveal">
          {STEPS.map((s, i) => (
            <StepCard key={s.n} {...s} isFirst={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
