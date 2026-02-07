"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "AI Agent for Operating Room",
    description:
      "A holistic intelligent AI agent acting as a surgical assistant for eye surgeons. Integrates Vision-Language aware AI models, Robotics, and Voice agents to enable seamless surgical workflow in the operating room.",
    image: null,
    technologies: ["PyTorch", "Computer Vision", "NLP", "Robotics", "Edge AI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Surgical Video Analysis Platform",
    description:
      "An AI-powered platform that automatically segments ophthalmic procedures, extracts performance metrics, and enables advanced content-based video search to optimize surgical workflows and training.",
    image: null,
    technologies: ["Deep Learning", "TensorRT", "AWS", "React", "Video Analytics"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Risk-Based Quality Management System",
    description:
      "End-to-end RBQM system combining advanced statistical and ML methodologies to identify high-risk clinical trials and sites, enabling optimized site visit schedules. Provisional patent filed for algorithmic innovation.",
    image: null,
    technologies: ["Python", "ML", "Tableau", "AWS", "Clinical Analytics"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Automated Trocar Placement Guidance",
    description:
      "A novel AI-guided system designed to automate and improve trocar placement during ophthalmic surgical procedures such as vitrectomy.",
    image: null,
    technologies: ["Computer Vision", "PyTorch", "TensorRT", "NVIDIA Edge"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Rhexis Edge Registration System",
    description:
      "An AI-driven 2D/3D registration system that detects, tracks, and overlays the capsulorhexis edge during phacoemulsification to provide continuous surgical guidance.",
    image: null,
    technologies: ["Deep Learning", "3D Vision", "Real-time Processing"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Post-Operative Analysis Application",
    description:
      "AI-powered post-operative analysis MVP using React and cloud infrastructure, revolutionizing patient monitoring and surgical outcome tracking through intelligent video analysis.",
    image: null,
    technologies: ["React", "AWS", "Python", "Video Analysis", "MLOps"],
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
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className={`relative grid md:grid-cols-2 gap-8 p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-accent/30 transition-all ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image/Placeholder */}
                <div
                  className={`relative aspect-video bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl overflow-hidden flex items-center justify-center border border-border/50 ${
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
                      <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl">
                        <Folder className="w-12 h-12 text-accent" />
                      </div>
                      <span className="text-sm font-medium">Project Preview</span>
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
                        className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-border/50 rounded-full font-medium"
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
              className="group p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-accent/30 transition-all hover:-translate-y-2"
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
