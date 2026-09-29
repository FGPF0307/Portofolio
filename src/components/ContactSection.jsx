import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman form (bisa diintegrasikan dengan EmailJS atau backend Express Anda)
    alert("Message sent! I will get back to you soon.");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <motion.div
          className="section-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          04 / CONTACT
        </motion.div>
      </div>

      <div className="contact-title-row">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Let's build something
          <br />
          <span>together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Feel free to reach out if you're looking for a developer, 
          have a question, or just want to connect.
        </motion.p>
      </div>

      <div className="contact-content">
        {/* Kiri: Informasi Kontak */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="info-card">
            <h3>Contact Details</h3>
            <div className="info-item">
              <Mail size={20} className="info-icon" />
              <a href="mailto:hello@farrel.com">hello@farrel.com</a>
            </div>
            <div className="info-item">
              <MapPin size={20} className="info-icon" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={22} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={22} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Kanan: Contact Form */}
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;