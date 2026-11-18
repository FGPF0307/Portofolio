import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import "./App.css";
import "./game.css";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { Hud, RoleRotator, Marquee, SoundToggle, LoadingScreen, Konami } from "./components/Extras";

function App() {
  return (
    <div className="app">
      <Hud />
      <SoundToggle />
      <LoadingScreen />
      <Konami />

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <a href="/" className="logo">
          F
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="/CV-Farrel.pdf" download>CV</a>
        </div>

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
              ▶ PRESS START · PLAYER 1
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

            <RoleRotator />


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

              <a
                href="/CV-Farrel.pdf"
                download
                className="secondary-button"
              >
                <Download size={16} />
                Download CV
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
                <img
                  className="photo-img"
                  src="/Foto%20Profile.png"
                  alt="Farrel"
                  onError={(e) => e.currentTarget.remove()}
                />
                PLAYER
                <br />
                ONE
              </div>

              <div className="photo-caption">
                LV.1 · ready!
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
              +10 XP
              <br />
              Keep Learning
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
              New Quest!
            </motion.div>

          </motion.div>

        </section>


        <Marquee />

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

        <ContactSection />

      </main>

    </div>
  );
}

export default App;