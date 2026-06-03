"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import { Code2, Layers, Sparkles, ArrowRight } from "lucide-react";
import { FaFigma } from "react-icons/fa";

const tagColors: Record<string, { color: string; bg: string; border: string }> =
  {
    "Next.js": {
      color: "#F5F5F5",
      bg: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.14)",
    },

    React: {
      color: "#7DD3FC",
      bg: "rgba(125,211,252,0.08)",
      border: "rgba(125,211,252,0.18)",
    },

    TypeScript: {
      color: "#60A5FA",
      bg: "rgba(96,165,250,0.08)",
      border: "rgba(96,165,250,0.18)",
    },

    JavaScript: {
      color: "#FACC15",
      bg: "rgba(250,204,21,0.08)",
      border: "rgba(250,204,21,0.18)",
    },

    TailwindCSS: {
      color: "#67E8F9",
      bg: "rgba(103,232,249,0.08)",
      border: "rgba(103,232,249,0.18)",
    },

    "Framer Motion": {
      color: "#FB7185",
      bg: "rgba(251,113,133,0.08)",
      border: "rgba(251,113,133,0.18)",
    },

    Figma: {
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.08)",
      border: "rgba(245,158,11,0.18)",
    },

    FigJam: {
      color: "#C084FC",
      bg: "rgba(192,132,252,0.08)",
      border: "rgba(192,132,252,0.18)",
    },

    Canva: {
      color: "#22D3EE",
      bg: "rgba(34,211,238,0.08)",
      border: "rgba(34,211,238,0.18)",
    },

    Storybook: {
      color: "#A3E635",
      bg: "rgba(163,230,53,0.08)",
      border: "rgba(163,230,53,0.18)",
    },

    Claude: {
      color: "#FB923C",
      bg: "rgba(251,146,60,0.08)",
      border: "rgba(251,146,60,0.18)",
    },

    OpenAI: {
      color: "#34D399",
      bg: "rgba(52,211,153,0.08)",
      border: "rgba(52,211,153,0.18)",
    },

    ChatGPT: {
      color: "#34D399",
      bg: "rgba(52,211,153,0.08)",
      border: "rgba(52,211,153,0.18)",
    },

    "GitHub Copilot": {
      color: "#A78BFA",
      bg: "rgba(167,139,250,0.08)",
      border: "rgba(167,139,250,0.18)",
    },

    Cursor: {
      color: "#FBBF24",
      bg: "rgba(251,191,36,0.08)",
      border: "rgba(251,191,36,0.18)",
    },

    v0: {
      color: "#4ADE80",
      bg: "rgba(74,222,128,0.08)",
      border: "rgba(74,222,128,0.18)",
    },

    "HTML/CSS": {
      color: "#FB7185",
      bg: "rgba(251,113,133,0.08)",
      border: "rgba(251,113,133,0.18)",
    },
  };

const services = [
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    tagline: "Faster delivery, smarter workflows",
    description:
      "Leveraging AI tools to accelerate design-to-development handoff, generate production-ready code, and improve usability decisions — all without sacrificing quality or craft.",
    deliverables: [
      "AI-accelerated UI development",
      "Design-to-code handoff",
      "Rapid prototyping workflows",
      "AI onboarding flow design",
      "Prompt-driven component builds",
    ],
    tools: ["ChatGPT", "Claude", "GitHub Copilot", "v0", "Cursor"],
    accent: "rgba(201,169,110,0.06)",
    borderAccent: "rgba(201,169,110,0.15)",
    featured: true,
  },
  {
    icon: FaFigma,
    title: "UI/UX Design",
    tagline: "Design that converts and delights",
    description:
      "End-to-end user experience design — from early-stage wireframes to polished, interactive prototypes. I design interfaces that are intuitive, accessible, and visually on-brand.",
    deliverables: [
      "User flows & wireframing",
      "High-fidelity Figma prototypes",
      "Interaction & motion design",
      "Usability testing & iteration",
      "Design handoff & specs",
    ],
    tools: ["Figma", "FigJam", "Canva"],
    accent: "rgba(201,169,110,0.08)",
    borderAccent: "rgba(201,169,110,0.2)",
    featured: false,
  },
  {
    icon: Code2,
    title: "Frontend Development",
    tagline: "Pixel-perfect, production-ready code",
    description:
      "Building responsive, performant web applications from design to deployment. I write clean, scalable code using modern frameworks with a focus on user experience and load performance.",
    deliverables: [
      "Next.js & React web apps",
      "Responsive & mobile-first builds",
      "Tailwind CSS styling systems",
      "Framer Motion animations",
      "Vercel deployment & CI/CD",
    ],
    tools: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    accent: "rgba(100,150,255,0.06)",
    borderAccent: "rgba(100,150,255,0.15)",
    featured: false,
  },
  {
    icon: Layers,
    title: "Design Systems",
    tagline: "Consistency at scale",
    description:
      "Creating unified component libraries and design systems that align teams and speed up product development. From Figma libraries to coded component architectures.",
    deliverables: [
      "Component library in Figma",
      "Coded UI component systems",
      "Typography & colour tokens",
      "Figma-to-code workflows",
      "Design documentation",
    ],
    tools: ["Figma", "React", "TailwindCSS", "Storybook"],
    accent: "rgba(160,100,200,0.06)",
    borderAccent: "rgba(160,100,200,0.15)",
    featured: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          label="What I Do"
          title="Services I"
          highlight="Offer."
          subtitle="From concept to code — I cover the full product design and development pipeline, independently or as part of a team."
          align="center"
        />

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <AnimatedDiv key={service.title} variant="fadeUp" delay={i * 0.1}>
              <div
                style={{
                  height: "100%",
                  padding: "2.25rem",
                  background: service.featured
                    ? `linear-gradient(135deg, ${service.accent}, rgba(201,169,110,0.02))`
                    : "var(--color-surface)",
                  border: `1px solid ${service.featured ? service.borderAccent : "var(--color-border)"}`,
                  borderRadius: "var(--radius-card)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="service-card"
              >
                {/* Corner glow for featured */}
                {service.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-40px",
                      right: "-40px",
                      width: "160px",
                      height: "160px",
                      background:
                        "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background: service.featured
                          ? "rgba(201,169,110,0.15)"
                          : "var(--color-surface-2)",
                        border: `1px solid ${service.featured ? "rgba(201,169,110,0.3)" : "var(--color-border)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {(() => {
                        const Icon = service.icon as React.ElementType;
                        return (
                          <Icon
                            size={22}
                            color={
                              service.featured
                                ? "var(--color-gold)"
                                : "var(--color-text-secondary)"
                            }
                          />
                        );
                      })()}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--color-text-primary)",
                          lineHeight: 1.2,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: service.featured
                            ? "var(--color-gold)"
                            : "var(--color-text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {service.featured && (
                    <div
                      style={{
                        flexShrink: 0,
                        padding: "0.2rem 0.6rem",
                        background: "rgba(201,169,110,0.12)",
                        border: "1px solid rgba(201,169,110,0.3)",
                        borderRadius: "999px",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        color: "var(--color-gold)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Core
                    </div>
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.75,
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables */}
                <div>
                  <p
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    What you get
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          fontSize: "0.83rem",
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        <ArrowRight
                          size={12}
                          color={
                            service.featured
                              ? "var(--color-gold)"
                              : "var(--color-text-muted)"
                          }
                          style={{ flexShrink: 0 }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div
                  style={{
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      flexShrink: 0,
                    }}
                  >
                    Tools:
                  </span>
                  {service.tools.map((tool) => {
                    const tc = tagColors[tool];

                    return (
                      <span
                        key={tool}
                        style={{
                          padding: "0.2rem 0.6rem",
                          background: tc?.bg ?? "var(--color-surface-2)",
                          border: `1px solid ${tc?.border ?? "var(--color-border)"}`,
                          borderRadius: "999px",
                          fontSize: "0.7rem",
                          color: tc?.color ?? "var(--color-text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <AnimatedDiv variant="fadeUp" delay={0.3}>
          <div
            style={{
              padding: "3rem",
              background:
                "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.03) 100%)",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "var(--radius-card)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                right: "-60px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.6rem",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                    boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#4ade80",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Available Now
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.2,
                  marginBottom: "0.5rem",
                }}
              >
                Looking to hire a designer who can also{" "}
                <span className="text-gradient">build?</span>
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  maxWidth: "480px",
                  lineHeight: 1.7,
                }}
              >
                I&apos;m open to full-time roles, contract work, and freelance
                projects — based in Hyderabad, available for Dubai and remote.
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              style={{ flexShrink: 0, position: "relative" }}
            >
              Let&apos;s Talk
              <ArrowRight size={15} />
            </a>
          </div>
        </AnimatedDiv>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 48px rgba(0,0,0,0.35);
          border-color: rgba(201,169,110,0.25) !important;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
