import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Attributions from './components/Attributions.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Attributions />
      <Footer />
    </div>
  )
}

export default App