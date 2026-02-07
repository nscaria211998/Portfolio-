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
                <span className="text-sm">Fort Worth, TX</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -left-4 bottom-1/4 glass px-4 py-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-sm">Since 2022</span>
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
                I&apos;m a Senior Data Scientist at Alcon leading AI/ML initiatives across
                modeling and simulation teams. I specialize in developing deep learning
                algorithms for surgical applications, building digital twins for ophthalmology
                devices, and translating physics-based simulations into deployable clinical tools.
              </p>

              <p className="text-muted mb-8 leading-relaxed">
                With a Master&apos;s from Purdue University in Industrial Engineering (Operations Research)
                and 6 provisional patents in surgical AI, I&apos;m passionate about bringing cutting-edge
                AI to healthcare. From intraoperative guidance systems to post-operative analysis
                applications, I build solutions that improve surgical precision and patient outcomes.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                  <Code className="w-4 h-4 text-accent" />
                  <span className="text-sm">MLOps Expert</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                  <span>👁️</span>
                  <span className="text-sm">Computer Vision</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                  <span>🏥</span>
                  <span className="text-sm">Healthcare AI</span>
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
            &ldquo;Transforming surgical precision through the power of AI.&rdquo;
          </blockquote>
          <p className="mt-4 text-accent">— Nikhil Scaria</p>
        </motion.div>
      </div>
    </section>
  );
}
