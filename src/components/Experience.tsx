"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences, experienceStats } from "@/data/experience";

const tagColors: Record<string, { color: string; bg: string; border: string }> =
  {
    // — Frontend —
    "Next.js": {
      color: "#ffffff",
      bg: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.15)",
    },
    React: {
      color: "#f8fb61",
      bg: "rgba(228,251,97,0.08)",
      border: "rgba(241,251,97,0.2)",
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
      bg: "rgba(242,154,30,0.08)",
      border: "rgba(242,161,30,0.2)",
    },
    Vercel: {
      color: "#f886fc",
      bg: "rgba(252,134,240,0.08)",
      border: "rgba(252,134,242,0.2)",
    },
    // — Experience-specific —
    "UI Systems": {
      color: "#a78bfa",
      bg: "rgba(167,139,250,0.08)",
      border: "rgba(167,139,250,0.2)",
    },
    PropTech: {
      color: "#34d399",
      bg: "rgba(52,211,153,0.08)",
      border: "rgba(52,211,153,0.2)",
    },
    SaaS: {
      color: "#fb923c",
      bg: "rgba(251,146,60,0.08)",
      border: "rgba(251,146,60,0.2)",
    },
    Dashboards: {
      color: "#60a5fa",
      bg: "rgba(96,165,250,0.08)",
      border: "rgba(96,165,250,0.2)",
    },
    "UX Lead": {
      color: "#f472b6",
      bg: "rgba(244,114,182,0.08)",
      border: "rgba(244,114,182,0.2)",
    },
    "Client Work": {
      color: "#fbbf24",
      bg: "rgba(251,191,36,0.08)",
      border: "rgba(251,191,36,0.2)",
    },
    Wireframing: {
      color: "#a3e635",
      bg: "rgba(163,230,53,0.08)",
      border: "rgba(163,230,53,0.2)",
    },
    "Usability Testing": {
      color: "#e879f9",
      bg: "rgba(232,121,249,0.08)",
      border: "rgba(232,121,249,0.2)",
    },
    "HTML/CSS": {
      color: "#f97316",
      bg: "rgba(249,115,22,0.08)",
      border: "rgba(249,115,22,0.2)",
    },
    Architecture: {
      color: "#94a3b8",
      bg: "rgba(148,163,184,0.08)",
      border: "rgba(148,163,184,0.2)",
    },
  };

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-150px",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="experience-grid"
        >
          {/* ── Left: Heading ── */}
          <div style={{ position: "sticky", top: "120px" }}>
            <AnimatedDiv variant="fadeRight">
              <SectionHeading
                label="Career"
                title="Where I've"
                highlight="worked."
                subtitle="3+ years building products across prop-tech, B2B SaaS, and independent client work."
              />

              {/* Quick stats */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1px",
                  background: "var(--color-border)",
                  borderRadius: "0.85rem",
                  overflow: "hidden",
                  border: "1px solid var(--color-border)",
                  marginTop: "0.5rem",
                }}
              >
                {[
                  { label: "Companies", value: experienceStats.companies },
                  { label: "Years Active", value: experienceStats.yearsActive },
                  {
                    label: "Users Impacted",
                    value: experienceStats.usersImpacted,
                  },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.9rem 1.1rem",
                      background: "var(--color-surface)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-gradient"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          </div>

          {/* ── Right: Timeline ── */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "12px",
                bottom: "12px",
                width: "1px",
                background:
                  "linear-gradient(to bottom, var(--color-gold), rgba(201,169,110,0.2) 80%, transparent)",
                opacity: 0.3,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                paddingLeft: "2.5rem",
              }}
            >
              {experiences.map((exp, i) => (
                <AnimatedDiv key={exp.id} variant="fadeUp" delay={i * 0.12}>
                  <div style={{ position: "relative" }}>
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-2.5rem",
                        top: "6px",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background:
                          exp.status === "current"
                            ? "var(--color-gold)"
                            : "var(--color-surface-2)",
                        border: `2px solid ${
                          exp.status === "current"
                            ? "var(--color-gold)"
                            : "var(--color-border)"
                        }`,
                        boxShadow:
                          exp.status === "current"
                            ? "0 0 12px rgba(201,169,110,0.5)"
                            : "none",
                        zIndex: 1,
                        transform: "translateX(-5.5px)",
                      }}
                    />

                    {/* Card */}
                    <div
                      style={{
                        padding: "1.75rem",
                        background:
                          exp.status === "current"
                            ? "linear-gradient(135deg, rgba(201,169,110,0.06), rgba(201,169,110,0.02))"
                            : "var(--color-surface)",
                        border: `1px solid ${
                          exp.status === "current"
                            ? "rgba(201,169,110,0.25)"
                            : "var(--color-border)"
                        }`,
                        borderRadius: "var(--radius-card)",
                        transition: "all 0.4s ease",
                      }}
                      className="exp-card"
                    >
                      {/* Top row */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "1rem",
                          marginBottom: "0.6rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.6rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            <h3
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                color: "var(--color-text-primary)",
                                lineHeight: 1.2,
                              }}
                            >
                              {exp.company}
                            </h3>
                            {exp.status === "current" && (
                              <span
                                style={{
                                  padding: "0.15rem 0.55rem",
                                  background: "rgba(74,222,128,0.12)",
                                  border: "1px solid rgba(74,222,128,0.3)",
                                  borderRadius: "999px",
                                  fontSize: "0.62rem",
                                  fontWeight: 600,
                                  color: "#4ade80",
                                  letterSpacing: "0.07em",
                                  textTransform: "uppercase",
                                }}
                              >
                                Current
                              </span>
                            )}
                          </div>
                          <p
                            style={{
                              fontSize: "0.9rem",
                              color: "var(--color-gold)",
                              fontWeight: 500,
                            }}
                          >
                            {exp.role}
                          </p>
                        </div>

                        {/* Meta */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: "0.3rem",
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              fontSize: "0.78rem",
                              color: "var(--color-text-muted)",
                            }}
                          >
                            <Calendar size={12} />
                            {exp.period}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              fontSize: "0.78rem",
                              color: "var(--color-text-muted)",
                            }}
                          >
                            <MapPin size={12} />
                            {exp.location}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              fontSize: "0.78rem",
                              color: "var(--color-text-muted)",
                            }}
                          >
                            <Briefcase size={12} />
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div
                        style={{
                          height: "1px",
                          background: "var(--color-border)",
                          margin: "1rem 0",
                        }}
                      />

                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.75,
                          marginBottom: "1rem",
                        }}
                      >
                        {exp.description}
                      </p>

                      {/* Bullet highlights */}
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 1.25rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {exp.highlights.map((point) => (
                          <li
                            key={point}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.65rem",
                              fontSize: "0.85rem",
                              color: "var(--color-text-secondary)",
                              lineHeight: 1.6,
                            }}
                          >
                            <span
                              style={{
                                flexShrink: 0,
                                marginTop: "0.45rem",
                                width: "5px",
                                height: "5px",
                                borderRadius: "50%",
                                background: "var(--color-gold)",
                                opacity: 0.7,
                                display: "inline-block",
                              }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {exp.tags.map((tag) => {
                          const tc = tagColors[tag];
                          return (
                            <span
                              key={tag}
                              style={{
                                padding: "0.25rem 0.7rem",
                                background: tc?.bg ?? "var(--color-surface-2)",
                                border: `1px solid ${tc?.border ?? "var(--color-border)"}`,
                                borderRadius: "999px",
                                fontSize: "0.72rem",
                                color: tc?.color ?? "var(--color-text-muted)",
                                letterSpacing: "0.04em",
                                fontWeight: 500,
                              }}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-card:hover {
          border-color: rgba(201,169,110,0.25) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .experience-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
