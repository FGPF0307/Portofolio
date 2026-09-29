import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <a href="/" className="logo">
          F
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#enrichment">Enrichment</a>
        </div>S

        <a href="#contact" className="nav-contact">
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

      </nav>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <motion.div
              className="small-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ✦ HELLO, WELCOME TO MY SPACE
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm
              <br />

              <span className="highlight">
                Farrel.
              </span>
            </motion.h1>


            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Science student who loves building
              digital experiences, exploring technology,
              and turning ideas into something real.
            </motion.p>


            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >

              <a
                href="#projects"
                className="primary-button"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </a>


              <a
                href="#about"
                className="secondary-button"
              >
                More About Me
              </a>

            </motion.div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            className="hero-visual"

            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: 3
            }}

            animate={{
              opacity: 1,
              scale: 1,
              rotate: -2
            }}

            transition={{
              duration: 1,
              delay: 0.3
            }}
          >

            {/* Tape */}
            <div className="tape tape-top"></div>


            {/* Photo */}
            <div className="photo-card">

              <div className="photo-placeholder">
                YOUR
                <br />
                PHOTO
              </div>

              <div className="photo-caption">
                that's me :)
              </div>

            </div>


            {/* Yellow Sticky Note */}
            <motion.div
              className="sticky-note note-yellow"

              animate={{
                rotate: [-3, 1, -3],
                y: [0, -5, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Keep
              <br />
              Learning ✦
            </motion.div>


            {/* Green Sticky Note */}
            <motion.div
              className="sticky-note note-green"

              animate={{
                rotate: [3, -1, 3],
                y: [0, 6, 0],
              }}

              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Build
              <br />
              Something!
            </motion.div>

          </motion.div>

        </section>


        {/* ================= QUICK INTRO ================= */}
        <section className="quick-intro">

          <div className="intro-line"></div>

          <p>
            A little corner of the internet where I document
            what I learn, what I build, and where I'm going.
          </p>

          <div className="intro-line"></div>

        </section>


        {/* ================= TEMPORARY SECTIONS ================= */}

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

<section id="enrichment" className="placeholder-section">
  <span>04</span>
  <h2>Enrichment 2027</h2>
</section>

<section id="contact" className="placeholder-section">
  <span>05</span>
  <h2>Contact</h2>
</section>

      </main>

    </div>
  );
}

export default App;