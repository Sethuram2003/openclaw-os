import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function LoadingFallback() {
  return (
    <div className="loading-bg">
      <div className="loading-spinner"></div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<LoadingFallback />}>
        <ParticleBackground />
      </Suspense>
      <Navigation theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2024 Sethuram Gautham — AI Engineer. Crafted with passion and precision.</p>
      </footer>
    </div>
  )
}

export default App
