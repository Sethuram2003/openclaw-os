import { motion } from 'framer-motion'
import { ArrowDown, Globe, Link2, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const roles = ['AI Engineer', 'Machine Learning Expert', 'Deep Learning Specialist', 'NLP Enthusiast']
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
            <span className="badge-dot"></span>
            Available for Opportunities
          </motion.div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Alex Chen</span>
          </h1>
          
          <div className="hero-role">
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
            Building intelligent systems that bridge the gap between 
            cutting-edge AI research and real-world applications.
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Globe size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Users size={24} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Link2 size={24} />
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
            <div className="avatar-placeholder">
              <span>AC</span>
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
