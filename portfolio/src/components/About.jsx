import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Cpu, MapPin, Mail, Phone } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: GraduationCap, number: 'MS DS', label: 'Stony Brook University' },
    { icon: Award, number: '3.67', label: 'GPA' },
    { icon: Cpu, number: '10+', label: 'AWS Badges' },
    { icon: Users, number: '8 Months', label: 'HGS Digital Exp' },
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
              I'm <strong>Sethuram Gautham Rajakumar</strong>, a Master's candidate in Data Science at 
              <strong> Stony Brook University</strong> (Graduating May 2026). My passion lies in building 
              intelligent systems that bridge cutting-edge AI research and production-ready applications.
            </p>
            <p>
              With hands-on experience from <strong>HGS Digital</strong> as an Associate Software Engineer Intern, 
              I've architected distributed multi-agent AI systems, designed scalable voice agent pipelines, 
              and delivered enterprise-grade solutions for Fortune 500 clients.
            </p>
            <p>
              My technical expertise spans the full AI stack — from LLM fine-tuning and multi-agent 
              orchestration to distributed data systems and cloud infrastructure. I'm particularly 
              excited about building privacy-first AI solutions using local LLM deployment.
            </p>
            
            <div className="contact-quick">
              <a href="tel:+1-934-246-4678" className="contact-quick-item">
                <Phone size={18} />
                <span>+1-934-246-4678</span>
              </a>
              <a href="mailto:sethuramgautha.rajakumar@stonybrook.edu" className="contact-quick-item">
                <Mail size={18} />
                <span>sethuramgautha.rajakumar@stonybrook.edu</span>
              </a>
              <div className="contact-quick-item">
                <MapPin size={18} />
                <span>New York, USA | Chennai, India</span>
              </div>
            </div>
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
                <stat.icon className="stat-icon" size={28} />
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="education-section"
        >
          <h3 className="subsection-title">Education</h3>
          <div className="education-grid">
            <div className="education-card">
              <div className="edu-header">
                <GraduationCap size={24} className="edu-icon" />
                <div>
                  <h4>Master of Science in Data Science</h4>
                  <p className="edu-institution">Stony Brook University, New York</p>
                </div>
              </div>
              <p className="edu-duration">August 2024 – May 2026 (Expected)</p>
              <p className="edu-gpa">GPA: 3.67 / 4.0</p>
              <div className="edu-coursework">
                <span>Probability Theory</span>
                <span>Statistical Learning</span>
                <span>Big Data Systems</span>
                <span>Cloud Computing</span>
                <span>ML / AI</span>
              </div>
            </div>
            <div className="education-card">
              <div className="edu-header">
                <GraduationCap size={24} className="edu-icon" />
                <div>
                  <h4>B.E. — Electrical and Electronics Engineering</h4>
                  <p className="edu-institution">SSN College of Engineering, Chennai</p>
                </div>
              </div>
              <p className="edu-duration">June 2020 – May 2024</p>
              <p className="edu-gpa">GPA: 8.8 / 10.0</p>
              <div className="edu-coursework">
                <span>Python</span>
                <span>Java OOP</span>
                <span>Linear Algebra</span>
                <span>Signal Processing</span>
                <span>Numerical Methods</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
