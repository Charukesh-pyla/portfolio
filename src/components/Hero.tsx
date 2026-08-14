"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Heart, GraduationCap, Send, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import Image from "next/image";
import LiquidEther from "@/components/ui/LiquidEther";
import TechBadge from "@/components/ui/TechBadge";

/* ─── Main Hero ─────────────────────────────────────────────── */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const marqueeSkills = [
    "Python", "FastAPI", "React", "LangGraph", "LangChain", "Gemini",
    "Machine Learning", "Deep Learning", "LLMs", "NLP", "Prompt Engineering",
    "Agentic AI", "Explainable AI", "Docker", "MongoDB", "FAISS", "Git", "SQL",
  ];

  const metaCards = [
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Briefcase, label: "Current Status", value: "Student & AI Developer" },
    { icon: GraduationCap, label: "Studies", value: "Undergraduate Engineering" },
    { icon: Heart, label: "Interests", value: "Multi-Agent Systems, Graphic Design" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background LiquidEther — very subtle */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
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

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        >
          {/* ════════ LEFT COLUMN ════════ */}
          <div className="md:col-span-5 space-y-7">
            {/* Profile row: Avatar + Name + Role */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden border border-border bg-card">
                <Image
                  src="/avatar.png"
                  alt="Charukesh Pyla"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-0.5">
                <h1 className="text-2xl font-extrabold tracking-tight text-white leading-tight">
                  Charukesh Pyla
                </h1>
                <p className="text-sm font-mono text-accent">
                  AI Engineer &amp; Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Bio with inline tech badges */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-secondary-text leading-[1.9] font-sans"
            >
              I build intelligent systems focused on{" "}
              <TechBadge label="Machine Learning" variant="inline" />
              <TechBadge label="Agentic AI" variant="inline" />
              <TechBadge label="LLMs" variant="inline" />{" "}
              and{" "}
              <TechBadge label="Deep Learning" variant="inline" />
              . I love solving real-world problems through AI — exploring how intelligent systems learn, reason, and make decisions. My stack includes{" "}
              <TechBadge label="Python" variant="inline" />
              <TechBadge label="FastAPI" variant="inline" />
              <TechBadge label="LangGraph" variant="inline" />
              <TechBadge label="FAISS" variant="inline" />{" "}
              and{" "}
              <TechBadge label="React" variant="inline" />.
            </motion.p>

            {/* CTA Buttons + Social icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card border border-border hover:border-accent/40 text-secondary-text hover:text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                <FileText className="h-4 w-4" />
                Resume / CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-accent/10"
              >
                <Send className="h-3.5 w-3.5" />
                Get in touch
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-4 pl-2 border-l border-border/40">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-accent transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-accent transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent/5 border border-accent/15 tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>
          </div>

          {/* ════════ RIGHT COLUMN — Premium 2×2 Card Grid ════════ */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {metaCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border/60 hover:border-accent/30 hover:bg-card transition-all duration-300"
              >
                <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-secondary-text/60">
                    {label}
                  </h4>
                  <p className="text-sm font-semibold text-white leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Skills Marquee Ticker ── */}
      <div className="absolute bottom-16 left-0 right-0 w-full overflow-hidden border-y border-border/30 bg-[#111113]/25 py-3.5 backdrop-blur-[2px] z-10">
        <motion.div
          className="flex whitespace-nowrap gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
            <span
              key={idx}
              className="flex items-center gap-3 text-secondary-text/50 font-mono text-xs md:text-sm tracking-widest uppercase"
            >
              <span>{skill}</span>
              <span className="text-accent/60 text-lg font-bold">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
