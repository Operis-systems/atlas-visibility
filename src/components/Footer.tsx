import React from 'react'
import { NavLogo } from './Logo'
import { GoldBtn, GOLD } from './UI'
const Footer: React.FC = () => {
return (
<footer
style={{
background: '#0a0a0a',
borderTop: '1px solid #151515',
padding: '48px 28px',
}}
>
<div
style={{
maxWidth: '1240px',
margin: '0 auto',
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
flexWrap: 'wrap',
gap: '24px',
}}
>
<NavLogo />
<div style={{ textAlign: 'center' }}>
<p
style={{
color: '#2a2a2a',
fontSize: '11px',
margin: '0 0 4px',
letterSpacing: '0.1em',
textTransform: 'uppercase',
fontFamily: "'Barlow Condensed', sans-serif",
}}
>
Higher Quality Leads. Better Sales. Real Growth.
</p>
<p
style={{
color: '#252525',
fontSize: '11px',
margin: 0,

fontFamily: "'Barlow', sans-serif",
}}
>
© {new Date().getFullYear()} Atlas Visibility Co. All rights reserved.
</p>
</div>
<GoldBtn outline >
Free Audit →
</GoldBtn>
</div>
</footer>
)
}
export default Footer
