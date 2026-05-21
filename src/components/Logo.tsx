import React from 'react'

const GOLD = '#c9972a'

// ─── Logo mark: the geometric mountain "A" ───────────────────────────────────
interface LogoMarkProps {
  size?: number
}

export const AtlasLogoMark: React.FC<LogoMarkProps> = ({ size = 48 }) => (
  <svg
    width={size}
    height={size * 0.85}
    viewBox="0 0 120 102"
    fill="none"
    aria-label="Atlas Visibility Logo Mark"
  >
    {/* Outer left leg */}
    <polygon points="0,102 28,102 60,8 46,8" fill={GOLD} />
    {/* Outer right leg */}
    <polygon points="120,102 92,102 60,8 74,8" fill={GOLD} />
    {/* Inner cutout triangle */}
    <polygon points="60,30 44,62 76,62" fill="#0a0a0a" />
    {/* Crossbar cutout left */}
    <polygon points="30,102 52,68 44,68 22,102" fill="#0a0a0a" />
    {/* Crossbar cutout right */}
    <polygon points="90,102 68,68 76,68 98,102" fill="#0a0a0a" />
    {/* Bottom gold pip */}
    <polygon points="60,72 52,88 68,88" fill={GOLD} />
  </svg>
)

// ─── Full centred wordmark (hero use) ────────────────────────────────────────
interface WordmarkProps {
  compact?: boolean
}

export const AtlasWordmark: React.FC<WordmarkProps> = ({ compact = false }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: compact ? '2px' : '4px',
    }}
  >
    <AtlasLogoMark size={compact ? 36 : 52} />
    <div
      style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontWeight: 700,
        letterSpacing: '0.25em',
        fontSize: compact ? '22px' : '32px',
        color: '#fff',
        lineHeight: 1,
        textTransform: 'uppercase',
      }}
    >
      ATLAS
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: compact ? '18px' : '28px',
          height: '1.5px',
          background: GOLD,
        }}
      />
      <span
        style={{
          fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontWeight: 500,
          letterSpacing: '0.3em',
          fontSize: compact ? '9px' : '12px',
          color: GOLD,
          textTransform: 'uppercase',
        }}
      >
        VISIBILITY CO.
      </span>
      <div
        style={{
          width: compact ? '18px' : '28px',
          height: '1.5px',
          background: GOLD,
        }}
      />
    </div>
  </div>
)

// ─── Horizontal inline nav logo ──────────────────────────────────────────────
export const NavLogo: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <AtlasLogoMark size={32} />
    <div>
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          letterSpacing: '0.2em',
          fontSize: '18px',
          color: '#fff',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        ATLAS
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <div style={{ width: '10px', height: '1px', background: GOLD }} />
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '8px',
            letterSpacing: '0.25em',
            color: GOLD,
            textTransform: 'uppercase',
          }}
        >
          VISIBILITY CO.
        </span>
        <div style={{ width: '10px', height: '1px', background: GOLD }} />
      </div>
    </div>
  </div>
)
