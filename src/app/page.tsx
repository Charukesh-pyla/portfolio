import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Timeline & Experience Section */}
      <Timeline />
      
      {/* Achievements Section */}
      <Achievements />
      
      {/* Temporary anchors for remaining sections */}
      <div id="projects" className="h-[20vh] border-t border-border/20" />
      <div id="contact" className="h-[20vh] border-t border-border/20" />
    </div>
  );
}
