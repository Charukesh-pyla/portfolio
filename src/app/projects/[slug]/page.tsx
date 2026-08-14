import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Brain, Network } from "lucide-react";
import { Github } from "@/components/Icons";
import TechBadge from "@/components/ui/TechBadge";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Render a clean customized architectural diagram using SVGs
  const renderArchitectureDiagram = (slug: string) => {
    if (slug === "agentic-repo-explorer") {
      return (
        <svg viewBox="0 0 800 240" className="w-full h-auto text-secondary-text">
          {/* Defs for gradients/arrows */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#F97316" />
            </marker>
          </defs>

          {/* Nodes */}
          {/* Node 1 */}
          <rect x="20" y="80" width="100" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="70" y="115" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">Git Repo</text>

          <path d="M 120 110 L 160 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 2 */}
          <rect x="170" y="80" width="110" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="225" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">AST Analyzer</text>
          <text x="225" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Scope Parser</text>

          <path d="M 280 110 L 320 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 3 */}
          <rect x="330" y="80" width="120" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="390" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">Gemini Embed</text>
          <text x="390" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Code Embeddings</text>

          <path d="M 450 110 L 490 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 4 */}
          <rect x="500" y="80" width="110" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="555" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">FAISS Graph</text>
          <text x="555" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Vector Storage</text>

          <path d="M 610 110 L 650 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 5 */}
          <rect x="660" y="80" width="120" height="60" rx="10" fill="#111113" stroke="#F97316" strokeWidth="1.5" />
          <text x="720" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">LangGraph Agent</text>
          <text x="720" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Query Router</text>
          
          {/* User Loop back */}
          <path d="M 720 80 C 720 30, 70 30, 70 80" fill="none" stroke="#27272A" strokeWidth="1" strokeDasharray="3,3" />
        </svg>
      );
    }
    
    if (slug === "cognitive-scheduler") {
      return (
        <svg viewBox="0 0 800 240" className="w-full h-auto text-secondary-text">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#F97316" />
            </marker>
          </defs>

          {/* Nodes */}
          {/* Node 1 */}
          <rect x="20" y="80" width="100" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="70" y="115" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">Task Trigger</text>

          <path d="M 120 110 L 160 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 2 */}
          <rect x="170" y="80" width="110" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="225" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">FastAPI Orchestrator</text>
          <text x="225" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Schedule Dispatch</text>

          <path d="M 280 110 L 320 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 3 */}
          <rect x="330" y="80" width="120" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="390" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">Docker Runtime</text>
          <text x="390" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Agent Containers</text>

          <path d="M 450 110 L 490 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 4 */}
          <rect x="500" y="80" width="110" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="555" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">MongoDB</text>
          <text x="555" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">State Telemetry</text>

          <path d="M 610 110 L 650 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 5 */}
          <rect x="660" y="80" width="120" height="60" rx="10" fill="#111113" stroke="#F97316" strokeWidth="1.5" />
          <text x="720" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">Reflection Agent</text>
          <text x="720" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Exception Solver</text>
          
          {/* Feedback loop to orchestrator */}
          <path d="M 720 140 C 720 190, 225 190, 225 140" fill="none" stroke="#27272A" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        </svg>
      );
    }

    if (slug === "xai-analytics-engine") {
      return (
        <svg viewBox="0 0 800 240" className="w-full h-auto text-secondary-text">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#F97316" />
            </marker>
          </defs>

          {/* Nodes */}
          {/* Node 1 */}
          <rect x="20" y="80" width="100" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="70" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">Prediction</text>
          <text x="70" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Data Feed</text>

          <path d="M 120 110 L 160 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 2 */}
          <rect x="170" y="80" width="110" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="225" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">FastAPI Router</text>
          <text x="225" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Payload Dispatch</text>

          <path d="M 280 110 L 320 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 3 */}
          <rect x="330" y="80" width="120" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="390" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">Celery Tasks</text>
          <text x="390" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Attribution Pool</text>

          <path d="M 450 110 L 490 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 4 */}
          <rect x="500" y="80" width="110" height="60" rx="10" fill="#111113" stroke="#27272A" strokeWidth="1.5" />
          <text x="555" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">SHAP & LIME</text>
          <text x="555" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Sampling Workers</text>

          <path d="M 610 110 L 650 110" fill="none" stroke="#F97316" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 5 */}
          <rect x="660" y="80" width="120" height="60" rx="10" fill="#111113" stroke="#F97316" strokeWidth="1.5" />
          <text x="720" y="110" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle">D3 Visualiser</text>
          <text x="720" y="125" fill="#A1A1AA" fontSize="9" fontFamily="monospace" textAnchor="middle">Attribution Graph</text>
        </svg>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Back Link */}
        <div className="relative z-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary-text hover:text-accent transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40">
          <div className="space-y-3">
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-accent/5 border border-accent/15"
              style={{ color: project.color, borderColor: `${project.color}30` }}
            >
              Case Study
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {project.name}
            </h1>
            <p className="text-xl text-secondary-text font-bold leading-normal font-sans max-w-2xl">
              {project.title}
            </p>
          </div>

          {/* CTA Links */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border hover:border-accent/40 text-secondary-text hover:text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent/10"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Hero Preview Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-zinc-900 shadow-2xl">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Overview & Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-8 space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide">Project Overview</h2>
            <p className="text-secondary-text leading-relaxed font-sans text-base">
              {project.overview}
            </p>
          </div>
          <div className="md:col-span-4 space-y-4 p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-xs font-mono uppercase tracking-wider text-secondary-text">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <TechBadge key={tag} label={tag} variant="pill" />
              ))}
            </div>
          </div>
        </div>

        {/* Problem & Solution Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-card/45 border border-border/60 space-y-3">
            <div className="inline-flex p-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/15">
              <Brain className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">The Problem Statement</h3>
            <p className="text-sm text-secondary-text leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card/45 border border-border/60 space-y-3">
            <div className="inline-flex p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/15">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">The Proposed Solution</h3>
            <p className="text-sm text-secondary-text leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Layout */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Blueprint</span>
            <h2 className="text-2xl font-bold text-white">System Architecture</h2>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border flex items-center justify-center overflow-x-auto">
            <div className="min-w-[640px] w-full">
              {renderArchitectureDiagram(project.slug)}
            </div>
          </div>
          <p className="text-sm text-secondary-text leading-relaxed font-sans max-w-3xl">
            {project.architectureDescription}
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl font-bold text-white">Core Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border space-y-3 hover:border-accent/30 transition-colors duration-300"
              >
                <h4 className="font-bold text-white text-base tracking-wide">{feature.title}</h4>
                <p className="text-sm text-secondary-text leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Challenges Panel */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Engineering</span>
            <h2 className="text-2xl font-bold text-white">Technical Challenges</h2>
          </div>
          <div className="space-y-4">
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Challenge column */}
                <div className="md:col-span-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                    Challenge {idx + 1}: {challenge.title}
                  </div>
                  <p className="text-sm text-secondary-text leading-relaxed font-sans">
                    {challenge.description}
                  </p>
                </div>
                {/* Resolution column */}
                <div className="md:col-span-6 space-y-2 border-t md:border-t-0 md:border-l border-border/40 pt-4 md:pt-0 md:pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1">
                    <Network className="h-3.5 w-3.5" />
                    Resolution
                  </div>
                  <p className="text-sm text-secondary-text leading-relaxed font-sans">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In-depth / Results Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/40">
          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-secondary-text">Implementation</h3>
            <p className="text-sm text-secondary-text/80 leading-relaxed font-sans">
              {project.implementation}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-secondary-text">Results</h3>
            <p className="text-sm text-secondary-text/80 leading-relaxed font-sans">
              {project.results}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-secondary-text">Lessons Learned</h3>
            <p className="text-sm text-secondary-text/80 leading-relaxed font-sans">
              {project.lessons}
            </p>
          </div>
        </div>

        {/* Back Link bottom */}
        <div className="pt-12 border-t border-border/20 flex items-center justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary-text hover:text-accent transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}
