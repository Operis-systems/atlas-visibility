import React from 'react'
import { SectionLabel, GOLD } from './UI'

const PROBLEMS = [
  { icon: '📋', text: 'Incomplete categories hiding you from relevant searches' },
  { icon: '📷', text: 'No recent photos — so Google and customers trust you less' },
  { icon: '⭐', text: 'Unanswered reviews that signal an unresponsive business' },
  { icon: '📍', text: 'Wrong service areas confusing Google\'s local algorithm' },
  { icon: '🔍', text: 'Weak descriptions with none of the keywords your customers search' },
  { icon: '🏆', text: 'Competitors with optimized profiles outranking you daily' },
]

const Problem: React.FC = () => {
  return (
    <section
      id="Problem"
      className="section-pad"
      style={{ background: '#0a0a0a' }}
    >
      <div className="container">
        <div className="two-col">
          {/* Left: copy */}
          <div className="reveal">
            <SectionLabel>The Real Problem</SectionLabel>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(30px, 4vw, 52px)',
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                margin: '0 0 24px',
              }}
            >
              Your business is good.
              <br />
              <span style={{ color: GOLD }}>
                Your Google listing isn't telling that story.
              </span>
            </h2>
            <p
              style={{
                color: '#555',
                fontSize: '15px',
                lineHeight: 1.8,
                marginBottom: '20px',
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              Every day, homeowners in your city search for exactly what you offer.
              They find three or four businesses on Google Maps — and they call whoever
              looks most trustworthy. That's it. That's the whole game.
            </p>
            <p
              style={{
                color: '#555',
                fontSize: '15px',
                lineHeight: 1.8,
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              If your listing is missing photos, has generic categories, no review
              strategy, and a thin description — you're handing those calls to your
              competitors. Not because they're better. Just because their profile is.
            </p>
          </div>

          {/* Right: problem cards */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {PROBLEMS.map((p, i) => (
              <div
                key={i}
                className="reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    background: '#0f0f0f',
                    border: '1px solid #1e1e1e',
                    borderLeft: `3px solid rgba(201,151,42,0.5)`,
                    borderRadius: '3px',
                    padding: '16px 18px',
                  }}
                >
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{p.icon}</span>
                  <span
                    style={{
                      color: '#777',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
                    {p.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
