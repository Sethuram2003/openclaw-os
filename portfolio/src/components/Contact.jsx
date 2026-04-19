import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Users, Globe, FileText } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Contact form will be connected with your email!')
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3>Let's Build AI Together</h3>
            <p>
              I'm always excited to collaborate on innovative AI projects, discuss cutting-edge 
              research, or explore new opportunities. Whether you need help with ML systems, 
              multi-agent architectures, or want to leverage local LLMs — let's connect!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <span className="contact-label">Academic Email</span>
                  <a href="mailto:sethuramgautha.rajakumar@stonybrook.edu">
                    sethuramgautha.rajakumar@stonybrook.edu
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <div>
                  <span className="contact-label">Mobile</span>
                  <a href="tel:+1-934-246-4678">+1-934-246-4678</a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <span className="contact-label">Location</span>
                  <span>New York, USA | Chennai, India</span>
                </div>
              </div>
            </div>

            <div className="social-links-large">
              <a href="https://www.linkedin.com/in/sethuramgautham/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                <Users size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Sethuram2003" target="_blank" rel="noopener noreferrer" className="social-link-item">
                <Globe size={24} />
                <span>GitHub</span>
              </a>
              <a href="mailto:sethuramgautha.rajakumar@stonybrook.edu" className="social-link-item">
                <FileText size={24} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="AI Project Collaboration / Research / Opportunity" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary btn-submit"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
