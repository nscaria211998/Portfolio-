"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Users } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "Start Project",
    description: "Have an idea? Let's bring it to life.",
    action: "mailto:nikhilscaria10@gmail.com?subject=New Project Inquiry",
    buttonText: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Let's Talk",
    description: "Quick question or just want to say hi.",
    action: "mailto:nikhilscaria10@gmail.com?subject=Hello!",
    buttonText: "Get in Touch",
  },
  {
    icon: Users,
    title: "Collaborations",
    description: "Open to exciting collaborations and partnerships.",
    action: "mailto:nikhilscaria10@gmail.com?subject=Collaboration Opportunity",
    buttonText: "Collaborate",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/50 via-transparent to-purple-50/50 dark:from-indigo-950/20 dark:via-transparent dark:to-purple-950/20" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ready to start your next project? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl text-center shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-accent/30 transition-all group hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <option.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-muted mb-6">{option.description}</p>
              <a
                href={option.action}
                className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium hover:from-indigo-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                {option.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Email display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted mb-3">Or reach me directly at</p>
          <a
            href="mailto:nikhilscaria10@gmail.com"
            className="inline-block text-xl font-medium px-6 py-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full hover:border-accent/50 hover:text-accent transition-all shadow-sm hover:shadow-md"
          >
            nikhilscaria10@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
