export type ExperienceStatus = "current" | "past";

export interface Experience {
  id: number;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  status: ExperienceStatus;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Viva Spaces",
    role: "Frontend Developer & Product Designer",
    type: "Full-time · Remote",
    period: "Jul 2025 — Present",
    location: "Remote",
    description:
      "A property-tech platform focused on digital real estate experiences — designing and building responsive web interfaces for property discovery and booking workflows.",
    highlights: [
      "Contributed to the design and frontend development of a PropTech accommodation booking platform",
      "Designed and implemented key user flows, screens and responsive UI components using Next.js, React, TypeScript and TailwindCSS",
      "Collaborated with stakeholders to improve booking workflows and user experience",
      "Worked across UX design, frontend implementation and product iteration",
    ],
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "PropTech"],
    status: "current",
  },
  {
    id: 2,
    company: "Studio ARG",
    role: "UI/UX Designer & Frontend Developer",
    type: "Freelance · On-site",
    period: "Jun 2025 — Jul 2025",
    location: "Hyderabad, India",
    description:
      "Designed and developed the complete website for a Hyderabad-based architecture and interior design studio — from branding to production deployment.",
    highlights: [
      "Designed and developed the complete website from scratch for a Hyderabad-based architecture studio",
      "Created branding, information architecture, wireframes, design systems and frontend implementation",
      "Managed client communication, design, development, testing and deployment end-to-end",
      "Delivered a production-ready website at studioarg.in",
    ],
    tags: ["Next.js", "TailwindCSS", "Figma", "Client Work", "Architecture"],
    status: "past",
  },
  {
    id: 3,
    company: "XverseMeta Technologies",
    role: "Frontend Designer & UX Lead",
    type: "Full-time · On-site",
    period: "Jan 2025 — Jun 2025",
    location: "Hyderabad, India",
    description:
      "A B2B SaaS platform serving 50K+ users — led UX design and frontend execution for scalable dashboards and AI-assisted onboarding flows.",
    highlights: [
      "Led UX and interface design initiatives across SaaS platforms, dashboards and web-based products",
      "Designed and refined 100+ screens and product modules across multiple client and internal projects",
      "Collaborated closely with developers, product teams and stakeholders to translate business requirements",
      "Bridged design and frontend implementation to ensure accurate execution and improved product quality",
    ],
    tags: ["SaaS", "Figma", "React", "Dashboards", "UX Lead"],
    status: "past",
  },
  {
    id: 4,
    company: "Freelance",
    role: "UI/UX Designer & Frontend Developer",
    type: "Freelance · Remote",
    period: "Jan 2022 — Present",
    location: "Remote",
    description:
      "3+ years of independent client work building responsive websites and digital experiences for brands across real estate, lifestyle, hospitality and product industries.",
    highlights: [
      "Built and shipped Velora Estates — a luxury real estate platform with property discovery flows and mobile-first layouts",
      "Designed and developed Café Ember — a premium hospitality experience with cinematic storytelling and immersive branding",
      "Delivered wireframes, design systems and responsive UI across multiple client projects",
      "Assisted in usability testing and iterative UI improvements across projects",
    ],
    tags: [
      "Next.js",
      "Figma",
      "Wireframing",
      "Usability Testing",
      "Client Work",
    ],
    status: "current",
  },
];

export const experienceStats = {
  companies: "3",
  yearsActive: "3+",
  usersImpacted: "50K+",
};
