"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration. Built with modern technologies for optimal performance.",
    image: null,
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team workspaces.",
    image: null,
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Chat Interface",
    description:
      "Modern chat application powered by AI with conversation history, markdown support, and code highlighting.",
    image: null,
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with real-time metrics, charts, and customizable widgets.",
    image: null,
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Social Media App",
    description:
      "Full-stack social platform with posts, comments, likes, and real-time notifications.",
    image: null,
    technologies: ["Next.js", "Prisma", "GraphQL", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description:
      "CLI tool that generates beautiful portfolio websites from a simple configuration file.",
    image: null,
    technologies: ["Node.js", "TypeScript", "EJS", "Commander.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on recently
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className={`relative grid md:grid-cols-2 gap-8 p-8 bg-card border border-border rounded-3xl hover:border-accent/50 transition-all ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image/Placeholder */}
                <div
                  className={`relative aspect-video bg-background rounded-2xl overflow-hidden flex items-center justify-center border border-border ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-muted">
                      <Folder className="w-16 h-16" />
                      <span className="text-sm">Project Preview</span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-background/90 rounded-full hover:bg-accent hover:text-white transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-background/90 rounded-full hover:bg-accent hover:text-white transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`flex flex-col justify-center ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-background border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-accent hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-muted">
            Other Noteworthy Projects
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-accent" />
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label="View source"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label="View live"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
