import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import HowItWorks from './components/HowItWorks'
import Marquee from './components/Marquee'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FX from './components/FX'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-100 selection:bg-sky-300/30 selection:text-white">
      {/* Global insane FX */}
      <FX />

      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Showcase />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
