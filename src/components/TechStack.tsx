"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vite", color: "#646CFF" },
      { name: "Zustand", color: "#764ABC" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    technologies: [
      { name: "Node.js", color: "#339933" },
      { name: "Express", color: "#ffffff" },
      { name: "MongoDB", color: "#47A248" },
      { name: "GraphQL", color: "#E10098" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Prisma", color: "#2D3748" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    technologies: [
      { name: "Git & GitHub", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "Vercel", color: "#ffffff" },
      { name: "AWS", color: "#FF9900" },
      { name: "Linux", color: "#FCC624" },
    ],
  },
  {
    title: "Design & Workflow",
    icon: "✨",
    technologies: [
      { name: "Figma", color: "#F24E1E" },
      { name: "Notion", color: "#ffffff" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Postman", color: "#FF6C37" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            The technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 bg-background border border-border rounded-2xl hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent/50 transition-colors cursor-default flex items-center gap-2"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
