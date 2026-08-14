"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Heart, Cpu, GraduationCap } from "lucide-react";

export default function About() {
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
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto w-full scroll-mt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
      >
        {/* Left column: Header & AI Focus */}
        <div className="md:col-span-5 space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Designing <span className="text-gradient">Intelligent</span> Systems.
            </h2>
          </motion.div>

          {/* AI Focus Block */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-card border border-border space-y-4 hover:border-accent/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-white text-base">Core AI Focus</h3>
            </div>
            <p className="text-sm text-secondary-text leading-relaxed">
              AI/ML enthusiast focused on building intelligent systems with Machine Learning, Agentic AI, LLMs, and Deep Learning.
            </p>
          </motion.div>
        </div>

        {/* Right column: Bio & Metadata Cards */}
        <div className="md:col-span-7 space-y-6">
          {/* Bio text */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-secondary-text leading-relaxed font-sans">
              I love solving real-world problems through AI while continuously exploring how intelligent systems learn, reason, and make decisions.
            </p>
          </motion.div>

          {/* Details Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Location */}
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/60">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-secondary-text/60">Location</h4>
                <p className="text-sm font-semibold text-white">India</p>
              </div>
            </div>

            {/* Current Role */}
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/60">
              <Briefcase className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-secondary-text/60">Current Status</h4>
                <p className="text-sm font-semibold text-white">Student & AI Developer</p>
              </div>
            </div>

            {/* Studies */}
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/60">
              <GraduationCap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-secondary-text/60">Studies</h4>
                <p className="text-sm font-semibold text-white">Undergraduate Engineering</p>
              </div>
            </div>

            {/* Interests */}
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/60">
              <Heart className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-secondary-text/60">Interests</h4>
                <p className="text-sm font-semibold text-white text-wrap">
                  Multi-Agent Systems, Graphic Design, Web Dev
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
