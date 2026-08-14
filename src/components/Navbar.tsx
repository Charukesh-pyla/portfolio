"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Monitor scroll for styling and active sections
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is close to top of viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
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
    <>
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-all duration-300 ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-xl shadow-black/10">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group text-white font-medium text-lg tracking-tight transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }}
          >
            <Terminal className="h-4.5 w-4.5 text-accent transition-transform group-hover:rotate-6" />
            <span className="font-mono text-base font-bold">
              dev<span className="text-accent">.</span>ai
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-all duration-200 hover:text-white ${
                    isActive ? "text-accent" : "text-secondary-text"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Button (Resume) */}
          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-accent border border-accent/20 bg-accent/5 hover:bg-accent hover:text-white hover:border-accent px-4 py-2 rounded-full transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-secondary-text hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer (with slide & fade-in) */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xl font-semibold tracking-wide transition-all ${
                  isActive ? "text-accent scale-105" : "text-secondary-text hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-sm font-semibold text-accent border border-accent/30 bg-accent/5 hover:bg-accent hover:text-white hover:border-accent px-6 py-2.5 rounded-full transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
