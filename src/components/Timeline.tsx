"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award, GraduationCap, Users } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  category: "experience" | "education" | "milestone";
}

export default function Timeline() {
  const items: TimelineItem[] = [
    {
      date: "Ongoing",
      title: "Student & AI Developer",
      organization: "Undergraduate Engineering Program",
      description: "Focusing on core Computer Science topics, data structures, algorithms, and deep learning. Actively experimenting with LangGraph multi-agent architectures and LLM prompt engineering.",
      icon: <GraduationCap className="h-4 w-4" />,
      category: "education",
    },
    {
      date: "2025 - Present",
      title: "Graphic Design Team Lead",
      organization: "College Event & Branding Clubs",
      description: "Led the design team, managing branding, promotional campaigns, and visual content for multiple college events. Directed visual styling guidelines and asset creation.",
      icon: <Users className="h-4 w-4" />,
      category: "experience",
    },
    {
      date: "2024 - 2025",
      title: "Public Relations Core Member",
      organization: "College Event Committee",
      description: "Coordinated event outreach and marketing activities, contributing to audience engagement, sponsor networking, and successful event execution.",
      icon: <Users className="h-4 w-4" />,
      category: "experience",
    },
    {
      date: "2024",
      title: "AI Development Core Milestones",
      organization: "Self-Directed Projects",
      description: "Built and deployed custom RAG architectures and custom pipelines, exploring Explainable AI (XAI), transformers, and prompt optimization.",
      icon: <Award className="h-4 w-4" />,
      category: "milestone",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="experience" className="py-32 px-6 max-w-3xl mx-auto w-full scroll-mt-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Journey</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Experience & <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-secondary-text max-w-md mx-auto sm:mx-0 font-sans">
            A chronological look at my academic progress, club leadership roles, and technical milestones.
          </p>
        </div>

        {/* Timeline Path */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-border pl-6 ml-4 space-y-12"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-secondary-text group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                {item.icon}
              </div>

              {/* Content Panel */}
              <div className="space-y-2">
                {/* Date & Category */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary-text/80">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                  <span className="text-border">•</span>
                  <span className="text-accent uppercase tracking-wider text-[10px] bg-accent/5 px-2 py-0.5 rounded-full border border-accent/10">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                
                {/* Org */}
                <h4 className="text-sm font-semibold text-secondary-text">
                  {item.organization}
                </h4>

                {/* Description */}
                <p className="text-sm text-secondary-text/80 leading-relaxed font-sans max-w-2xl pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
