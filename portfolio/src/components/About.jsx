import { motion } from 'framer-motion'
import { Brain, Award, Users, Code } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, number: '50+', label: 'Projects Completed' },
    { icon: Award, number: '15+', label: 'Awards Won' },
    { icon: Users, number: '30+', label: 'Happy Clients' },
    { icon: Brain, number: '5+', label: 'Years Experience' },
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
              I'm a passionate AI Engineer with over 5 years of experience in building 
              machine learning models and deep learning systems. My journey started 
              with a curiosity about how machines can learn from data, and it has 
              evolved into a career focused on creating intelligent solutions.
            </p>
            <p>
              Currently, I'm working on cutting-edge projects involving Large Language 
              Models (LLMs), Computer Vision, and Reinforcement Learning. I believe 
              in writing clean, maintainable code and following best practices to 
              deliver robust AI solutions.
            </p>
            <p>
              When I'm not training models, you'll find me exploring new research papers, 
              contributing to open-source projects, or sharing knowledge through 
              technical blog posts.
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
