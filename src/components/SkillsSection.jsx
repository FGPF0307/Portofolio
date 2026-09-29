import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Brain,
  Smartphone,
  Globe,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Java", "C", "TypeScript"],
    color: "yellow",
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
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
    icon: Brain,
    title: "AI & Algorithms",
    items: ["Machine Learning", "Algorithms", "Problem Solving"],
    color: "green",
  },
  {
    icon: Smartphone,
    title: "Tools & Development",
    items: ["Flutter", "VS Code", "Android Studio", "Eclipse"],
    color: "pink",
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
          02 / SKILLS
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
                  <span key={item}>{item}</span>
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