"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative w-full h-full bg-card border border-border rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-1/4 glass px-4 py-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Your Location</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -left-4 bottom-1/4 glass px-4 py-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-sm">Since 2023</span>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>

              <p className="text-muted mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer who loves turning ideas into
                beautiful, functional digital experiences. With expertise in modern
                web technologies, I focus on creating applications that are not only
                visually appealing but also performant and user-friendly.
              </p>

              <p className="text-muted mb-8 leading-relaxed">
                My journey in development started with curiosity and has evolved into
                a mission to build products that make a difference. I believe in clean
                code, intuitive design, and continuous learning.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                  <Code className="w-4 h-4 text-accent" />
                  <span className="text-sm">Clean Code Advocate</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                  <span>🎨</span>
                  <span className="text-sm">UI/UX Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                  <span>🚀</span>
                  <span className="text-sm">Performance Focused</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-muted italic">
            &ldquo;Head in the cloud. Code on the ground.&rdquo;
          </blockquote>
          <p className="mt-4 text-accent">— Nikhil Scaria</p>
        </motion.div>
      </div>
    </section>
  );
}
