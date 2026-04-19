import { motion } from 'framer-motion'
import { Globe, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Neural Vision',
      description: 'A state-of-the-art computer vision system capable of real-time object detection and image segmentation using YOLO and Mask R-CNN architectures.',
      tags: ['PyTorch', 'OpenCV', 'TensorRT', 'CUDA'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'LLM Chat Engine',
      description: 'Enterprise-grade conversational AI platform built on fine-tuned Large Language Models with RAG integration and vector databases.',
      tags: ['LangChain', 'FAISS', 'FastAPI', 'React'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Predictive Analytics',
      description: 'Time series forecasting system for financial markets using transformer models and ensemble learning techniques.',
      tags: ['TensorFlow', 'Prophet', 'Keras', 'SQL'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'AI Content Generator',
      description: 'Multi-modal content creation tool combining text, image, and code generation capabilities with diffusion models.',
      tags: ['Stable Diffusion', 'GPT-4', 'DALL-E', 'Node.js'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'Autonomous Drone AI',
      description: 'Deep reinforcement learning system for autonomous drone navigation and obstacle avoidance in complex environments.',
      tags: ['PyTorch', 'Unity ML-Agents', 'ROS', 'Python'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'Medical Diagnosis AI',
      description: 'HIPAA-compliant AI system for assisting in medical image analysis and preliminary diagnosis support.',
      tags: ['TensorFlow', 'MONAI', 'Flask', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
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
