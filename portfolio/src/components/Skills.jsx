import { motion } from 'framer-motion'
import { Cpu, Database, Cloud, Code2, Brain } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Cpu,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'Keras', level: 85 },
        { name: 'OpenCV', level: 80 },
      ],
    },
    {
      title: 'Deep Learning',
      icon: Brain,
      skills: [
        { name: 'CNNs', level: 90 },
        { name: 'RNNs/LSTMs', level: 85 },
        { name: 'Transformers', level: 92 },
        { name: 'GANs', level: 78 },
        { name: 'Reinforcement Learning', level: 75 },
        { name: 'NLP', level: 88 },
      ],
    },
    {
      title: 'Data & MLOps',
      icon: Database,
      skills: [
        { name: 'SQL', level: 88 },
        { name: 'MongoDB', level: 80 },
        { name: 'Apache Spark', level: 75 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 72 },
        { name: 'MLflow', level: 82 },
      ],
    },
    {
      title: 'Cloud & Deployment',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'FastAPI', level: 88 },
        { name: 'Flask', level: 82 },
        { name: 'Redis', level: 78 },
      ],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="skill-category"
            >
              <div className="category-header">
                <category.icon size={28} className="category-icon" />
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-item"
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
