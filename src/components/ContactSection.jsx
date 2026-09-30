import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">

      {/* ================= HEADER ================= */}
      <div className="contact-header">

        <div className="section-number">
          04 / CONTACT
        </div>

        <div className="contact-doodle">
          say hello ↘
        </div>

      </div>


      {/* ================= CONTENT ================= */}
      <div className="contact-content">

        {/* ================= LEFT ================= */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="contact-label">
            HAVE A PROJECT IN MIND?
          </div>

          <h2>
            Let's
            <br />
            <span>talk.</span>
          </h2>

          <p>
            Whether you want to collaborate, have a project idea,
            or simply want to say hello, feel free to reach out.
          </p>

          <a
            href="mailto:farrelfadia3@gmail.com"
            className="contact-email"
          >
            farrelfadia3@gmail.com ↗
          </a>

        </motion.div>


        {/* ================= RIGHT ================= */}
        <motion.div
          className="contact-social-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >

          <div className="contact-social-title">
            FIND ME HERE ✦
          </div>

          <p className="contact-social-description">
            You can also find me through these platforms.
          </p>


          <div className="contact-social-links">

            {/* GITHUB */}
            <a
              href="https://github.com/FGPF0307"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/farrel-ganendra-p-f-109490326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>


            {/* EMAIL */}
            <a href="mailto:farrelfadia3@gmail.com">
              <span>Email</span>
              <span>↗</span>
            </a>

          </div>

        </motion.div>

      </div>


      {/* ================= FOOTER ================= */}
      <footer className="contact-footer">

        <span>
          © 2026 FARREL GANENDRA
        </span>

        <span>
          BINUSIAN
        </span>

      </footer>

    </section>
  );
}

export default ContactSection;