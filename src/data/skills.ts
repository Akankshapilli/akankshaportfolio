export type SkillLevel = "Expert" | "Proficient" | "Familiar";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  color: string;
  glow: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend Dev",
    description:
      "Building responsive, performant interfaces from scratch using modern frameworks and clean code practices.",
    color: "rgba(59,130,246,0.08)",
    glow: "rgba(59,130,246,0.22)",
    skills: [
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Proficient" },
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TailwindCSS", level: "Expert" },
      { name: "Framer Motion", level: "Proficient" },
      { name: "Responsive Design", level: "Expert" },
      { name: "REST API Integration", level: "Proficient" },
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Vercel", level: "Expert" },
    ],
  },

  {
    id: "design",
    label: "UI/UX Design",
    description:
      "Designing user-centered interfaces — from early wireframes to high-fidelity, interactive Figma prototypes.",
    color: "rgba(168,85,247,0.08)",
    glow: "rgba(168,85,247,0.22)",
    skills: [
      { name: "Figma", level: "Expert" },
      { name: "Wireframing", level: "Expert" },
      { name: "Prototyping", level: "Expert" },
      { name: "User Flows", level: "Expert" },
      { name: "Interaction Design", level: "Proficient" },
      { name: "Usability Testing", level: "Proficient" },
      { name: "Design Systems", level: "Expert" },
      { name: "Visual Design", level: "Expert" },
      { name: "Canva", level: "Expert" },
      { name: "Component Libraries", level: "Proficient" },
    ],
  },

  {
    id: "tools",
    label: "Tools & Stack",
    description:
      "The platforms, environments, and dev tools I use daily to ship fast and iterate efficiently.",
    color: "rgba(249,115,22,0.08)",
    glow: "rgba(249,115,22,0.22)",
    skills: [
      { name: "VS Code", level: "Expert" },
      { name: "Chrome DevTools", level: "Expert" },
      { name: "Postman", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "Vercel", level: "Expert" },
      { name: "Git", level: "Proficient" },
      { name: "Performance Optimization", level: "Proficient" },
      { name: "SEO Basics", level: "Proficient" },
      { name: "Cross-Browser Compat.", level: "Expert" },
    ],
  },

  {
    id: "ai",
    label: "AI Workflow",
    description:
      "Leveraging AI-assisted workflows to accelerate development, improve design decisions, and ship smarter.",
    color: "rgba(16,185,129,0.08)",
    glow: "rgba(16,185,129,0.22)",
    skills: [
      { name: "ChatGPT", level: "Expert" },
      { name: "Claude", level: "Expert" },
      { name: "GitHub Copilot", level: "Proficient" },
      { name: "v0", level: "Proficient" },
      { name: "Cursor", level: "Proficient" },
      { name: "AI-Assisted UI Dev", level: "Expert" },
      { name: "Prompt Engineering", level: "Proficient" },
      { name: "Design-to-Code", level: "Expert" },
    ],
  },

  {
    id: "concepts",
    label: "Concepts",
    description:
      "The cross-functional knowledge that connects design thinking with product and engineering execution.",
    color: "rgba(244,63,94,0.08)",
    glow: "rgba(244,63,94,0.22)",
    skills: [
      { name: "Component Architecture", level: "Expert" },
      { name: "Design Thinking", level: "Expert" },
      { name: "Agile / Iterative Dev", level: "Proficient" },
      { name: "Design-to-Dev Handoff", level: "Expert" },
      { name: "Data-Driven Design", level: "Proficient" },
      { name: "Accessibility (a11y)", level: "Familiar" },
      { name: "Product Thinking", level: "Proficient" },
    ],
  },
];

export const levelConfig = {
  Expert: {
    color: "#ffffff",
    bg: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.18)",
    dots: 3,
  },

  Proficient: {
    color: "#d4d4d8",
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.12)",
    dots: 2,
  },

  Familiar: {
    color: "#a1a1aa",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.08)",
    dots: 1,
  },
};

export const marqueeSkills: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "Figma",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vercel",
  "Git",
  "ChatGPT",
  "Claude",
  "v0",
  "Cursor",
  "REST APIs",
  "Responsive Design",
];

export const allSkills: Skill[] = skillCategories.flatMap((c) => c.skills);
