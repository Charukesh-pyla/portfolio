"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Trophy, Code2 } from "lucide-react";

interface Achievement {
  title: string;
  category: string;
  detail: string;
  icon: React.ReactNode;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: "Hackathon Participant & Builder",
      category: "Hackathons",
      detail: "Collaborated in multi-disciplinary teams to build functional AI solutions, prompt systems, and RAG pipelines within 24-48 hour limits.",
      icon: <Code2 className="h-5 w-5 text-accent" />,
    },
    {
      title: "Competitive Programming",
      category: "Problem Solving",
      detail: "Active participant in algorithmic contests, developing optimized analytical thinking and clean logic solving complex coding problems.",
      icon: <Trophy className="h-5 w-5 text-accent" />,
    },
    {
      title: "AI & Full Stack Certifications",
      category: "Certifications",
      detail: "Earned industry credentials covering Machine Learning core disciplines, API construction, and modern web application development.",
      icon: <ShieldCheck className="h-5 w-5 text-accent" />,
    },
  ];

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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="achievements" className="py-32 px-6 max-w-5xl mx-auto w-full scroll-mt-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Recognition</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Honors & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-secondary-text max-w-md font-sans">
            Key milestones, learning validations, and competitive achievements.
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/5"
            >
              {/* Icon wrapper */}
              <div className="p-3 rounded-xl bg-accent/5 border border-accent/10 w-fit">
                {item.icon}
              </div>

              {/* Title & Info */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/5 px-2 py-0.5 rounded-full border border-accent/10 w-fit block font-bold">
                  {item.category}
                </span>
                <h3 className="font-bold text-white text-lg tracking-wide">{item.title}</h3>
                <p className="text-sm text-secondary-text leading-relaxed font-sans">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
