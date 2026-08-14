"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission flow
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto w-full scroll-mt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
      >
        {/* Left Side: Info */}
        <div className="md:col-span-5 space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Connect</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Start a <span className="text-gradient">Conversation</span>.
            </h2>
            <p className="text-secondary-text max-w-sm font-sans pt-2">
              Feel free to reach out if you want to collaborate on AI projects, discuss software engineering, or just say hello.
            </p>
          </motion.div>

          {/* Social details list */}
          <motion.div variants={itemVariants} className="space-y-4 pt-4 border-t border-border/40">
            <a
              href="mailto:charukeshpyla247@gmail.com"
              className="flex items-center gap-3 text-secondary-text hover:text-white transition-colors duration-200"
            >
              <Mail className="h-4.5 w-4.5 text-accent" />
              <span className="text-sm font-semibold">charukeshpyla247@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/charukesh-pyla-937aa02b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary-text hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-4.5 w-4.5 text-accent" />
              <span className="text-sm font-semibold">LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/Charukesh-pyla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary-text hover:text-white transition-colors duration-200"
            >
              <Github className="h-4.5 w-4.5 text-accent" />
              <span className="text-sm font-semibold">GitHub Profile</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-7 p-6 rounded-2xl bg-card border border-border space-y-6 shadow-xl shadow-black/10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
                <p className="text-sm text-secondary-text max-w-xs font-sans">
                  Thanks for reaching out! I will review your inquiry and get back to you shortly.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono text-secondary-text uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-text/40 focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono text-secondary-text uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-text/40 focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-secondary-text uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="How can I help?"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-text/40 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-accent/10 focus:outline-none cursor-pointer"
              >
                Send Message
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
