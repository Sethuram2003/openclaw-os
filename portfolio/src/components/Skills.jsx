import { motion } from 'framer-motion'
import { Brain, Cpu, Database, Cloud, Code, Terminal } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI, LLMs & Agents',
      icon: Brain,
      skills: [
        { name: 'LangChain / LangGraph', level: 95 },
        { name: 'Hugging Face', level: 92 },
        { name: 'Ollama / Local LLMs', level: 90 },
        { name: 'RAG Systems', level: 92 },
        { name: 'Multi-Agent Systems', level: 88 },
        { name: 'Letta (MemGPT)', level: 85 },
      ],
    },
    {
      title: 'LLM & Agent Frameworks',
      icon: Cpu,
      skills: [
        { name: 'PyTorch / TorchAudio', level: 90 },
        { name: 'FastAPI', level: 92 },
        { name: 'PyAnnote (Diarization)', level: 88 },
        { name: 'NVIDIA Audio Flamingo', level: 85 },
        { name: 'MCP Server Dev', level: 88 },
        { name: 'OpenAI API', level: 90 },
      ],
    },
    {
      title: 'Data & Vector Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL / MySQL', level: 90 },
        { name: 'Pinecone / Weaviate', level: 88 },
        { name: 'ChromaDB', level: 90 },
        { name: 'Neo4j (GraphRAG)', level: 82 },
        { name: 'MongoDB / CosmosDB', level: 85 },
        { name: 'Snowflake / Redshift', level: 80 },
      ],
    },
    {
      title: 'Big Data & MLOps',
      icon: Cloud,
      skills: [
        { name: 'Apache Spark', level: 88 },
        { name: 'Kafka / Flink', level: 82 },
        { name: 'Docker / Kubernetes', level: 88 },
        { name: 'MLflow', level: 85 },
        { name: 'Airflow', level: 80 },
        { name: 'AWS (10 Badges)', level: 85 },
      ],
    },
  ]

  const languages = [
    { name: 'Python', level: 98 },
    { name: 'SQL', level: 90 },
    { name: 'R', level: 78 },
    { name: 'Bash / Shell', level: 82 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 80 },
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
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        <div className="skills-section">
          <h3 className="subsection-title">Programming Languages</h3>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="language-item"
              >
                <div className="skill-info">
                  <span className="skill-name">{lang.name}</span>
                  <span className="skill-percentage">{lang.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
