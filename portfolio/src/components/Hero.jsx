import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Globe, Link2, Users, Cpu, MapPin, Zap } from 'lucide-react'

const Hero = () => {
  const roles = ['AI Engineer', 'Data Scientist', 'ML Systems Designer', 'LLM Developer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-badge"
          >
            <Zap size={14} />
            <span>Master's Candidate — Stony Brook University</span>
          </motion.div>
          
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="gradient-text">Sethuram Gautham</span>
          </h1>
          
          <div className="hero-role">
            <Cpu size={20} className="role-icon" />
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
          <div className="hero-location">
            <MapPin size={16} />
            <span>New York, United States | Chennai, India</span>
          </div>
          
          <p className="hero-description">
            Building intelligent systems that bridge cutting-edge AI research and production-ready applications. 
            Specializing in LLM systems, multi-agent architectures, and data-driven solutions.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowDown size={18} />
            </a>
            <a href="https://github.com/Sethuram2003" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Globe size={18} />
              GitHub
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="social-links"
          >
            <a href="https://github.com/Sethuram2003" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Globe size={22} />
            </a>
            <a href="https://www.linkedin.com/in/sethuramgautham/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Users size={22} />
            </a>
            <a href="https://www.linkedin.com/in/sethuramgautham/" target="_blank" rel="noopener noreferrer" title="Links">
              <Link2 size={22} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-visual"
        >
          <div className="avatar-container">
            <div className="avatar-ring"></div>
            <div className="avatar-ring ring-2"></div>
            <div className="avatar-ring ring-3"></div>
            <div className="avatar-inner">
              <Cpu size={48} />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="scroll-indicator"
      >
        <ArrowDown className="bounce" size={24} />
      </motion.div>
    </section>
  )
}

export default Hero
