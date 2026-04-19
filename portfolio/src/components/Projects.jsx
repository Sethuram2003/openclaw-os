import { motion } from 'framer-motion'
import { Globe, ExternalLink, Cpu, Brain, Database, MessageSquare, Accessibility } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AdaptiMind — Stateful AI Agent',
      description: 'Context-aware AI agent with dynamic memory using Letta (MemGPT) + Ollama. Achieves 90% improvement in personal info retrieval through persistent memory architecture.',
      tags: ['Letta', 'Ollama', 'LangChain', 'Python'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: Brain,
      link: 'https://github.com/Sethuram2003',
    },
    {
      title: 'Speech Diarization API',
      description: 'Production microservice for speaker diarization using PyAnnote 3.1 + NVIDIA Audio Flamingo-3. Fully containerized with Docker for privacy-preserving audio processing.',
      tags: ['FastAPI', 'PyAnnote', 'NVIDIA', 'Docker'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: Cpu,
      link: 'https://github.com/Sethuram2003/Speech-Diarization',
    },
    {
      title: 'MCP-Ollama Server',
      description: 'Privacy-first local AI infrastructure bridging MCP protocol with Ollama. Enables HIPAA-compliant, air-gapped AI tool use for legal, healthcare, and finance.',
      tags: ['MCP', 'Ollama', 'Python', 'Google Calendar API'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: Database,
      link: 'https://github.com/sethuram2003/mcp-ollama_server',
    },
    {
      title: 'AI WhatsApp Bot',
      description: 'Production agentic messaging system using LangGraph ReAct pattern + Meta Cloud API. Features real-time web search, vision capabilities, and per-user memory.',
      tags: ['LangGraph', 'FastAPI', 'Groq', 'Docker'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: MessageSquare,
      link: '#',
    },
    {
      title: 'Tamil Braille Recognition Device',
      description: 'Patent-holder edge computing device for Tamil Braille to text/audio conversion. 97.45% accuracy using custom TamilBrailleNet CNN architecture on Raspberry Pi.',
      tags: ['PyTorch', 'Computer Vision', 'Raspberry Pi', 'TTS'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      icon: Accessibility,
      link: '#',
    },
    {
      title: 'Process Monitor + Calendar',
      description: 'Windows background process tracker that automatically logs application usage to Google Calendar. Built with Python, psutil, and Google Calendar API v3.',
      tags: ['Python', 'psutil', 'SQLite', 'Google Calendar API'],
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      icon: Database,
      link: 'https://github.com/Sethuram2003/EventTracker_googleCalendar',
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-visual" style={{ background: project.gradient }}>
                <project.icon size={48} className="project-icon-overlay" />
                <h3 className="project-title-overlay">{project.title}</h3>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Globe size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
