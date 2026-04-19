import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer — Intern',
      company: 'HGS CX Technologies Inc. (HGS Digital)',
      location: 'New York, New York, USA',
      duration: 'May 2025 – January 2026',
      supervisor: 'Juan Pablo Susarrey',
      highlights: [
        'Designed and deployed scalable AI voice agents using Azure Cloud Functions for serverless execution with autonomous decision-making',
        'Architected distributed multi-agent systems using n8n, enabling complex AI pipelines with specialized agents for retrieval, summarization, and action execution',
        'Developed FinOps backend platform for automated cost management, expense tracking, and ML-based financial anomaly detection',
        'Built social media analytics backend processing real-time data from Twitter/X, LinkedIn, and Reddit with NLP sentiment analysis',
        'Created enterprise pre-sales architecture documentation and live demonstrations for Fortune 500 client engagements',
        'Conducted advanced RAG research including naive RAG, advanced RAG with re-ranking, and knowledge graph approaches using Neo4j',
      ],
      technologies: ['Python', 'Azure Functions', 'LangChain', 'LangGraph', 'FastAPI', 'n8n', 'NLP', 'Neo4j', 'Docker'],
    },
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <div className="exp-meta">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-location">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                
                <div className="exp-details">
                  <span className="exp-duration">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                  <span className="exp-supervisor">
                    Supervisor: {exp.supervisor}
                  </span>
                </div>

                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>
                      <ChevronRight size={16} className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-technologies">
                  {exp.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
