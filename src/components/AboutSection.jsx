import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Lightbulb, Rocket } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <motion.div
          className="section-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          01 / ABOUT ME
        </motion.div>

        <motion.div
          className="about-arrow"
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ArrowDownRight size={45} />
        </motion.div>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-main-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-card-label">A LITTLE INTRODUCTION</div>

          <h2>
            Curious mind,
            <br />
            <span>creative builder.</span>
          </h2>

          <p>
            I'm a Computer Science student who enjoys exploring technology,
            solving problems, and turning ideas into digital experiences.
          </p>

          <p>
            I like learning by building things — from websites and
            applications to projects that combine technology and creativity.
          </p>

          <div className="about-signature">
            — Farrel
          </div>
        </motion.div>

        <div className="about-side">
          <motion.div
            className="about-note note-one"
            initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Lightbulb size={25} />
            <strong>Always Curious</strong>
            <span>
              I enjoy discovering new ideas and technologies.
            </span>
          </motion.div>

          <motion.div
            className="about-note note-two"
            initial={{ opacity: 0, rotate: 8, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Code2 size={25} />
            <strong>Love Building</strong>
            <span>
              Learning becomes more meaningful when I build something.
            </span>
          </motion.div>

          <motion.div
            className="about-note note-three"
            initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Rocket size={25} />
            <strong>Keep Growing</strong>
            <span>
              Every project is another step forward.
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="about-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="stat">
          <strong>CS</strong>
          <span>Student</span>
        </div>

        <div className="stat">
          <strong>∞</strong>
          <span>Things to Learn</span>
        </div>

        <div className="stat">
          <strong>01</strong>
          <span>Journey in Progress</span>
        </div>

        <div className="stat">
          <strong>2027</strong>
          <span>Enrichment Goal</span>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;