import React from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Hero — Profile card + bio (replaces separate About section) */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Timeline & Experience Section */}
      <Timeline />

      {/* Achievements Section */}
      <Achievements />

      {/* Featured Projects Showcase */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
