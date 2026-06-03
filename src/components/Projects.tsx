"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import { ExternalLink, ArrowUpRight, Lock, Clock } from "lucide-react";
import { projects } from "@/data/projects";

const statusConfig = {
  live: {
    label: "Live",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    border: "rgba(74,222,128,0.25)",
  },
  wip: {
    label: "In Progress",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
  },
  soon: {
    label: "Coming Soon",
    color: "#a0a0a0",
    bg: "rgba(160,160,160,0.08)",
    border: "rgba(160,160,160,0.2)",
  },
};

const techColors: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  "Next.js": {
    color: "#ffffff",
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.15)",
  },
  React: {
    color: "#f8fb61",
    bg: "rgba(228, 251, 97, 0.08)",
    border: "rgba(241, 251, 97, 0.2)",
  },
  TypeScript: {
    color: "#3178C6",
    bg: "rgba(49,120,198,0.12)",
    border: "rgba(49,120,198,0.25)",
  },
  TailwindCSS: {
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
  },
  "Framer Motion": {
    color: "#BB86FC",
    bg: "rgba(187,134,252,0.08)",
    border: "rgba(187,134,252,0.2)",
  },
  Figma: {
    color: "#f2931e",
    bg: "rgba(242, 154, 30, 0.08)",
    border: "rgba(242, 161, 30, 0.2)",
  },
  Vercel: {
    color: "#f886fc",
    bg: "rgba(252, 134, 240, 0.08)",
    border: "rgba(252, 134, 242, 0.2)",
  },
};

function ProjectImage({
  image,
  name,
  status,
}: {
  image: string;
  name: string;
  status: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError || status === "soon") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          background: "var(--color-surface-2)",
        }}
      >
        {status === "soon" ? (
          <>
            <Lock size={24} color="var(--color-text-muted)" />
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              Coming Soon
            </span>
          </>
        ) : (
          <>
            <Clock size={24} color="var(--color-text-muted)" />
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              {name}
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={name}
      fill
      style={{ objectFit: "cover", objectPosition: "top center" }}
      sizes="(max-width: 768px) 100vw, 60vw"
      onError={() => setImgError(true)}
    />
  );
}

function StatusBadge({ status }: { status: string }) {
  const cfg = statusConfig[status as keyof typeof statusConfig];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.22rem 0.65rem",
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        borderRadius: "999px",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: cfg.color,
          display: "inline-block",
          boxShadow: status === "live" ? `0 0 6px ${cfg.color}` : "none",
        }}
      />
      <span
        style={{
          fontSize: "0.68rem",
          fontWeight: 600,
          color: cfg.color,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
        }}
      >
        {cfg.label}
      </span>
    </div>
  );
}

function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedDiv variant="fadeUp" delay={0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "0",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-card)",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.4)"
            : "0 4px 24px rgba(0,0,0,0.2)",
          borderColor: hovered
            ? "rgba(201,169,110,0.3)"
            : "var(--color-border)",
        }}
        className="featured-card"
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            minHeight: "420px",
            overflow: "hidden",
          }}
        >
          <ProjectImage
            image={project.image}
            name={project.name}
            status={project.status}
          />

          {/* Hover overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(8,8,8,0.7)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      background:
                        "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))",
                      color: "#0a0a0a",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      borderRadius: "999px",
                      textDecoration: "none",
                      transition: "transform 0.2s ease",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={15} />
                    View Live Site
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured tag */}
          <div
            style={{
              position: "absolute",
              top: "1.1rem",
              left: "1.1rem",
              padding: "0.25rem 0.7rem",
              background: "rgba(201,169,110,0.15)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: "999px",
              fontSize: "0.65rem",
              fontWeight: 600,
              color: "var(--color-gold)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
            }}
          >
            Featured
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: project.accentColor,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.25rem",
              }}
            >
              <StatusBadge status={project.status} />
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                }}
              >
                {project.category}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.9rem",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                lineHeight: 1.15,
                marginBottom: "0.4rem",
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-gold)",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              {project.tagline}
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              {project.description}
            </p>

            {/* Role */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--color-text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.35rem",
                }}
              >
                Role
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--color-text-secondary)",
                  fontWeight: 500,
                }}
              >
                {project.role}
              </p>
            </div>

            {/* Tech stack */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {project.tech.map((t) => {
                const tc = techColors[t];
                return (
                  <span
                    key={t}
                    style={{
                      padding: "0.25rem 0.65rem",
                      background: tc?.bg ?? "var(--color-surface-2)",
                      border: `1px solid ${tc?.border ?? "var(--color-border)"}`,
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      color: tc?.color ?? "var(--color-text-muted)",
                      letterSpacing: "0.03em",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--color-gold)",
                textDecoration: "none",
                transition: "gap 0.2s ease",
              }}
              className="project-link"
            >
              View Live Site
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </AnimatedDiv>
  );
}

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedDiv variant="fadeUp" delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-card)",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.35)" : "none",
          borderColor: hovered
            ? "rgba(201,169,110,0.25)"
            : "var(--color-border)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          opacity: project.status === "soon" ? 0.7 : 1,
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            height: "220px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <ProjectImage
            image={project.image}
            name={project.name}
            status={project.status}
          />

          <AnimatePresence>
            {hovered && project.link && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(8,8,8,0.65)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.6rem 1.2rem",
                    background:
                      "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))",
                    color: "#0a0a0a",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    borderRadius: "999px",
                    textDecoration: "none",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={13} />
                  View Site
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.85rem",
            }}
          >
            <StatusBadge status={project.status} />
            <span
              style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}
            >
              {project.category}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              marginBottom: "0.25rem",
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--color-gold)",
              fontWeight: 500,
              marginBottom: "0.75rem",
            }}
          >
            {project.tagline}
          </p>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              flex: 1,
              marginBottom: "1.1rem",
            }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1rem",
            }}
          >
            {project.tech.slice(0, 4).map((t) => {
              const tc = techColors[t];
              return (
                <span
                  key={t}
                  style={{
                    padding: "0.2rem 0.55rem",
                    background: tc?.bg ?? "var(--color-surface-2)",
                    border: `1px solid ${tc?.border ?? "var(--color-border)"}`,
                    borderRadius: "999px",
                    fontSize: "0.68rem",
                    color: tc?.color ?? "var(--color-text-muted)",
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>

          {/* Footer */}
          <div
            style={{
              paddingTop: "1rem",
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}
            >
              {project.role}
            </span>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.78rem",
                  color: "var(--color-gold)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                className="project-link"
              >
                Visit <ArrowUpRight size={13} />
              </a>
            ) : (
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                  fontStyle: "italic",
                }}
              >
                {project.status === "soon" ? "In Development" : "In Progress"}
              </span>
            )}
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          label="Selected Work"
          title="Projects I've"
          highlight="Built."
          subtitle="A mix of live client work and concept builds — all designed and developed by me."
        />

        {/* Featured project */}
        <div style={{ marginBottom: "1.5rem" }}>
          <FeaturedCard project={featured} />
        </div>

        {/* Rest of projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="projects-grid"
        >
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={0.1 + i * 0.1}
            />
          ))}
        </div>
      </div>

      <style>{`
        .project-link:hover {
          gap: 0.75rem !important;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          .featured-card > div:first-child {
            min-height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
