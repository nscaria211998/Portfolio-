"use client";

import { motion } from "framer-motion";

const badges = [
  { emoji: "🤘", text: "40+ Clients" },
  { emoji: "🕒", text: "2+ Years in Dev" },
  { emoji: "📱", text: "15+ Live Products" },
  { emoji: "📌", text: "React Expert" },
  { emoji: "👌", text: "Pixel Perfect" },
  { emoji: "🦄", text: "Full Stack Dev" },
  { emoji: "⚡", text: "Lightning Fast Delivery" },
  { emoji: "🧠", text: "Strategy Driven" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

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
          Full-stack developer with a love for clean UI and fast apps
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
            className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/80 transition-all hover:scale-105"
          >
            Start Project
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-border rounded-full font-medium hover:bg-card transition-all hover:scale-105"
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
              className="flex-shrink-0 mx-3 px-4 py-2 bg-card border border-border rounded-full flex items-center gap-2"
            >
              <span>{badge.emoji}</span>
              <span className="text-sm whitespace-nowrap">{badge.text}</span>
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
