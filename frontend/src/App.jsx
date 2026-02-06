import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App