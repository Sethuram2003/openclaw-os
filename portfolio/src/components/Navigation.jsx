import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import Logo from './Logo'

const Navigation = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <Logo />
          <span className="logo-text">SGR</span>
        </a>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button
          className="theme-toggle mobile"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          Toggle Theme
        </button>
      </motion.div>
    </nav>
  )
}

export default Navigation
