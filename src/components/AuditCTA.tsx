from 'react'
import { SectionLabel, IconCheck, GoldBtn, IconArrow, GOLD } from './UI'
import { AtlasLogoMark } from './Logo'

const CHECKS = [
'Full profile review — free, no strings attached',
'Specific, actionable findings (not generic advice)',
'Clear next steps whether you work with us or not',
]
const AuditCTA: React.FC = () => {
return (
<section
id="audit"
className="section-pad"
style={{ background: '#0a0a0a' }}
>
<div className="container-md">
<div className="cta-grid">
{/* Left: pitch — unchanged */}
<div style={{ paddingTop: '8px' }} className="reveal">
<SectionLabel>Free Audit</SectionLabel>
<h2
style={{
fontFamily: "'Barlow Condensed', sans-serif",
fontWeight: 700,
fontSize: 'clamp(30px, 4vw, 52px)',
textTransform: 'uppercase',
letterSpacing: '0.04em',
color: '#fff',
margin: '0 0 24px',
lineHeight: 1.1,
}}
>
Want to know what's{' '}
<span style={{ color: GOLD }}>costing you calls?</span>
</h2>
<p
style={{
color: '#555',
fontSize: '15px',

lineHeight: 1.8,
marginBottom: '40px',
fontFamily: "'Barlow', sans-serif",
}}
>
Fill out the form and we'll review your Google Business Profile —
for free. You'll find out exactly where your listing is losing you
business and what it would take to fix it. No fluff, no sales
pressure.
</p>
{CHECKS.map((t) => (
<div
key={t}
style={{
display: 'flex',
gap: '12px',
alignItems: 'flex-start',
marginBottom: '18px',
}}
>
<IconCheck />
<span
style={{
color: '#666',
fontSize: '14px',
lineHeight: 1.6,
fontFamily: "'Barlow', sans-serif",
}}
>
{t}
</span>
</div>
))}
<div style={{ marginTop: '48px', opacity: 0.15 }}>
<AtlasLogoMark size={64} />
</div>
</div>
{/* Right: CTA card */}
<div
className="reveal reveal-delay-2"
style={{
background: '#0f0f0f',
border: '1px solid #1e1e1e',
borderTop: `3px solid ${GOLD}`,

borderRadius: '4px',
padding: '40px',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
textAlign: 'center',
gap: '28px',
}}
>
<AtlasLogoMark size={52} />
<div>
<h3
style={{
fontFamily: "'Barlow Condensed', sans-serif",
fontWeight: 700,
color: '#fff',
fontSize: '24px',
margin: '0 0 12px',
textTransform: 'uppercase',
letterSpacing: '0.1em',
}}
>
Request My Free Audit
</h3>
<p
style={{
color: '#555',
fontSize: '14px',
lineHeight: 1.7,
fontFamily: "'Barlow', sans-serif",
maxWidth: '320px',
margin: '0 auto',
}}
>
Takes 2 minutes. We'll review your listing and follow up with
real findings — not a sales pitch.
</p>
</div>
<GoldBtn

style={{ fontSize: '13px', padding: '16px 36px' }}
>

Request My Free Audit <IconArrow />
</GoldBtn>
<p
style={{
color: '#333',
fontSize: '11px',
margin: 0,
lineHeight: 1.6,
fontFamily: "'Barlow', sans-serif",
}}
>
No obligation. Opens a short form in a new tab.
</p>
</div>
</div>
</div>
</section>
)
}
export default AuditCTA
