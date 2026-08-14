import React from "react";
import {
  SiPython,
  SiFastapi,
  SiReact,
  SiDocker,
  SiMongodb,
  SiGit,
  SiScikitlearn,
  SiHuggingface,
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiLangchain,
  SiGooglegemini,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedis,
  SiKubernetes,
  SiFlask,
} from "react-icons/si";
import { IconType } from "react-icons";

/* ─── Icon Registry ─────────────────────────────────────── */
interface TechMeta {
  icon?: IconType;
  color: string;
}

const techRegistry: Record<string, TechMeta> = {
  // Languages
  Python:               { icon: SiPython,        color: "#3776AB" },
  TypeScript:           { icon: SiTypescript,     color: "#3178C6" },
  JavaScript:           { icon: SiJavascript,     color: "#F7DF1E" },
  SQL:                  { icon: SiPostgresql,     color: "#4169E1" },

  // AI/ML — with logos
  "Scikit-learn":       { icon: SiScikitlearn,   color: "#F7931E" },
  "Hugging Face":       { icon: SiHuggingface,   color: "#FFD21E" },
  TensorFlow:           { icon: SiTensorflow,    color: "#FF6F00" },
  PyTorch:              { icon: SiPytorch,       color: "#EE4C2C" },
  NumPy:                { icon: SiNumpy,         color: "#013243" },
  Pandas:               { icon: SiPandas,        color: "#150458" },
  Gemini:               { icon: SiGooglegemini,  color: "#4285F4" },
  LangChain:            { icon: SiLangchain,     color: "#1C3C3C" },
  LangGraph:            { icon: SiLangchain,     color: "#1C3C3C" },

  // AI/ML — text-only (no official logo)
  "Machine Learning":   { color: "#F97316" },
  "Deep Learning":      { color: "#F97316" },
  LLMs:                 { color: "#F97316" },
  "Agentic AI":         { color: "#F97316" },
  "Explainable AI":     { color: "#F97316" },
  XAI:                  { color: "#F97316" },
  NLP:                  { color: "#F97316" },
  "Prompt Engineering": { color: "#F97316" },
  Transformers:         { color: "#F97316" },
  FAISS:                { color: "#00AEFF" },
  "REST APIs":          { color: "#A1A1AA" },

  // Backend / APIs
  FastAPI:              { icon: SiFastapi,       color: "#009688" },
  Flask:                { icon: SiFlask,         color: "#FFFFFF" },
  "Node.js":            { icon: SiNodedotjs,     color: "#339933" },

  // Frontend
  React:                { icon: SiReact,         color: "#61DAFB" },
  "Next.js":            { icon: SiNextdotjs,     color: "#FFFFFF" },
  "Tailwind CSS":       { icon: SiTailwindcss,   color: "#06B6D4" },

  // Databases
  MongoDB:              { icon: SiMongodb,       color: "#47A248" },
  PostgreSQL:           { icon: SiPostgresql,    color: "#4169E1" },
  MySQL:                { icon: SiMysql,         color: "#4479A1" },
  Redis:                { icon: SiRedis,         color: "#DC382D" },

  // DevOps / Tools
  Docker:               { icon: SiDocker,        color: "#2496ED" },
  Git:                  { icon: SiGit,           color: "#F05032" },
  Kubernetes:           { icon: SiKubernetes,    color: "#326CE5" },
};

/* ─── Resolve tech entry ─────────────────────────────────── */
function resolveTech(label: string): TechMeta {
  if (techRegistry[label]) return techRegistry[label];
  const key = Object.keys(techRegistry).find(
    (k) => k.toLowerCase() === label.toLowerCase()
  );
  return key ? techRegistry[key] : { color: "#A1A1AA" };
}

/* ─── Badge Variants ─────────────────────────────────────── */
export type TechBadgeVariant = "pill" | "inline" | "card";

interface TechBadgeProps {
  label: string;
  variant?: TechBadgeVariant;
  className?: string;
}

export default function TechBadge({ label, variant = "pill", className = "" }: TechBadgeProps) {
  const meta = resolveTech(label);
  const Icon = meta.icon;

  if (variant === "inline") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold text-secondary-text bg-card border border-border/70 hover:border-accent/30 hover:text-white transition-all duration-200 cursor-default align-middle mx-0.5 ${className}`}
      >
        {Icon ? (
          <Icon style={{ color: meta.color }} className="h-3 w-3 shrink-0" />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: meta.color }} />
        )}
        {label}
      </span>
    );
  }

  if (variant === "card") {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-secondary-text bg-background border border-border/70 hover:border-accent/30 hover:text-white transition-all duration-200 ${className}`}
      >
        {Icon ? (
          <Icon style={{ color: meta.color }} className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: meta.color }} />
        )}
        {label}
      </span>
    );
  }

  // Default: "pill"
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-background border border-border/60 text-secondary-text hover:text-white hover:border-accent/30 transition-all duration-200 ${className}`}
    >
      {Icon ? (
        <Icon style={{ color: meta.color }} className="h-3 w-3 shrink-0" />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: meta.color }} />
      )}
      {label}
    </span>
  );
}
