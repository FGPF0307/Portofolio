import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Smartphone,
  Rocket,
  Webhook,
  PenTool,
  MousePointerClick,
  Globe,
} from "lucide-react";

// brand logos live in public/icons; tools without a logo use a drawn icon
const logos = {
  Java: "java", C: "c", TypeScript: "typescript", HTML: "html", CSS: "css",
  JavaScript: "javascript", "React.js": "react", MySQL: "mysql",
  Supabase: "supabase", Figma: "figma", Flutter: "flutter",
  "VS Code": "vscode", Laravel: "laravel", "Express.js": "express", Git: "git", GitHub: "github", Docker: "docker", PostgreSQL: "postgresql", Python: "python", "Android Studio": "androidstudio", Eclipse: "eclipse",
};
const fallbackIcons = { "REST API": Webhook, SQL: Database, Prototyping: PenTool, HCI: MousePointerClick };

function ToolChip({ name }) {
  const Fallback = fallbackIcons[name];

  return (
    <span className="tool-chip">
      {logos[name] ? (
        <img src={`/icons/${logos[name]}.svg`} alt="" width="16" height="16" />
      ) : (
        Fallback && <Fallback size={16} strokeWidth={2.5} aria-hidden="true" />
      )}
      {name}
    </span>
  );
}

const skills = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Java", "C", "Python", "TypeScript"],
    color: "yellow",
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Express.js", "Laravel"],
    color: "green",
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "SQL", "Supabase"],
    color: "pink",
  },
  {
    icon: Palette,
    title: "UI / UX",
    items: ["Figma", "Prototyping", "HCI"],
    color: "yellow",
  },
  {
    icon: Smartphone,
    title: "Tools & Development",
    items: ["Flutter", "VS Code", "Android Studio", "Eclipse", "Git", "GitHub"],
    color: "pink",
  },
  {
    icon: Rocket,
    title: "Next Level",
    items: ["Docker", "PostgreSQL", "REST API"],
    color: "next",
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <motion.div
          className="section-number"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          QUEST 02 / SKILLS
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Things I'm learning, building,
          <br />
          and experimenting with.
        </motion.p>
      </div>

      <div className="skills-title-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My <span>toolbox.</span>
        </motion.h2>

        <motion.div
          className="skills-doodle"
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ↘ pick a card
        </motion.div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              className={`skill-card skill-${skill.color}`}
              initial={{
                opacity: 0,
                y: 50,
                rotate: index % 2 === 0 ? -2 : 2,
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
                y: -8,
                rotate: 0,
                scale: 1.02,
              }}
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  <Icon size={26} strokeWidth={2.5} />
                </div>

                <span className="skill-index">
                  0{index + 1}
                </span>
              </div>

              <h3>{skill.title}</h3>

              <div className="skill-items">
                {skill.items.map((item) => (
                  <ToolChip key={item} name={item} />
                ))}
              </div>

              <div className="skill-arrow">↗</div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="skills-bottom-note"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>✦</span>
        <p>
          Still learning. Still experimenting.
          <strong> That's the fun part.</strong>
        </p>
        <span>✦</span>
      </motion.div>
    </section>
  );
}

export default SkillsSection;