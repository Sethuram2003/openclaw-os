import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sparkles } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function Scene() {
  return (
    <div className="three-bg">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Sparkles count={300} size={2} speed={0.5} opacity={0.8} color="#8b5cf6" />
        <Sparkles count={200} size={1.5} speed={0.3} opacity={0.6} color="#06b6d4" />
      </Canvas>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`app ${theme}`}>
      <Scene />
      <Navigation theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2024 AI Engineer Portfolio. Crafted with passion and precision.</p>
      </footer>
    </div>
  )
}

export default App
