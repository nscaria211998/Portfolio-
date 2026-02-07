"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Machine Learning",
    icon: "🧠",
    technologies: [
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "TensorRT", color: "#76B900" },
      { name: "Computer Vision", color: "#FF6F61" },
      { name: "NLP", color: "#4ECDC4" },
      { name: "LLMs", color: "#9B59B6" },
      { name: "RAG", color: "#3498DB" },
      { name: "Agentic AI", color: "#E74C3C" },
      { name: "OpenUSD", color: "#00D4AA" },
    ],
  },
  {
    title: "Programming & Tools",
    icon: "💻",
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "R", color: "#276DC3" },
      { name: "SQL", color: "#CC2927" },
      { name: "MATLAB", color: "#FF8C00" },
      { name: "React", color: "#61DAFB" },
      { name: "Git", color: "#F05032" },
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: "☁️",
    technologies: [
      { name: "AWS", color: "#FF9900" },
      { name: "SageMaker", color: "#FF9900" },
      { name: "S3", color: "#569A31" },
      { name: "MLOps", color: "#0DB7ED" },
      { name: "Claude Code", color: "#D97757" },
      { name: "MCP", color: "#6366F1" },
    ],
  },
  {
    title: "Visualization & Analytics",
    icon: "📊",
    technologies: [
      { name: "Tableau", color: "#E97627" },
      { name: "PowerBI", color: "#F2C811" },
      { name: "QuickSight", color: "#FF9900" },
      { name: "JIRA", color: "#0052CC" },
      { name: "Confluence", color: "#172B4D" },
      { name: "Data Lake", color: "#00D4AA" },
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
