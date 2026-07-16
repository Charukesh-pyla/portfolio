import React from "react";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-[#09090B] py-12 px-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-secondary-text text-center md:text-left">
            &copy; {currentYear} AI Engineer & Full Stack Developer. All rights reserved.
          </p>
          <p className="text-xs text-secondary-text/60">
            Built with Next.js, React, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
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
          <a
            href="mailto:contact@example.com"
            className="text-secondary-text hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
