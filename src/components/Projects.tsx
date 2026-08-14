"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/Icons";
import { projects } from "@/data/projects";
import TechBadge from "@/components/ui/TechBadge";

export default function Projects() {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto w-full scroll-mt-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Featured Work</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Production <span className="text-gradient">Systems</span>
          </h2>
          <p className="text-secondary-text max-w-md mx-auto sm:mx-0 font-sans">
            A showcase of agentic structures, machine learning microservices, and end-to-end architectures I have designed.
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20"
            >
              {/* Header Colored Strip */}
              <div 
                className="h-1 w-full shrink-0" 
                style={{ backgroundColor: project.color }}
              />

              {/* Preview Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-border/40 shrink-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/85 via-card/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-mono text-white flex items-center gap-1">
                    Read Case Study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0 z-0" aria-hidden="true" />
                      {project.name}
                    </Link>
                  </h3>
                  
                  <p className="text-xs font-mono text-secondary-text/85 uppercase tracking-wider font-bold">
                    {project.title}
                  </p>

                  <p className="text-sm text-secondary-text leading-relaxed font-sans line-clamp-3 pt-1">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between relative z-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags.slice(0, 3).map((tag) => (
                      <TechBadge key={tag} label={tag} variant="pill" />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-text hover:text-white transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-4.5 w-4.5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-white transition-colors duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
