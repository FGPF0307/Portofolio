import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "TrackBite",
    category: "Mobile App",
    description:
      "A calorie tracking application designed to help users monitor food intake, plan meals, and maintain healthier daily habits.",
    tech: ["Flutter", "Supabase", "Figma"],
    color: "yellow",

    details:
      "TrackBite is a mobile application focused on helping users track their daily calorie intake. The application allows users to record meals, monitor nutritional information, and organize their daily eating habits in one place.",

    features: [
      "Calorie tracking",
      "Food and meal logging",
      "Nutrition information",
      "Meal planning",
      "User-friendly mobile interface",
    ],

    github: "#",
  },

  {
    number: "02",
    title: "Fit Arena",
    category: "Mobile App",
    description:
      "A modern fitness community application featuring gamification, an interactive radar map, and real-time chat. Designed to encourage workout consistency.",
    tech: ["Flutter", "Express.js", "Supabase"],

    color: "green",

    details:
      "Fit Arena is a fitness community application designed to make working out more engaging. The application combines social interaction, gamification, location-based features, and real-time communication to encourage users to stay active.",

    features: [
      "Fitness challenges",
      "Gamification system",
      "Interactive radar map",
      "Real-time chat",
      "Fitness community features",
    ],

    github: "#",
  },

  {
    number: "03",
    title: "V-Phone",
    category: "Web Development",
    description:
      "A modern smartphone marketplace website featuring product cards, filters, promotions, and a responsive shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],

    color: "pink",

    details:
      "V-Phone is a responsive smartphone marketplace website created to provide users with a clean and easy way to explore smartphone products, compare options, and discover promotions.",

    features: [
      "Product browsing",
      "Product filtering",
      "Product cards",
      "Promotional sections",
      "Responsive web design",
    ],

    github: "#",
  },

  {
    number: "04",
    title: "DineAndGo",
    category: "Mobile App",
    description:
      "A restaurant table reservation and pre-order application implementing interactive floor plan booking mechanics and robust Redis concurrency locking.",
    tech: ["Flutter", "Supabase", "Redis"],

    color: "yellow",

    details:
      "DineAndGo is a restaurant reservation and pre-order application. Users can explore available tables through an interactive floor plan, reserve their preferred table, and prepare their orders before arriving at the restaurant.",

    features: [
      "Interactive restaurant floor plan",
      "Table reservation",
      "Food pre-ordering",
      "Reservation management",
      "Redis-based concurrency locking",
    ],

    github: "#",
  },
];

function ProjectsSection() {
  const carouselRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollProjects = (direction) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -450 : 450,
      behavior: "smooth",
    });
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeProject();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <motion.div
          className="section-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          03 / PROJECTS
        </motion.div>

        <div className="projects-controls">
          <button
            onClick={() => scrollProjects("left")}
            aria-label="Previous projects"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scrollProjects("right")}
            aria-label="Next projects"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="projects-title-row">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Things I've
          <br />
          <span>built.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A collection of projects, experiments,
          and things I've built while learning.
        </motion.p>
      </div>

      <div className="projects-carousel" ref={carouselRef}>
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className={`project-card project-${project.color}`}
            initial={{
              opacity: 0,
              y: 50,
              rotate: index % 2 === 0 ? -1 : 1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? -1 : 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -10,
              rotate: 0,
            }}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-preview">
              <span>{project.title}</span>

              <div className="preview-lines">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <button
              className="project-link"
              onClick={() => openProject(project)}
            >
              View Project
              <ArrowUpRight size={18} />
            </button>
          </motion.article>
        ))}
      </div>

      <div className="projects-scroll-hint">
        <span>←</span>
        <p>Drag / scroll to explore</p>
        <span>→</span>
      </div>

      {/* PROJECT MODAL */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >
            <motion.div
              className={`project-modal project-${selectedProject.color}`}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <button
                className="project-modal-close"
                onClick={closeProject}
                aria-label="Close project"
              >
                <X size={24} />
              </button>

              <div className="modal-header">
                <div>
                  <span className="modal-number">
                    {selectedProject.number} /{" "}
                    {selectedProject.category}
                  </span>

                  <h2>{selectedProject.title}</h2>
                </div>
              </div>

              <div className="modal-divider"></div>

              <div className="modal-body">
                <div className="modal-description">
                  <span className="modal-label">
                    ABOUT THE PROJECT
                  </span>

                  <p>{selectedProject.details}</p>
                </div>

                <div className="modal-features">
                  <span className="modal-label">
                    WHAT I USED / BUILT
                  </span>

                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>
                        <span>✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-tech-section">
                <span className="modal-label">
                  TECHNOLOGY
                </span>

                <div className="modal-tech">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <span>Want to see the code?</span>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                  onClick={(event) => {
                    if (selectedProject.github === "#") {
                      event.preventDefault();
                    }
                  }}
                >
                  View on GitHub
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;