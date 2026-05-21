import React from 'react'
import { SectionLabel, GOLD } from './UI'

const TRADES = [
  'Plumbers',
  'HVAC Companies',
  'Roofers',
  'Electricians',
  'Landscapers',
  'Pressure Washers',
  'Concrete Contractors',
  'Junk Removal',
  'Towing Companies',
  'General Contractors',
  'Painters',
  'Tree Services',
]

const WhoItsFor: React.FC = () => {
  return (
    <section
      id="Who-Its-For"
      className="section-pad"
      style={{ background: '#0f0f0f' }}
    >
      <div className="container">
        <div className="two-col">
          {/* Left copy */}
          <div className="reveal">
            <SectionLabel>Who It's For</SectionLabel>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: '#fff',
                margin: '0 0 24px',
                lineHeight: 1.1,
              }}
            >
              Built for businesses that run on{' '}
              <span style={{ color: GOLD }}>
                phone calls and quote requests.
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
              If your business lives and dies by the phone ringing, your Google
              Business Profile is your most valuable — and most often neglected —
              marketing asset. It's free to use, and it's where most of your local
              customers decide whether to call you or your competitor.
            </p>
            <p
              style={{
                color: '#555',
                fontSize: '15px',
                lineHeight: 1.8,
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              We work specifically with trade and service businesses: the kind of
              companies where one extra call per day is worth thousands per month. You
              don't need a marketing department. You need a profile that does the
              selling for you.
            </p>
          </div>

          {/* Right: trade tags */}
          <div className="trade-tags reveal reveal-delay-2">
            {TRADES.map((t) => (
              <div
                key={t}
                style={{
                  padding: '9px 16px',
                  background: 'rgba(201,151,42,0.07)',
                  border: `1px solid rgba(201,151,42,0.22)`,
                  borderRadius: '2px',
                  color: GOLD,
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    'rgba(201,151,42,0.14)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    'rgba(201,151,42,0.07)')
                }
              >
                {t}
              </div>
            ))}
            <div
              style={{
                padding: '9px 16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px dashed #2a2a2a',
                borderRadius: '2px',
                color: '#444',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              + More Local Services
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoItsFor
