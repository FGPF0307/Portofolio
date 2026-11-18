import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Hammer, Star, Trophy, X } from "lucide-react";

// status: "progress" | "done"
const projects = [
  {
    number: "01",
    title: "MasakAda",
    status: "progress",
    category: "Mobile App",
    description:
      "MasakAda is a recipe web app that flips the usual question from “what do you want to cook?” to “what’s in your kitchen?”.",
    tech: ["React (Vite) ", "Tailwind CSS" , "Node.js", "Express" , "Supabase", "Figma"],
    color: "cyan",
    details:
      "MasakAda is a recipe web app that flips the usual question from “what do you want to cook?” to “what’s in your kitchen?”. Users log the ingredients they already have in a digital pantry, and the app shows only the recipes they can cook right now, with no extra shopping. It also lists recipes that are missing just one ingredient, with store links or AI-suggested substitutes. Built for students, young professionals, and beginner cooks, it aims for zero food waste and zero extra spending. Other features include a step-by-step cooking mode with photos and timers, automatic pantry deduction after cooking, community recipe sharing with contributor points, and Chef AI for ingredient scanning, substitutions, and cooking Q&A.",
    features: [
      "Smart pantry system",
      "Recipe matching engine",
      "AI-powered Chef assistant",
      "Guided cooking mode",
      "Recipe community and gamification"],
    github: "https://github.com/FGPF0307/MASAKADA",
  },

  {
    number: "02",
    title: "Guidify",
    status: "progress",
    category: "Web App",
    description:
      "A new project currently being built. Details will be revealed soon.",
    tech: ["Coming soon"],
    color: "cyan",
    details:
      "Guidigy is currently in development. More details will be shared as the build moves forward.",
    features: ["Currently in development", "More details coming soon"],
    github: "#",
  },

  {
    number: "03",
    title: "Fintrack",
    status: "progress",
    category: "Mobile App",
    description:
      "A personal finance tracker for keeping income, expenses, and savings in one place.",
    tech: ["Coming soon"],
    color: "cyan",
    details:
      "Fintrack is currently in development. It is a personal finance app, and more details will be shared as the build moves forward.",
    features: ["Currently in development", "More details coming soon"],
    github: "#",
  },

  {
    number: "04",
    title: "Fit Arena",
    status: "done",
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
      "Real-time chat(still unresponsive)",
      "Fitness community features",
    ],
    github: "https://github.com/FGPF0307/FitArena",
  },

  {
    number: "05",
    title: "DineAndGo",
    status: "done",
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

const tabs = [
  { id: "all", label: "All" },
  { id: "progress", label: "On Progress" },
  { id: "done", label: "Done" },
];

const zones = [
  { id: "progress", title: "On Progress", note: "still loading…", Icon: Hammer },
  { id: "done", title: "Done", note: "stage cleared", Icon: Trophy },
];

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const openProject = setSelectedProject;
  const closeProject = () => setSelectedProject(null);

  // lock page scroll while the modal is open
  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = "hidden";
    const onKey = (event) => event.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

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
          QUEST 03 / PROJECTS
        </motion.div>

        <div className="quest-tabs" role="tablist" aria-label="Filter projects">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={filter === tab.id}
              className={filter === tab.id ? "is-active" : ""}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
              <b>
                {tab.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.status === tab.id).length}
              </b>
            </button>
          ))}
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
          Stages I've cleared, and the ones
          still loading.
        </motion.p>
      </div>

      <div className="quest-board">
        {zones
          .filter((zone) => filter === "all" || filter === zone.id)
          .map(({ id, title, note, Icon }) => {
            const list = projects.filter((p) => p.status === id);

            return (
              <div key={id} className={`quest-zone zone-${id}`}>
                <div className="zone-title">
                  <Icon size={20} aria-hidden="true" />
                  <h3>{title}</h3>
                  <span>
                    {list.length} · {note}
                  </span>
                </div>

                <div className="zone-grid">
                  {list.map((project, index) => (
                    <motion.article
                      key={project.number}
                      className={`project-card project-${project.color} is-${project.status}`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      whileHover={{ y: -8 }}
                    >
                      <span className="stamp">
                        {project.status === "done"
                          ? "CLEARED"
                          : "IN PROGRESS"}
                      </span>

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

                        {project.status === "done" ? (
                          <div className="stars" aria-label="3 of 3 stars">
                            {[0, 1, 2].map((i) => (
                              <Star key={i} size={20} fill="currentColor" />
                            ))}
                          </div>
                        ) : (
                          <div className="build-bar" aria-label="Loading">
                            <i></i>
                          </div>
                        )}
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
                        {project.status === "done"
                          ? "View Project"
                          : "Peek Inside"}
                        <ArrowUpRight size={18} />
                      </button>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}
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
                    {selectedProject.category} /{" "}
                    {selectedProject.status === "done"
                      ? "Done"
                      : "On Progress"}
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
