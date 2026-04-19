import { useState, Suspense } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
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
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Sethuram Gautham Rajakumar — AI Engineer & Data Scientist</p>
      </footer>
    </div>
  )
}

export default App
