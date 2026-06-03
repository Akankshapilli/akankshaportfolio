"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google — via Coursera",
    year: "2024",
    description:
      "Comprehensive program covering UX research, wireframing, prototyping, and user-centered design across mobile and web platforms.",
    link: null,
    featured: true,
  },
  {
    title: "UI/UX Design Certificate",
    issuer: "Great Learning",
    year: "2023",
    description:
      "Covered UI principles, design systems, Figma workflows, and responsive interface design for web and mobile applications.",
    link: null,
    featured: false,
  },
  {
    title: "UI/UX Design & Frontend Development",
    issuer: "Internshala",
    year: "2022",
    description:
      "Hands-on training in wireframing, usability testing, HTML/CSS implementation, and translating design to functional interfaces.",
    link: null,
    featured: false,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          label="Credentials"
          title="Experience"
          highlight="Backed by Learning"
          subtitle="Formal training that backs the hands-on work — from Google's UX program to specialized frontend and design courses."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="cert-grid"
        >
          {certifications.map((cert, i) => (
            <AnimatedDiv key={cert.title} variant="fadeUp" delay={i * 0.1}>
              <div
                style={{
                  height: "100%",
                  padding: "2rem",
                  background: cert.featured
                    ? "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.03) 100%)"
                    : "var(--color-surface)",
                  border: cert.featured
                    ? "1px solid rgba(201,169,110,0.3)"
                    : "1px solid var(--color-border)",
                  borderRadius: "var(--radius-card)",
                  position: "relative",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  cursor: cert.link ? "pointer" : "default",
                }}
                className="cert-card"
                onClick={() => cert.link && window.open(cert.link, "_blank")}
              >
                {/* Featured tag */}
                {cert.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      padding: "0.2rem 0.65rem",
                      background: "rgba(201,169,110,0.15)",
                      border: "1px solid rgba(201,169,110,0.3)",
                      borderRadius: "999px",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                    }}
                  >
                    Featured
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: cert.featured
                      ? "rgba(201,169,110,0.15)"
                      : "var(--color-surface-2)",
                    border: `1px solid ${cert.featured ? "rgba(201,169,110,0.3)" : "var(--color-border)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <BadgeCheck
                    size={20}
                    color={
                      cert.featured
                        ? "var(--color-gold)"
                        : "var(--color-text-muted)"
                    }
                  />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem",
                      paddingRight: cert.featured ? "4rem" : 0,
                    }}
                  >
                    {cert.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-gold)",
                        fontWeight: 500,
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span
                      style={{
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "var(--color-text-muted)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                {/* Link row */}
                {cert.link && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      color: "var(--color-gold)",
                      fontWeight: 500,
                      marginTop: "0.5rem",
                    }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={13} />
                  </div>
                )}
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>

      <style>{`
        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
          border-color: rgba(201,169,110,0.25) !important;
        }

        @media (max-width: 600px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 601px) and (max-width: 900px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
