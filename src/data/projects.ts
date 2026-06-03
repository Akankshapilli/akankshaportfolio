export type ProjectStatus = "live" | "wip" | "soon";

export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  link: string | null;
  image: string;
  status: ProjectStatus;
  highlight: string;
  category: string;
  featured: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Velora Estates",
    tagline: "Luxury Real Estate Platform",
    description:
      "A modern real estate platform designed to showcase premium properties with a clean, responsive, and conversion-focused user experience. Built with performance and mobile-first usability at its core.",
    role: "UI/UX Designer & Frontend Developer",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion", "Vercel"],
    link: "https://velora-estates.vercel.app/",
    image: "/images/projects/velora-estates.png",
    status: "live",
    highlight:
      "Fully responsive luxury real estate experience with smooth interactions and mobile-first usability.",
    category: "Real Estate · Web App",
    featured: true,
    accentColor: "rgba(201,169,110,0.08)",
  },
  {
    id: 2,
    name: "Studio ARG",
    tagline: "Creative Studio Portfolio",
    description:
      "A professional portfolio and business website for an interior design and architecture studio — establishing a strong online presence with modern UI and performance-focused frontend.",
    role: "UI/UX Designer & Frontend Developer",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
    link: "https://studioarg.in/",
    image: "/images/projects/studio-arg.png",
    status: "live",
    highlight:
      "Live client delivery with strong visual branding and fully responsive design.",
    category: "Architecture · Portfolio",
    featured: false,
    accentColor: "rgba(139,120,90,0.08)",
  },
  {
    id: 3,
    name: "Café Ember",
    tagline: "Café & Lifestyle Brand",
    description:
      "A café and lifestyle brand website focused on immersive storytelling, emotional branding, and modern visual design. Built around brand identity and atmosphere.",
    role: "UI/UX Designer & Frontend Developer",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion", "Figma"],
    link: "https://cafe-ember.vercel.app/",
    image: "/images/projects/cafe-ember.png",
    status: "live",
    highlight:
      "Visually rich café experience centered around brand identity and responsive interaction design.",
    category: "Lifestyle · Branding",
    featured: false,
    accentColor: "rgba(180,100,60,0.08)",
  },
  {
    id: 4,
    name: "VivaSpaces",
    tagline: "Affordable Living, Simplified",
    description:
      "A modern accommodation platform designed to help students and working professionals discover affordable, comfortable, and well-equipped shared living spaces. Focused on seamless booking experiences, transparent information, and a mobile-first user experience.",
    role: "UI/UX Designer & Frontend Developer",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
    link: "https://vivaspaces.vercel.app/",
    image: "/images/projects/vivaspaces.png",
    status: "live",
    highlight:
      "Designed and developed a complete accommodation booking experience.",
    category: "Hospitality · Accommodation Platform",
    featured: false,
    accentColor: "rgba(201,169,110,0.08)",
  },
];

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  wip: "In Progress",
  soon: "Coming Soon",
};

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);
