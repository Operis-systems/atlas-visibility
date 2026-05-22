import React from 'react'
import { SectionLabel, IconCheck, GoldBtn, IconArrow, GOLD } from './UI'
const DELIVERABLES = [
'Full Google Business Profile audit with scoring',
'Primary & secondary category optimization plan',
'Service area cleanup and coverage correction',
'Keyword-optimized business description (written for you)',
'Review generation strategy + response templates',
'Complete photo checklist by type and priority',
'Competitor positioning notes (top 3 local competitors)',
'30-day Google Posts content framework',
'Simple lead capture and call tracking recommendations',
]
const Offer: React.FC = () => {
return (
<section
id="Offer"
className="section-pad"
style={{ background: '#0a0a0a' }}
>
<div className="container-md">
<div
className="reveal"
style={{
border: '1px solid rgba(201,151,42,0.25)',
borderTop: `3px solid ${GOLD}`,
borderRadius: '4px',
background: '#0f0f0f',
overflow: 'hidden',
boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
}}
>
<div className="offer-grid">
{/* Left: pitch */}
<div
style={{
padding: 'clamp(40px, 5vw, 64px)',
borderRight: '1px solid #1a1a1a',
}}
>
<SectionLabel>The Service</SectionLabel>
<h2

style={{
fontFamily: "'Barlow Condensed', sans-serif",
fontWeight: 700,
fontSize: 'clamp(26px, 3.5vw, 42px)',
textTransform: 'uppercase',
letterSpacing: '0.04em',
color: '#fff',
margin: '0 0 8px',
lineHeight: 1.1,
}}
>
Google Business Profile
</h2>
<h2
style={{
fontFamily: "'Barlow Condensed', sans-serif",
fontWeight: 700,
fontSize: 'clamp(26px, 3.5vw, 42px)',
textTransform: 'uppercase',
letterSpacing: '0.04em',
color: GOLD,
margin: '0 0 24px',
lineHeight: 1.1,
}}
>
Revenue Setup
</h2>
<p
style={{
color: '#555',
fontSize: '14px',
lineHeight: 1.8,
marginBottom: '24px',
fontFamily: "'Barlow', sans-serif",
}}
>
A flat-rate, done-with-you optimization service for local contractors
who want more phone calls — without running a single ad. We go deep on
your Google profile, fix what's broken, strengthen what's weak, and
hand you a 30-day plan to keep building momentum.
</p>
<p
style={{
color: '#444',
fontSize: '13px',
lineHeight: 1.7,
marginBottom: '36px',

fontFamily: "'Barlow', sans-serif",
}}
>
This isn't a dashboard subscription. This is hands-on work that
positions your business to compete and win in local search —
documented, deliverable, and ready to act on.
</p>
<GoldBtn >
Get Your Free Audit First <IconArrow />
</GoldBtn>
</div>
{/* Right: deliverables */}
<div style={{ padding: 'clamp(40px, 5vw, 64px)' }}>
<div
style={{
fontFamily: "'Barlow Condensed', sans-serif",
fontSize: '10px',
letterSpacing: '0.22em',
color: GOLD,
textTransform: 'uppercase',
marginBottom: '24px',
fontWeight: 600,
}}
>
— What's Included —
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
{DELIVERABLES.map((d) => (
<div
key={d}
style={{
display: 'flex',
alignItems: 'flex-start',
gap: '12px',
}}
>
<IconCheck />
<span
style={{
color: '#888',
fontSize: '14px',
lineHeight: 1.5,
fontFamily: "'Barlow', sans-serif",
}}
>
{d}

</span>
</div>
))}
</div>
</div>
</div>
</div>
</div>
</section>
)
}
export default Offer
