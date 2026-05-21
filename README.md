# Atlas Visibility Co. — Website

Modern one-page marketing site for Atlas Visibility Co., built with Vite + React + TypeScript.

## Stack

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite 5
- **Styling**: CSS (index.css) + inline styles — zero CSS frameworks, zero runtime deps
- **Fonts**: Barlow + Barlow Condensed (Google Fonts, loaded in index.html)
- **Deployment**: Vercel

## Project Structure

```
atlas-visibility/
├── public/
│   └── favicon.svg          # Atlas "A" logo mark as favicon
├── src/
│   ├── components/
│   │   ├── Logo.tsx         # AtlasLogoMark, AtlasWordmark, NavLogo
│   │   ├── UI.tsx           # SectionLabel, GoldBtn, Icons, hooks
│   │   ├── Nav.tsx          # Sticky nav with mobile menu
│   │   ├── Hero.tsx         # Full-height hero section
│   │   ├── Problem.tsx      # Problem statement section
│   │   ├── WhatWeFix.tsx    # 8-card fix grid
│   │   ├── Offer.tsx        # Service offer + deliverables
│   │   ├── WhoItsFor.tsx    # Target audience + trade tags
│   │   ├── Process.tsx      # 4-step process grid
│   │   ├── AuditCTA.tsx     # Contact form section
│   │   ├── FAQ.tsx          # Accordion FAQ
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Root component + scroll-reveal observer
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles, animations, layout utilities
├── index.html               # HTML shell + meta tags + font preloads
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── vercel.json              # Vercel SPA routing + cache headers
```

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview with:

```bash
npm run preview
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — no settings needed
4. Click Deploy

### Option C — Drag & Drop
1. Run `npm run build`
2. Drag the `dist/` folder to vercel.com/new

## Customization

| What | Where |
|------|-------|
| Brand colors | `src/components/UI.tsx` — `GOLD`, `GOLD_DARK` constants |
| Logo SVG | `src/components/Logo.tsx` — `AtlasLogoMark` |
| Copy / sections | Each component in `src/components/` |
| Animations | `src/index.css` — `@keyframes` + `.reveal` utility |
| Meta tags / SEO | `index.html` |
| Form submission | `src/components/AuditCTA.tsx` — replace `setSent(true)` with your API call or Formspree endpoint |

## Connecting a Form Backend

The audit form currently shows a success state on submit. To wire it to a real backend:

**Formspree (easiest):**
```tsx
// In AuditCTA.tsx, replace the button onClick:
const handleSubmit = async () => {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```

**Any API:**
Replace the fetch URL and headers to match your endpoint.
