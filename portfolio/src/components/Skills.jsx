import { motion } from 'framer-motion'
import { Cpu, Brain, Database, Cloud, Terminal, LineChart } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 92 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'LangChain', level: 85 },
        { name: 'Hugging Face', level: 88 },
      ],
    },
    {
      title: 'Deep Learning',
      icon: Cpu,
      skills: [
        { name: 'CNNs / RNNs', level: 90 },
        { name: 'Transformers', level: 95 },
        { name: 'LLMs / GPT', level: 92 },
        { name: 'Computer Vision', level: 85 },
        { name: 'Reinforcement Learning', level: 80 },
        { name: 'MLOps / Model Serving', level: 88 },
      ],
    },
    {
      title: 'Data Engineering',
      icon: Database,
      skills: [
        { name: 'SQL', level: 88 },
        { name: 'Apache Spark', level: 80 },
        { name: 'Pandas', level: 92 },
        { name: 'Feature Engineering', level: 90 },
        { name: 'Vector Databases', level: 85 },
        { name: 'Data Pipeline', level: 88 },
      ],
    },
    {
      title: 'Infrastructure & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS SageMaker', level: 85 },
        { name: 'Docker / K8s', level: 88 },
        { name: 'MLflow', level: 85 },
        { name: 'FastAPI', level: 90 },
        { name: 'Redis / Celery', level: 82 },
        { name: 'CI/CD for ML', level: 85 },
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
          <h2 className="section-title">AI Skills & Expertise</h2>
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
