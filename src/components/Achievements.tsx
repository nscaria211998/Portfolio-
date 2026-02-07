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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 bg-card border border-border rounded-3xl text-center hover:border-accent/50 transition-colors">
                <span className="text-4xl mb-4 block">{stat.icon}</span>
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-5xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-muted">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
