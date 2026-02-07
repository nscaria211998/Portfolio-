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
    <section id="stack" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-purple-50/50 dark:from-indigo-950/20 dark:via-transparent dark:to-purple-950/20" />
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
              className="p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-accent/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-xl">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-4 py-2 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-border/50 rounded-full text-sm hover:border-accent/50 hover:shadow-md transition-all cursor-default flex items-center gap-2 font-medium"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full shadow-sm"
                      style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}40` }}
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
