"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "2", label: "Live Client Sites" },
  { value: "50K+", label: "Users Impacted" },
];

const details = [
  {
    icon: MapPin,
    text: "Hyderabad, India — Open to Dubai",
  },
  {
    icon: GraduationCap,
    text: "B.Tech CSE · Vardhaman College of Engineering · 2025",
  },
  {
    icon: Briefcase,
    text: "Currently @ Viva Spaces — Frontend Developer & Product Designer",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-200px",
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
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* ── Left: Photo ── */}
          <AnimatedDiv variant="fadeRight" delay={0.1}>
            <div style={{ position: "relative" }}>
              {/* Decorative gold border frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  border: "1px solid rgba(201, 169, 110, 0.15)",
                  borderRadius: "1.5rem",
                  zIndex: 0,
                }}
              />
              {/* Second decorative frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "-24px",
                  border: "1px solid rgba(201, 169, 110, 0.07)",
                  borderRadius: "2rem",
                  zIndex: 0,
                }}
              />

              {/* Photo container */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  background: "var(--color-surface)",
                }}
              >
                <Image
                  src="/images/pfp.png"
                  alt="Akanksha Pilli — UI/UX Designer & Frontend Developer"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />

                {/* Subtle gradient overlay at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.6), transparent)",
                  }}
                />

                {/* Available badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 0.9rem",
                    background: "rgba(8, 8, 8, 0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(201, 169, 110, 0.25)",
                    borderRadius: "999px",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#4ade80",
                      display: "inline-block",
                      boxShadow: "0 0 8px rgba(74, 222, 128, 0.6)",
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-primary)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
          </AnimatedDiv>

          {/* ── Right: Content ── */}
          <div>
            <AnimatedDiv variant="fadeLeft" delay={0.1}>
              <SectionHeading
                label="About Me"
                title="Designing with intention,"
                highlight="building with precision."
              />
            </AnimatedDiv>

            <AnimatedDiv variant="fadeLeft" delay={0.2}>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                I&apos;m a UI/UX Designer and Frontend Developer with a passion
                for creating digital experiences that are both visually engaging
                and deeply functional. I enjoy turning ideas into real products
                through thoughtful design, responsive interfaces, and modern
                frontend development.
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                My work combines user-centered design with practical
                implementation using Figma, React, Next.js, and TailwindCSS.
                I&apos;ve built products across real estate, lifestyle branding,
                and SaaS — always aiming for experiences that feel intuitive,
                modern, and meaningful.
              </p>
            </AnimatedDiv>

            {/* Detail chips */}
            <AnimatedDiv variant="fadeLeft" delay={0.3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                {details.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        marginTop: "2px",
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "var(--color-gold-muted)",
                        border: "1px solid rgba(201,169,110,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={14} color="var(--color-gold)" />
                    </div>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                        paddingTop: "0.35rem",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedDiv>

            {/* Stats grid */}
            <AnimatedDiv variant="fadeLeft" delay={0.4}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1px",
                  background: "var(--color-border)",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  border: "1px solid var(--color-border)",
                }}
              >
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    style={{
                      padding: "1.25rem 0.75rem",
                      background: "var(--color-surface)",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "0.4rem",
                      }}
                      className="text-gradient"
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.4,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      {/* Pulse animation for the green dot */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
