import { motion } from 'framer-motion'
import { Brain, Award, Users, Cpu } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Cpu, number: '50+', label: 'ML Models Deployed' },
    { icon: Brain, number: '15+', label: 'AI Projects' },
    { icon: Users, number: '10+', label: 'Happy Clients' },
    { icon: Award, number: '3+', label: 'Years Experience' },
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <p>
              I'm <strong>Sethuram Gautham</strong>, an AI Engineer passionate about building 
              intelligent systems that solve real-world problems. My expertise spans across 
              machine learning, deep learning, natural language processing, and MLOps.
            </p>
            <p>
              I specialize in developing end-to-end ML pipelines, from data processing and 
              model training to deployment at scale. I'm experienced with transformer 
              architectures, LLMs, computer vision, and building production-grade AI systems.
            </p>
            <p>
              When I'm not training models or building AI infrastructure, you'll find me 
              exploring the latest research papers, contributing to open-source ML projects, 
              or optimizing model performance for better results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-stats"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-card"
              >
                <stat.icon className="stat-icon" size={32} />
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
