import React, { useEffect, ReactNode, CSSProperties } from 'react'
export const GOLD = '#c9972a'
export const GOLD_DARK = '#a07820'
// ─── Section label with flanking lines ──────────────────────────────────────
interface SectionLabelProps {
children: ReactNode
}
export const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => (
<div
style={{
display: 'flex',
alignItems: 'center',
gap: '10px',
marginBottom: '14px',
}}
>
<div style={{ width: '28px', height: '1.5px', background: GOLD }} />
<span
style={{
fontFamily: "'Barlow Condensed', sans-serif",
fontSize: '11px',
letterSpacing: '0.22em',
color: GOLD,
textTransform: 'uppercase',
fontWeight: 600,
}}
>
{children}
</span>
<div style={{ width: '28px', height: '1.5px', background: GOLD }} />
</div>
)
// ─── Gold CTA button — triggers Tally popup ──────────────────────────────────
// All visual styles are identical to the previous <a> version.
// data-tally-open triggers the Tally popup; no href or navigation needed.
interface GoldBtnProps {
children: ReactNode
outline?: boolean
style?: CSSProperties
// kept for API compatibility — unused now that all CTAs open the Tally popup
href?: string

target?: string
rel?: string
onClick?: () => void
}
export const GoldBtn: React.FC<GoldBtnProps> = ({
children,
outline = false,
style = {},
onClick,
}) => {
const base: CSSProperties = {
display: 'inline-flex',
alignItems: 'center',
gap: '8px',
padding: '14px 28px',
borderRadius: '3px',
fontSize: '12px',
fontWeight: 700,
letterSpacing: '0.18em',
textDecoration: 'none',
textTransform: 'uppercase',
fontFamily: "'Barlow Condensed', sans-serif",
transition: 'all 0.2s ease',
cursor: 'pointer',
border: 'none',
}
const variant: CSSProperties = outline
? {
border: `1.5px solid ${GOLD}`,
color: GOLD,
background: 'transparent',
}
: {
background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
color: '#0a0a0a',
boxShadow: '0 6px 24px rgba(201,151,42,0.28)',
}
return (
<button
data-tally-open="D4ZKjb"
data-tally-emoji-text=" "
data-tally-emoji-animation="wave"
style={{ ...base, ...variant, ...style }}
onClick={onClick}
>

{children}
</button>
)
}
// ─── Icons ───────────────────────────────────────────────────────────────────
export const IconCheck: React.FC = () => (
<svg
width="18"
height="18"
viewBox="0 0 20 20"
fill="none"
style={{ flexShrink: 0, marginTop: '2px' }}
>
<circle cx="10" cy="10" r="10" fill={GOLD} fillOpacity=".12" />
<path
d="M6 10.5l3 3 5-6"
stroke={GOLD}
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
)
export const IconArrow: React.FC = () => (
<svg width="15" height="15" viewBox="0 0 24 24" fill="none">
<path
d="M5 12h14M12 5l7 7-7 7"
stroke="currentColor"
strokeWidth="2.2"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
)
// ─── Scroll reveal hook ──────────────────────────────────────────────────────
export function useReveal() {
useEffect(() => {
const els = document.querySelectorAll<HTMLElement>('.reveal')
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('visible')
}

})
},
{ threshold: 0.12 }
)
els.forEach((el) => observer.observe(el))
return () => observer.disconnect()
}, [])
}
