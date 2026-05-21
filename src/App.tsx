import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatWeFix from './components/WhatWeFix'
import Offer from './components/Offer'
import WhoItsFor from './components/WhoItsFor'
import Process from './components/Process'
import AuditCTA from './components/AuditCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  // Scroll-reveal: observe all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe existing elements
    const attach = () => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        observer.observe(el)
      })
    }

    // Small delay so all sections have mounted
    const timer = setTimeout(attach, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhatWeFix />
        <Offer />
        <WhoItsFor />
        <Process />
        <AuditCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
