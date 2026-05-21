import React, { useState, useRef, ChangeEvent } from 'react'
import { SectionLabel, IconCheck, GOLD, GOLD_DARK } from './UI'
import { AtlasLogoMark } from './Logo'

// ─── Tally form configuration ────────────────────────────────────────────────
// Form URL: https://tally.so/r/D4ZKjb
// The hidden iframe absorbs Tally's redirect so the page never navigates away.
// The hidden HTML form POSTs to Tally with standard field names.
// Tally accepts any field names — they appear as column headers in your dashboard.
const TALLY_FORM_URL = 'https://tally.so/r/D4ZKjb'
const TALLY_IFRAME_NAME = 'tally-submission-sink'

interface FormState {
  name: string
  business: string
  phone: string
  email: string
  website: string
  message: string
}

const INITIAL: FormState = {
  name: '',
  business: '',
  phone: '',
  email: '',
  website: '',
  message: '',
}

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  background: '#111',
  border: '1px solid #222',
  borderRadius: '3px',
  padding: '13px 14px',
  color: '#ddd',
  fontSize: '13px',
  outline: 'none',
  fontFamily: "'Barlow', sans-serif",
  transition: 'border-color 0.2s',
}

const CHECKS = [
  'Full profile review — free, no strings attached',
  'Specific, actionable findings (not generic advice)',
  'Clear next steps whether you work with us or not',
]

const AuditCTA: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [sent, setSent] = useState(false)
  const hiddenFormRef = useRef<HTMLFormElement>(null)

  const handle =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
    }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = GOLD
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#222'
  }

  const handleSubmit = () => {
    // Submit the hidden form to Tally (response absorbed by the named iframe)
    if (hiddenFormRef.current) {
      hiddenFormRef.current.submit()
    }
    // Immediately show the success screen — no waiting, no redirect
    setSent(true)
  }

  return (
    <section
      id="audit"
      className="section-pad"
      style={{ background: '#0a0a0a' }}
    >
      {/*
        ── TALLY SUBMISSION MECHANISM ──────────────────────────────────────────
        Two invisible elements handle the Tally submission:

        1. <iframe name="tally-submission-sink">
           Tally's redirect response loads into this iframe, not the main page.
           display:none keeps it fully invisible. The browser's popout-blocker
           is satisfied because the form target matches a named frame.

        2. <form ref={hiddenFormRef} target="tally-submission-sink">
           Standard HTML form that mirrors the visible form's field values.
           Submitted programmatically in handleSubmit() above.
           The "name" attributes on its inputs become column headers in Tally.
        ────────────────────────────────────────────────────────────────────── */}
      <iframe
        name={TALLY_IFRAME_NAME}
        title="Form submission target"
        style={{ display: 'none' }}
        aria-hidden="true"
      />
      <form
        ref={hiddenFormRef}
        action={TALLY_FORM_URL}
        method="POST"
        target={TALLY_IFRAME_NAME}
        style={{ display: 'none' }}
        aria-hidden="true"
      >
        <input type="text" name="Name"                     value={form.name}     readOnly />
        <input type="text" name="Business Name"            value={form.business} readOnly />
        <input type="tel"  name="Phone Number"             value={form.phone}    readOnly />
        <input type="email" name="Email Address"           value={form.email}    readOnly />
        <input type="text" name="Website or Google Listing" value={form.website} readOnly />
        <textarea          name="Message"                  value={form.message}  readOnly />
      </form>

      {/* ── VISIBLE SECTION — unchanged from original ── */}
      <div className="container-md">
        <div className="cta-grid">
          {/* Left: pitch */}
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

          {/* Right: form card */}
          <div
            className="reveal reveal-delay-2"
            style={{
              background: '#0f0f0f',
              border: '1px solid #1e1e1e',
              borderTop: `3px solid ${GOLD}`,
              borderRadius: '4px',
              padding: '40px',
            }}
          >
            {sent ? (
              /* ── Success state — identical to original ── */
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <AtlasLogoMark size={56} />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: '24px',
                    margin: '20px 0 12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Request Received
                </h3>
                <p
                  style={{
                    color: '#555',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  We'll review your listing and reach out within 1 business day
                  with what we find.
                </p>
              </div>
            ) : (
              /* ── Input state — identical to original ── */
              <>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: '20px',
                    margin: '0 0 28px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Request My Free Audit
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="form-row">
                    <input
                      style={INPUT_STYLE}
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handle('name')}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <input
                      style={INPUT_STYLE}
                      placeholder="Business Name"
                      value={form.business}
                      onChange={handle('business')}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-row">
                    <input
                      style={INPUT_STYLE}
                      placeholder="Phone Number"
                      type="tel"
                      value={form.phone}
                      onChange={handle('phone')}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <input
                      style={INPUT_STYLE}
                      placeholder="Email Address"
                      type="email"
                      value={form.email}
                      onChange={handle('email')}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <input
                    style={INPUT_STYLE}
                    placeholder="Website or Google Listing Link"
                    value={form.website}
                    onChange={handle('website')}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <textarea
                    style={{ ...INPUT_STYLE, resize: 'vertical', minHeight: '96px' }}
                    placeholder="Anything specific you want us to look at?"
                    value={form.message}
                    onChange={handle('message')}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <button
                    onClick={handleSubmit}
                    style={{
                      background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
                      color: '#0a0a0a',
                      padding: '15px',
                      borderRadius: '3px',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      letterSpacing: '0.18em',
                      width: '100%',
                      textTransform: 'uppercase',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      boxShadow: '0 6px 20px rgba(201,151,42,0.2)',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 32px rgba(201,151,42,0.38)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(201,151,42,0.2)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    Request My Free Audit →
                  </button>
                  <p
                    style={{
                      color: '#333',
                      fontSize: '11px',
                      textAlign: 'center',
                      margin: 0,
                      lineHeight: 1.6,
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
                    No obligation. We review your listing and follow up with real
                    findings — not a sales pitch.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuditCTA
