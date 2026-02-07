"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "6",
    label: "Provisional Patents",
    icon: "📜",
  },
  {
    number: "4+",
    label: "Years at Alcon",
    icon: "🏥",
  },
  {
    number: "3.9",
    label: "Purdue GPA",
    icon: "🎓",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A track record of delivering quality work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl text-center shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-accent/30 transition-all group-hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-5xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-muted font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
