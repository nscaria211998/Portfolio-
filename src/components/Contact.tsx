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
    <section id="contact" className="py-24 px-4 bg-card/50">
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
              className="p-8 bg-background border border-border rounded-3xl text-center hover:border-accent/50 transition-all group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <option.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-muted mb-6">{option.description}</p>
              <a
                href={option.action}
                className="inline-block px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/80 transition-all hover:scale-105"
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
          <p className="text-muted mb-2">Or reach me directly at</p>
          <a
            href="mailto:nikhilscaria10@gmail.com"
            className="text-xl font-medium hover:text-accent transition-colors"
          >
            nikhilscaria10@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
