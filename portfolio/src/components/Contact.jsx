import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder for form submission
    alert('Form submission will be implemented with your personal details!')
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
          <h2 className="section-title">Contact Me</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3>Let's Work Together</h3>
            <p>
              I'm always excited to work on new and challenging AI projects. 
              Whether you have a project in mind or just want to chat, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:alex.chen@example.com">alex.chen@example.com</a>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={24} />
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <span className="contact-label">Location</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
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
              <input type="text" id="subject" placeholder="Project Inquiry" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
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
