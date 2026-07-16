"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Server, Database, Settings, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "AI / Machine Learning",
      icon: <Brain className="h-5 w-5 text-accent" />,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Agentic AI",
        "Large Language Models (LLMs)",
        "Explainable AI (XAI)",
        "Natural Language Processing (NLP)",
        "Prompt Engineering",
        "Transformers",
        "Scikit-learn",
      ],
    },
    {
      title: "Languages",
      icon: <Terminal className="h-5 w-5 text-accent" />,
      skills: ["Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Backend & Orchestration",
      icon: <Server className="h-5 w-5 text-accent" />,
      skills: ["FastAPI", "REST APIs", "LangChain", "LangGraph", "Gemini API"],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5 text-accent" />,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      title: "Databases & Vector Storage",
      icon: <Database className="h-5 w-5 text-accent" />,
      skills: ["MongoDB", "FAISS (Vector DB)", "PostgreSQL"],
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="h-5 w-5 text-accent" />,
      skills: ["Docker", "Git", "GitHub Actions", "VS Code"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto w-full scroll-mt-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Technical <span className="text-gradient">Toolset</span>
          </h2>
          <p className="text-secondary-text max-w-xl">
            A comprehensive overview of libraries, frameworks, systems, and concepts I leverage to construct intelligent architectures.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300 shadow-md shadow-black/5"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 border-b border-border/40 pb-3">
                <div className="p-2 rounded-lg bg-accent/5 border border-accent/10">
                  {category.icon}
                </div>
                <h3 className="font-bold text-white text-base tracking-wide">{category.title}</h3>
              </div>

              {/* Badges Container */}
              <div className="flex flex-wrap gap-2 mt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-background border border-border/80 text-secondary-text hover:text-white hover:border-accent/40 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
