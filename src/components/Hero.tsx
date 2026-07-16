"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import LiquidEther from "@/components/ui/LiquidEther";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // expo-like easing for premium feel
      },
    },
  };

  const marqueeSkills = [
    "Python", "FastAPI", "React", "LangGraph", "LangChain", "Gemini", 
    "Machine Learning", "Deep Learning", "LLMs", "NLP", "Prompt Engineering", 
    "Agentic AI", "Explainable AI", "Docker", "MongoDB", "FAISS", "Git", "SQL"
  ];

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background LiquidEther with low opacity */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <LiquidEther
          colors={["#09090B", "#18181B", "#3F3F46", "#F97316"]}
          mouseForce={15}
          cursorSize={80}
          isViscous={false}
          viscous={20}
          iterationsViscous={24}
          iterationsPoisson={24}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.25}
          autoIntensity={1.2}
          takeoverDuration={0.3}
          autoResumeDelay={2000}
          autoRampDuration={1.0}
        />
      </div>

      {/* Hero content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Subtitle Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center">
            <span className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent/5 border border-accent/15 tracking-widest uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.1] text-gradient"
          >
            I build intelligent <br />
            systems for the web.
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants} 
            className="text-base md:text-xl text-secondary-text max-w-2xl mx-auto leading-relaxed font-sans"
          >
            I am a <span className="text-white font-medium">Full Stack & AI Engineer</span> specializing in designing and deploying production-grade LLM workflows, custom agent architectures, and elegant user interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-accent/10"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-accent/40 text-secondary-text hover:text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center gap-6 pt-8 text-secondary-text"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Marquee Ticker */}
      <div className="absolute bottom-16 left-0 right-0 w-full overflow-hidden border-y border-border/30 bg-[#111113]/25 py-3.5 backdrop-blur-[2px] z-10">
        <motion.div
          className="flex whitespace-nowrap gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          <div className="flex gap-12 text-secondary-text/50 font-mono text-xs md:text-sm tracking-widest uppercase items-center">
            {marqueeSkills.map((skill, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span>{skill}</span>
                <span className="text-accent/60 text-lg font-bold">•</span>
              </span>
            ))}
          </div>
          <div className="flex gap-12 text-secondary-text/50 font-mono text-xs md:text-sm tracking-widest uppercase items-center">
            {marqueeSkills.map((skill, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-3">
                <span>{skill}</span>
                <span className="text-accent/60 text-lg font-bold">•</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Subtle bottom fade to black to blend with subsequent section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
