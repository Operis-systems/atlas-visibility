import React, { useState } from 'react'
import { SectionLabel, GOLD } from './UI'

const FAQS = [
  {
    q: 'Do I need to run ads?',
    a: 'No. This service is specifically for businesses who want more calls from organic Google search — not paid ads. Your Google Business Profile is a free tool, and when it\'s optimized properly, it can outperform paid campaigns for local searches.',
  },
  {
    q: 'How fast can this help?',
    a: 'Many clients see improvements in profile engagement and call volume within 2–4 weeks of optimization. Google Business Profile changes tend to take effect faster than traditional SEO. The review strategy and posting framework build momentum over time.',
  },
  {
    q: 'Do you work with new businesses?',
    a: "Yes. If you have a Google Business Profile — even a brand new one — we can help you build it out the right way from the start. In some cases, starting fresh with a fully optimized profile is actually an advantage.",
  },
  {
    q: 'Is this SEO?',
    a: "It's local SEO — specifically Google Business Profile optimization. This is different from website SEO. We're focused on improving your visibility and conversion rate on Google Maps and the local pack, which is where most local service customers search.",
  },
  {
    q: 'What do you need from me?',
    a: "Access to your Google Business Profile, some basic info about your services and service area, and a few photos if you have them. The heavy lifting is on our end. Most clients spend less than 30 minutes providing information.",
  },
]

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="FAQ"
      className="section-pad"
      style={{ background: '#0f0f0f' }}
    >
      <div className="container-sm">
        <div
          className="reveal"
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 48px)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#fff',
              margin: 0,
            }}
          >
            Common Questions
          </h2>
        </div>

        <div className="reveal">
          {FAQS.map((f, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid #1a1a1a' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '24px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '16px',
                }}
                aria-expanded={open === i}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    color: open === i ? GOLD : '#ccc',
                    fontSize: '17px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    transition: 'color 0.2s',
                  }}
                >
                  {f.q}
                </span>
                <span
                  style={{
                    color: GOLD,
                    fontSize: '22px',
                    flexShrink: 0,
                    lineHeight: 1,
                    transition: 'transform 0.25s ease',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                    display: 'block',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{ paddingBottom: '24px' }}
                  className="slide-down"
                >
                  <p
                    style={{
                      color: '#555',
                      fontSize: '14px',
                      lineHeight: 1.85,
                      margin: 0,
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
