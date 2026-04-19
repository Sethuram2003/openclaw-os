import { motion } from 'framer-motion'
import { Globe, ExternalLink, Cpu, Brain, Database, LineChart } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'LLM-Powered Research Assistant',
      description: 'A RAG-based system that processes research papers and answers complex queries using fine-tuned LLMs with citation verification.',
      tags: ['LangChain', 'GPT-4', 'FAISS', 'FastAPI', 'React'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: Brain,
    },
    {
      title: 'Real-time Object Detection API',
      description: 'Production-grade YOLOv8 deployment with automatic model versioning, A/B testing, and horizontal scaling via Kubernetes.',
      tags: ['YOLOv8', 'TensorRT', 'FastAPI', 'Docker', 'K8s'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: Cpu,
    },
    {
      title: 'NLP Text Classification Pipeline',
      description: 'End-to-end pipeline for multi-label text classification with transformer models, automated training, and model registry.',
      tags: ['PyTorch', 'Transformers', 'MLflow', 'Airflow', 'AWS'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: Database,
    },
    {
      title: 'Time Series Forecasting Platform',
      description: 'Financial forecasting system using ensemble of LSTM and Transformer models with real-time data ingestion and alerting.',
      tags: ['TensorFlow', 'Prophet', 'Kafka', 'Redis', 'Grafana'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: LineChart,
    },
    {
      title: 'Autonomous Drone Navigation',
      description: 'Deep RL-based navigation system with computer vision for obstacle detection and path planning in complex environments.',
      tags: ['PyTorch', 'OpenCV', 'ROS', 'Unity ML-Agents', 'NVIDIA Jetson'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      icon: Cpu,
    },
    {
      title: 'Medical Image Analysis Suite',
      description: 'HIPAA-compliant AI system for CT/MRI analysis using attention-based segmentation models with explainability features.',
      tags: ['MONAI', 'TensorFlow', 'Flask', 'PostgreSQL', 'Docker'],
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      icon: Brain,
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
          <h2 className="section-title">AI Projects</h2>
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
                  <a href="#" className="project-link">
                    <Globe size={20} />
                  </a>
                  <a href="#" className="project-link">
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
