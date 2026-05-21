import { useState, useEffect } from "react";

// ─── Brand tokens (matched to logo) ────────────────────────────────────────
// Black:   #0a0a0a / #0f0f0f / #141414
// Gold:    #c9972a (primary), #e8b84b (highlight), #a07820 (shadow)
// White:   #ffffff / #e8e8e8
// Gray:    #888 / #555 / #333

const G = "#c9972a";   // gold primary
const GL = "#e8b84b";  // gold light
const GD = "#a07820";  // gold dark

// ─── Atlas "A" Logo Mark (SVG recreation of the geometric mountain A) ───────
const AtlasLogoMark = ({ size = 48 }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 120 102" fill="none">
    {/* Outer left leg */}
    <polygon points="0,102 28,102 60,8 46,8" fill={G} />
    {/* Outer right leg */}
    <polygon points="120,102 92,102 60,8 74,8" fill={G} />
    {/* Inner cutout / white space triangle */}
    <polygon points="60,30 44,62 76,62" fill="#0a0a0a" />
    {/* Crossbar left */}
    <polygon points="30,102 52,68 44,68 22,102" fill="#0a0a0a" />
    {/* Crossbar right */}
    <polygon points="90,102 68,68 76,68 98,102" fill="#0a0a0a" />
    {/* Bottom center triangle (gold pip) */}
    <polygon points="60,72 52,88 68,88" fill={G} />
  </svg>
);

// Full wordmark block matching the logo layout
const AtlasWordmark = ({ compact = false }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: compact ? "2px" : "4px" }}>
    <AtlasLogoMark size={compact ? 36 : 52} />
    <div style={{
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      fontWeight: 700,
      letterSpacing: "0.25em",
      fontSize: compact ? "22px" : "32px",
      color: "#fff",
      lineHeight: 1,
      textTransform: "uppercase",
    }}>
      ATLAS
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: compact ? "18px" : "28px", height: "1.5px", background: G }} />
      <span style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontWeight: 500,
        letterSpacing: "0.3em",
        fontSize: compact ? "9px" : "12px",
        color: G,
        textTransform: "uppercase",
      }}>
        VISIBILITY CO.
      </span>
      <div style={{ width: compact ? "18px" : "28px", height: "1.5px", background: G }} />
    </div>
  </div>
);

// Inline horizontal nav logo
const NavLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <AtlasLogoMark size={32} />
    <div>
      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        letterSpacing: "0.2em", fontSize: "18px", color: "#fff",
        lineHeight: 1, textTransform: "uppercase",
      }}>ATLAS</div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <div style={{ width: "10px", height: "1px", background: G }} />
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "8px", letterSpacing: "0.25em", color: G, textTransform: "uppercase" }}>VISIBILITY CO.</span>
        <div style={{ width: "10px", height: "1px", background: G }} />
      </div>
    </div>
  </div>
);

// ─── Shared UI primitives ───────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
    <div style={{ width: "28px", height: "1.5px", background: G }} />
    <span style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: "11px", letterSpacing: "0.22em",
      color: G, textTransform: "uppercase", fontWeight: 600,
    }}>{children}</span>
    <div style={{ width: "28px", height: "1.5px", background: G }} />
  </div>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
    <circle cx="10" cy="10" r="10" fill={G} fillOpacity=".12" />
    <path d="M6 10.5l3 3 5-6" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoldBtn = ({ href, children, outline = false, style = {} }) => (
  <a href={href} style={{
    display: "inline-flex", alignItems: "center", gap: "8px",
    padding: "14px 28px", borderRadius: "3px",
    fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em",
    textDecoration: "none", textTransform: "uppercase",
    fontFamily: "'Barlow Condensed', sans-serif",
    transition: "all 0.2s",
    ...(outline ? {
      border: `1.5px solid ${G}`, color: G,
      background: "transparent",
    } : {
      background: `linear-gradient(135deg, ${G}, ${GD})`,
      color: "#0a0a0a",
      boxShadow: `0 6px 24px rgba(201,151,42,0.28)`,
    }),
    ...style,
  }}>
    {children}
  </a>
);

// ─── NAV ────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Problem", "What We Fix", "Offer", "Process", "FAQ"];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
      borderBottom: scrolled ? `1px solid rgba(201,151,42,0.18)` : "1px solid transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <NavLogo />

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desk-nav">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.replace(/\s+/g, "-")}`}
              style={{ color: "#666", fontSize: "11px", textDecoration: "none", letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = G}
              onMouseLeave={e => e.target.style.color = "#666"}>
              {l}
            </a>
          ))}
          <GoldBtn href="#audit">Free Audit</GoldBtn>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="mob-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#fff" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open
              ? <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              : <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "#0f0f0f", borderTop: `1px solid rgba(201,151,42,0.2)`, padding: "24px 28px", display: "flex", flexDirection: "column", gap: "22px" }} className="mob-menu">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.replace(/\s+/g, "-")}`} onClick={() => setOpen(false)}
              style={{ color: "#bbb", fontSize: "13px", textDecoration: "none", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>
              {l}
            </a>
          ))}
          <GoldBtn href="#audit" style={{ textAlign: "center", justifyContent: "center" }}>Request Free Audit</GoldBtn>
        </div>
      )}

      <style>{`
        @media(max-width:800px){.desk-nav{display:none!important}.mob-btn{display:block!important}}
      `}</style>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      paddingTop: "70px",
    }}>
      {/* Subtle gold radial */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", borderRadius: "50%", background: `radial-gradient(circle, rgba(201,151,42,0.06) 0%, transparent 65%)`, pointerEvents: "none" }} />

      {/* Thin diagonal accent lines */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.04, pointerEvents: "none" }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ position: "absolute", top: 0, bottom: 0, left: `${i * 20}%`, width: "1px", background: `linear-gradient(180deg, transparent, ${G}, transparent)`, transform: "skewX(-15deg)" }} />
        ))}
      </div>

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 28px", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Centered logo mark in hero */}
        <div style={{ marginBottom: "56px" }}>
          <AtlasWordmark />
        </div>

        {/* Gold em-dash divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,151,42,0.3))" }} />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>
            Higher Quality Leads. Better Sales. Real Growth.
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(201,151,42,0.3), transparent)" }} />
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
            fontSize: "clamp(44px, 8vw, 92px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.0,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            margin: "0 0 24px",
          }}>
            More Calls From Google.{" "}
            <span style={{ color: G, display: "block" }}>No Ads Required.</span>
          </h1>

          <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "#777", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 48px", fontFamily: "'Barlow', sans-serif" }}>
            Atlas Visibility Co. helps local contractors and service businesses look more trustworthy on Google, show up in more local searches, and convert more clicks into phone calls — through a fully optimized Google Business Profile.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px,5vw,64px)", flexWrap: "wrap", marginBottom: "52px", padding: "28px", border: "1px solid rgba(201,151,42,0.15)", borderRadius: "4px", background: "rgba(201,151,42,0.03)" }}>
            {[["76%", "of local searches result in a call within 24 hrs"], ["4×", "more calls from complete GBP listings"], ["Free", "Google's most powerful local lead tool"]].map(([n, t]) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px,5vw,44px)", fontWeight: 700, color: G, lineHeight: 1, letterSpacing: "0.04em" }}>{n}</div>
                <div style={{ fontSize: "11px", color: "#555", maxWidth: "120px", lineHeight: 1.5, marginTop: "4px", fontFamily: "'Barlow', sans-serif" }}>{t}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <GoldBtn href="#audit">Request a Free Visibility Audit <IconArrow /></GoldBtn>
            <GoldBtn href="#What-We-Fix" outline>See What We Fix</GoldBtn>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(transparent, #0a0a0a)" }} />
    </section>
  );
}

// ─── PROBLEM ─────────────────────────────────────────────────────────────────
function Problem() {
  const problems = [
    { icon: "📋", text: "Incomplete categories hiding you from relevant searches" },
    { icon: "📷", text: "No recent photos — so Google and customers trust you less" },
    { icon: "⭐", text: "Unanswered reviews that signal an unresponsive business" },
    { icon: "📍", text: "Wrong service areas confusing Google's local algorithm" },
    { icon: "🔍", text: "Weak descriptions with none of the keywords your customers search" },
    { icon: "🏆", text: "Competitors with optimized profiles outranking you daily" },
  ];

  return (
    <section id="Problem" style={{ background: "#0a0a0a", padding: "100px 28px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="two-col">
          <div>
            <SectionLabel>The Real Problem</SectionLabel>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "clamp(30px,4vw,52px)", color: "#fff",
              lineHeight: 1.1, letterSpacing: "0.03em", textTransform: "uppercase",
              margin: "0 0 24px",
            }}>
              Your business is good.<br />
              <span style={{ color: G }}>Your Google listing isn't telling that story.</span>
            </h2>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px", fontFamily: "'Barlow', sans-serif" }}>
              Every day, homeowners in your city search for exactly what you offer. They find three or four businesses on Google Maps — and they call whoever looks most trustworthy. That's it. That's the whole game.
            </p>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, fontFamily: "'Barlow', sans-serif" }}>
              If your listing is missing photos, has generic categories, no review strategy, and a thin description — you're handing those calls to your competitors. Not because they're better. Just because their profile is.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {problems.map((p, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "14px",
                background: "#0f0f0f",
                border: "1px solid #1e1e1e",
                borderLeft: `3px solid rgba(201,151,42,0.5)`,
                borderRadius: "3px", padding: "16px 18px",
              }}>
                <span style={{ fontSize: "18px", flexShrink: 0 }}>{p.icon}</span>
                <span style={{ color: "#777", fontSize: "14px", lineHeight: 1.6, fontFamily: "'Barlow', sans-serif" }}>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}

// ─── WHAT WE FIX ─────────────────────────────────────────────────────────────
function WhatWeFix() {
  const fixes = [
    { title: "Business Profile Categories", desc: "Primary and secondary categories chosen to put your listing in front of the right local searches — not just the obvious ones.", icon: "🏷️" },
    { title: "Service Descriptions", desc: "Every service written with local search intent in mind. Clear, keyword-rich, and customer-facing.", icon: "📝" },
    { title: "Photos & Trust Signals", desc: "A complete photo checklist: team, equipment, before/after. Listings with real photos get 42% more call requests.", icon: "📸" },
    { title: "Reviews & Response Strategy", desc: "A system to generate more reviews plus response templates that show Google — and customers — you're engaged.", icon: "⭐" },
    { title: "Local Keyword Positioning", desc: "We identify the exact terms your customers use and make sure your profile speaks that language throughout.", icon: "🔍" },
    { title: "Competitor Comparison", desc: "We audit your top local competitors and show you exactly where you're behind — and how to close the gap fast.", icon: "📊" },
    { title: "Call Tracking Setup Guide", desc: "Guidance on tracking which searches generate revenue — not just impressions or traffic you can't act on.", icon: "📞" },
    { title: "30-Day Posting Framework", desc: "A ready-to-use content plan for Google Posts: promotions, project highlights, and trust-building updates.", icon: "📅" },
  ];

  return (
    <section id="What-We-Fix" style={{ background: "#0f0f0f", padding: "100px 28px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>What We Fix</SectionLabel>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: "clamp(30px,4vw,54px)", textTransform: "uppercase",
            letterSpacing: "0.04em", color: "#fff", margin: "0 0 16px", lineHeight: 1.1,
          }}>
            Every piece of your Google presence —{" "}
            <span style={{ color: G }}>optimized.</span>
          </h2>
          <p style={{ color: "#555", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7, fontFamily: "'Barlow', sans-serif" }}>
            Most businesses have 5–8 fixable problems hiding in their Google Business Profile. Here's what we address in every engagement.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "2px" }}>
          {fixes.map((f, i) => (
            <div key={i}
              style={{
                background: "#0a0a0a", padding: "32px 28px",
                border: "1px solid #1a1a1a",
                cursor: "default", transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#111";
                e.currentTarget.style.borderColor = `rgba(201,151,42,0.3)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#0a0a0a";
                e.currentTarget.style.borderColor = "#1a1a1a";
              }}>
              <div style={{ fontSize: "26px", marginBottom: "16px" }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                color: "#fff", fontSize: "17px", margin: "0 0 10px",
                textTransform: "uppercase", letterSpacing: "0.06em",
              }}>{f.title}</h3>
              <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.7, margin: 0, fontFamily: "'Barlow', sans-serif" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OFFER ───────────────────────────────────────────────────────────────────
function Offer() {
  const deliverables = [
    "Full Google Business Profile audit with scoring",
    "Primary & secondary category optimization plan",
    "Service area cleanup and coverage correction",
    "Keyword-optimized business description (written for you)",
    "Review generation strategy + response templates",
    "Complete photo checklist by type and priority",
    "Competitor positioning notes (top 3 local competitors)",
    "30-day Google Posts content framework",
    "Simple lead capture and call tracking recommendations",
  ];

  return (
    <section id="Offer" style={{ background: "#0a0a0a", padding: "100px 28px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Gold top border card */}
        <div style={{
          border: "1px solid rgba(201,151,42,0.25)",
          borderTop: `3px solid ${G}`,
          borderRadius: "4px",
          background: "#0f0f0f",
          overflow: "hidden",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="offer-grid">
            <div style={{ padding: "clamp(40px,5vw,64px)", borderRight: "1px solid #1a1a1a" }}>
              <SectionLabel>The Service</SectionLabel>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "clamp(26px,3.5vw,42px)", textTransform: "uppercase",
                letterSpacing: "0.04em", color: "#fff", margin: "0 0 8px", lineHeight: 1.1,
              }}>
                Google Business Profile
              </h2>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "clamp(26px,3.5vw,42px)", textTransform: "uppercase",
                letterSpacing: "0.04em", color: G, margin: "0 0 24px", lineHeight: 1.1,
              }}>
                Revenue Setup
              </h2>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.8, marginBottom: "24px", fontFamily: "'Barlow', sans-serif" }}>
                A flat-rate, done-with-you optimization service for local contractors who want more phone calls — without running a single ad. We go deep on your Google profile, fix what's broken, strengthen what's weak, and hand you a 30-day plan to keep building momentum.
              </p>
              <p style={{ color: "#444", fontSize: "13px", lineHeight: 1.7, marginBottom: "36px", fontFamily: "'Barlow', sans-serif" }}>
                This isn't a dashboard subscription. This is hands-on work that positions your business to compete and win in local search — documented, deliverable, and ready to act on.
              </p>
              <GoldBtn href="#audit">Get Your Free Audit First <IconArrow /></GoldBtn>
            </div>

            <div style={{ padding: "clamp(40px,5vw,64px)" }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px",
                letterSpacing: "0.22em", color: G, textTransform: "uppercase",
                marginBottom: "24px", fontWeight: 600,
              }}>
                — What's Included —
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {deliverables.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <IconCheck />
                    <span style={{ color: "#888", fontSize: "14px", lineHeight: 1.5, fontFamily: "'Barlow', sans-serif" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.offer-grid{grid-template-columns:1fr!important} .offer-grid>div:first-child{border-right:none!important;border-bottom:1px solid #1a1a1a}}`}</style>
    </section>
  );
}

// ─── WHO IT'S FOR ─────────────────────────────────────────────────────────────
function WhoItsFor() {
  const trades = ["Plumbers", "HVAC Companies", "Roofers", "Electricians", "Landscapers", "Pressure Washers", "Concrete Contractors", "Junk Removal", "Towing Companies", "General Contractors", "Painters", "Tree Services"];

  return (
    <section id="Who-Its-For" style={{ background: "#0f0f0f", padding: "100px 28px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="two-col">
          <div>
            <SectionLabel>Who It's For</SectionLabel>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "clamp(28px,3.5vw,48px)", textTransform: "uppercase",
              letterSpacing: "0.04em", color: "#fff", margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Built for businesses that run on{" "}
              <span style={{ color: G }}>phone calls and quote requests.</span>
            </h2>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px", fontFamily: "'Barlow', sans-serif" }}>
              If your business lives and dies by the phone ringing, your Google Business Profile is your most valuable — and most often neglected — marketing asset. It's free to use, and it's where most of your local customers decide whether to call you or your competitor.
            </p>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, fontFamily: "'Barlow', sans-serif" }}>
              We work specifically with trade and service businesses: the kind of companies where one extra call per day is worth thousands per month. You don't need a marketing department. You need a profile that does the selling for you.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {trades.map((t, i) => (
              <div key={i} style={{
                padding: "9px 16px",
                background: "rgba(201,151,42,0.07)",
                border: `1px solid rgba(201,151,42,0.22)`,
                borderRadius: "2px", color: G,
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}>
                {t}
              </div>
            ))}
            <div style={{ padding: "9px 16px", background: "rgba(255,255,255,0.03)", border: "1px dashed #2a2a2a", borderRadius: "2px", color: "#444", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>
              + More Local Services
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { n: "01", title: "Free Audit", desc: "We review your Google Business Profile, local rankings, competitor positioning, and the specific gaps costing you calls. No charge, no obligation." },
    { n: "02", title: "Visibility Plan", desc: "You receive a clear breakdown of exactly what needs to change, what it looks like after, and how each fix connects to more calls." },
    { n: "03", title: "Profile Optimization", desc: "We execute the full optimization: categories, descriptions, service areas, photo checklist, review strategy, and competitive positioning." },
    { n: "04", title: "30-Day Plan", desc: "You walk away with a ready-to-use monthly posting framework and recommendations to keep building trust and visibility over time." },
  ];

  return (
    <section id="Process" style={{ background: "#0a0a0a", padding: "100px 28px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <SectionLabel>How It Works</SectionLabel>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: "clamp(28px,4vw,52px)", textTransform: "uppercase",
            letterSpacing: "0.04em", color: "#fff", margin: 0, lineHeight: 1.1,
          }}>
            Simple. Fast. <span style={{ color: G }}>Built for busy owners.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "#1a1a1a" }} className="process-grid">
          {steps.map((s, i) => (
            <div key={i} style={{
              background: "#0a0a0a", padding: "40px 28px",
              borderTop: i === 0 ? `3px solid ${G}` : "3px solid transparent",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderTopColor = G}
              onMouseLeave={e => e.currentTarget.style.borderTopColor = i === 0 ? G : "transparent"}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "42px", color: "rgba(201,151,42,0.15)", lineHeight: 1,
                letterSpacing: "0.02em", marginBottom: "20px",
              }}>{s.n}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                color: "#fff", fontSize: "18px", margin: "0 0 14px",
                textTransform: "uppercase", letterSpacing: "0.08em",
              }}>{s.title}</h3>
              <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.75, margin: 0, fontFamily: "'Barlow', sans-serif" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.process-grid{grid-template-columns:1fr 1fr!important}}`}</style>
      <style>{`@media(max-width:480px){.process-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

// ─── CTA + FORM ──────────────────────────────────────────────────────────────
function AuditCTA() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", website: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const inp = {
    width: "100%", background: "#111", border: "1px solid #222",
    borderRadius: "3px", padding: "13px 14px", color: "#ddd",
    fontSize: "13px", outline: "none", boxSizing: "border-box",
    fontFamily: "'Barlow', sans-serif", transition: "border-color 0.2s",
  };

  return (
    <section id="audit" style={{ background: "#0a0a0a", padding: "100px 28px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "72px", alignItems: "start" }} className="two-col">
          <div style={{ paddingTop: "8px" }}>
            <SectionLabel>Free Audit</SectionLabel>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "clamp(30px,4vw,52px)", textTransform: "uppercase",
              letterSpacing: "0.04em", color: "#fff", margin: "0 0 24px", lineHeight: 1.1,
            }}>
              Want to know what's{" "}
              <span style={{ color: G }}>costing you calls?</span>
            </h2>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, marginBottom: "40px", fontFamily: "'Barlow', sans-serif" }}>
              Fill out the form and we'll review your Google Business Profile — for free. You'll find out exactly where your listing is losing you business and what it would take to fix it. No fluff, no sales pressure.
            </p>

            {[
              "Full profile review — free, no strings attached",
              "Specific, actionable findings (not generic advice)",
              "Clear next steps whether you work with us or not",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "18px" }}>
                <IconCheck />
                <span style={{ color: "#666", fontSize: "14px", lineHeight: 1.6, fontFamily: "'Barlow', sans-serif" }}>{t}</span>
              </div>
            ))}

            {/* Small Atlas mark as decoration */}
            <div style={{ marginTop: "48px", opacity: 0.15 }}>
              <AtlasLogoMark size={64} />
            </div>
          </div>

          <div style={{
            background: "#0f0f0f",
            border: "1px solid #1e1e1e",
            borderTop: `3px solid ${G}`,
            borderRadius: "4px",
            padding: "40px",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <AtlasLogoMark size={56} />
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#fff", fontSize: "24px", margin: "20px 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Request Received</h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, fontFamily: "'Barlow', sans-serif" }}>We'll review your listing and reach out within 1 business day with what we find.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#fff", fontSize: "20px", margin: "0 0 28px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Request My Free Audit
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {[["name", "Your Name"], ["business", "Business Name"]].map(([k, ph]) => (
                      <input key={k} style={inp} placeholder={ph} value={form[k]} onChange={handle(k)}
                        onFocus={e => e.target.style.borderColor = G} onBlur={e => e.target.style.borderColor = "#222"} />
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {[["phone", "Phone Number"], ["email", "Email Address"]].map(([k, ph]) => (
                      <input key={k} style={inp} placeholder={ph} value={form[k]} onChange={handle(k)}
                        onFocus={e => e.target.style.borderColor = G} onBlur={e => e.target.style.borderColor = "#222"} />
                    ))}
                  </div>
                  <input style={inp} placeholder="Website or Google Listing Link" value={form.website} onChange={handle("website")}
                    onFocus={e => e.target.style.borderColor = G} onBlur={e => e.target.style.borderColor = "#222"} />
                  <textarea style={{ ...inp, resize: "vertical", minHeight: "96px" }} placeholder="Anything specific you want us to look at?" value={form.message} onChange={handle("message")}
                    onFocus={e => e.target.style.borderColor = G} onBlur={e => e.target.style.borderColor = "#222"} />
                  <button onClick={() => setSent(true)}
                    style={{
                      background: `linear-gradient(135deg, ${G}, ${GD})`,
                      color: "#0a0a0a", padding: "15px", borderRadius: "3px",
                      border: "none", fontSize: "12px", fontWeight: 800,
                      cursor: "pointer", letterSpacing: "0.18em", width: "100%",
                      textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif",
                      boxShadow: `0 6px 20px rgba(201,151,42,0.2)`,
                    }}>
                    Request My Free Audit →
                  </button>
                  <p style={{ color: "#333", fontSize: "11px", textAlign: "center", margin: 0, lineHeight: 1.6, fontFamily: "'Barlow', sans-serif" }}>
                    No obligation. We review your listing and follow up with real findings — not a sales pitch.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Do I need to run ads?", a: "No. This service is specifically for businesses who want more calls from organic Google search — not paid ads. Your Google Business Profile is a free tool, and when it's optimized properly, it can outperform paid campaigns for local searches." },
  { q: "How fast can this help?", a: "Many clients see improvements in profile engagement and call volume within 2–4 weeks of optimization. Google Business Profile changes tend to take effect faster than traditional SEO. The review strategy and posting framework build momentum over time." },
  { q: "Do you work with new businesses?", a: "Yes. If you have a Google Business Profile — even a brand new one — we can help you build it out the right way from the start. In some cases, starting fresh with a fully optimized profile is actually an advantage." },
  { q: "Is this SEO?", a: "It's local SEO — specifically Google Business Profile optimization. This is different from website SEO. We're focused on improving your visibility and conversion rate on Google Maps and the local pack, which is where most local service customers search." },
  { q: "What do you need from me?", a: "Access to your Google Business Profile, some basic info about your services and service area, and a few photos if you have them. The heavy lifting is on our end. Most clients spend less than 30 minutes providing information." },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="FAQ" style={{ background: "#0f0f0f", padding: "100px 28px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: "clamp(28px,4vw,48px)", textTransform: "uppercase",
            letterSpacing: "0.06em", color: "#fff", margin: 0,
          }}>Common Questions</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #1a1a1a" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none",
                  padding: "24px 0", display: "flex", justifyContent: "space-between",
                  alignItems: "center", cursor: "pointer", gap: "16px",
                }}>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                  color: open === i ? G : "#ccc", fontSize: "17px",
                  textAlign: "left", textTransform: "uppercase", letterSpacing: "0.06em",
                  transition: "color 0.2s",
                }}>{f.q}</span>
                <span style={{ color: G, fontSize: "22px", flexShrink: 0, lineHeight: 1, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: "24px" }}>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.85, margin: 0, fontFamily: "'Barlow', sans-serif" }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid #151515", padding: "48px 28px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
        <NavLogo />
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#2a2a2a", fontSize: "11px", margin: "0 0 4px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>
            Higher Quality Leads. Better Sales. Real Growth.
          </p>
          <p style={{ color: "#252525", fontSize: "11px", margin: 0, fontFamily: "'Barlow', sans-serif" }}>
            © 2025 Atlas Visibility Co. All rights reserved.
          </p>
        </div>
        <GoldBtn href="#audit" outline>Free Audit →</GoldBtn>
      </div>
    </footer>
  );
}

// ─── ROOT ────────────────────────────────────────────────────────────────────
export default function AtlasVisibility() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Barlow', sans-serif; background: #0a0a0a; color: #fff; }
        ::selection { background: rgba(201,151,42,0.25); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #c9972a; border-radius: 2px; }
      `}</style>
      <Nav />
      <Hero />
      <Problem />
      <WhatWeFix />
      <Offer />
      <WhoItsFor />
      <Process />
      <AuditCTA />
      <FAQ />
      <Footer />
    </>
  );
}
