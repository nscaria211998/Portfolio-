"use client";

import { motion } from "framer-motion";

const badges = [
  { emoji: "🧠", text: "AI/ML Leader" },
  { emoji: "🔬", text: "6 Patents Filed" },
  { emoji: "🎤", text: "SCDM 2025 Speaker" },
  { emoji: "👁️", text: "Computer Vision" },
  { emoji: "🏥", text: "Healthcare AI" },
  { emoji: "🤖", text: "Agentic AI" },
  { emoji: "📊", text: "Clinical Data Science" },
  { emoji: "🎓", text: "Purdue MS, GPA 3.9" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

      {/* Animated grid with enhanced opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl mb-4"
        >
          Hello World 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          I&apos;m <span className="gradient-text">Nikhil</span>, nice to meet you
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted mb-12"
        >
          Senior Data Scientist at Alcon | AI/ML | Computer Vision | Digital Twins
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium hover:from-indigo-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-full font-medium hover:border-accent/50 hover:shadow-lg transition-all hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* Scrolling badges */}
      <div className="absolute bottom-20 w-full overflow-hidden">
        <div className="flex animate-marquee">
          {[...badges, ...badges].map((badge, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 px-5 py-2.5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
            >
              <span className="text-lg">{badge.emoji}</span>
              <span className="text-sm font-medium whitespace-nowrap">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
