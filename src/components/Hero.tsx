import React from 'react'
import { AtlasWordmark } from './Logo'
import { GoldBtn, IconArrow, GOLD } from './UI'

const STATS: [string, string][] = [
  ['76%', 'of local searches result in a call within 24 hrs'],
  ['4×', 'more calls from complete GBP listings'],
  ['Free', "Google's most powerful local lead tool"],
]

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '70px',
      }}
    >
      {/* Gold radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(201,151,42,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Diagonal accent lines */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${i * 20}%`,
              width: '1px',
              background: `linear-gradient(180deg, transparent, ${GOLD}, transparent)`,
              transform: 'skewX(-15deg)',
            }}
          />
        ))}
      </div>

      <div
        className="container"
        style={{
          padding: '80px 28px',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        {/* Wordmark */}
        <div className="animate-fade-in" style={{ marginBottom: '56px' }}>
          <AtlasWordmark />
        </div>

        {/* Tagline divider */}
        <div
          className="animate-fade-up-delay-1"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '36px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(201,151,42,0.3))',
            }}
          />
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: GOLD,
              textTransform: 'uppercase',
            }}
          >
            Higher Quality Leads. Better Sales. Real Growth.
          </span>
          <div
            style={{
              width: '80px',
              height: '1px',
              background: 'linear-gradient(90deg, rgba(201,151,42,0.3), transparent)',
            }}
          />
        </div>

        {/* Headline */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1
            className="animate-fade-up-delay-2"
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontSize: 'clamp(44px, 8vw, 92px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.0,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: '0 0 24px',
            }}
          >
            More Calls From Google.{' '}
            <span style={{ color: GOLD, display: 'block' }}>No Ads Required.</span>
          </h1>

          <p
            className="animate-fade-up-delay-3"
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#777',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto 48px',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            Atlas Visibility Co. helps local contractors and service businesses look
            more trustworthy on Google, show up in more local searches, and convert
            more clicks into phone calls — through a fully optimized Google Business
            Profile.
          </p>

          {/* Stats */}
          <div className="stats-row animate-fade-up-delay-4">
            {STATS.map(([n, t]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(28px, 5vw, 44px)',
                    fontWeight: 700,
                    color: GOLD,
                    lineHeight: 1,
                    letterSpacing: '0.04em',
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#555',
                    maxWidth: '120px',
                    lineHeight: 1.5,
                    marginTop: '4px',
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  {t}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-up-delay-5"
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <GoldBtn href="#audit">
              Request a Free Visibility Audit <IconArrow />
            </GoldBtn>
            <GoldBtn href="#What-We-Fix" outline>
              See What We Fix
            </GoldBtn>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(transparent, #0a0a0a)',
        }}
      />
    </section>
  )
}

export default Hero
