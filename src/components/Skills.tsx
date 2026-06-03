"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import { Code2, Wrench, Sparkles, Layers } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { skillCategories, levelConfig, marqueeSkills } from "@/data/skills";

type Level = "Expert" | "Proficient" | "Familiar";

interface Skill {
  name: string;
  level: Level;
}

const categoryIcons = {
  frontend: Code2,
  design: FaFigma,
  tools: Wrench,
  ai: Sparkles,
  concepts: Layers,
};

function SkillPill({ skill }: { skill: Skill }) {
  const cfg = levelConfig[skill.level];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.35rem 0.85rem",
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        borderRadius: "999px",
        transition: "all 0.25s ease",
        cursor: "default",
      }}
      className="skill-pill"
    >
      {/* Level dots */}
      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        {[1, 2, 3].map((d) => (
          <span
            key={d}
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: d <= cfg.dots ? cfg.color : "var(--color-border)",
              display: "inline-block",
              transition: "background 0.2s ease",
            }}
          />
        ))}
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          color: "var(--color-text-secondary)",
          fontWeight: 400,
          letterSpacing: "0.02em",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const active = skillCategories.find((c) => c.id === activeTab)!;
  const ActiveIcon = categoryIcons[active.id as keyof typeof categoryIcons];

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          label="Expertise"
          title="Skills &"
          highlight="Tech Stack."
          subtitle="A full-stack design and development toolkit — built over 3+ years across real products and client work."
          align="center"
        />

        {/* ── Tab bar ── */}
        <AnimatedDiv variant="fadeUp" delay={0.1}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "999px",
              width: "fit-content",
              margin: "0 auto 2.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {skillCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              const Icon = categoryIcons[cat.id as keyof typeof categoryIcons];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.45rem 1.1rem",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#0a0a0a" : "var(--color-text-muted)",
                    background: isActive
                      ? "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))"
                      : "transparent",
                    transition: "all 0.25s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Icon size={13} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedDiv>

        {/* ── Tab content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                padding: "2.5rem",
                background: active.color,
                border: `1px solid ${active.glow}`,
                borderRadius: "var(--radius-card)",
                marginBottom: "3rem",
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ActiveIcon size={22} color="var(--color-gold)" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {active.label}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-secondary)",
                        maxWidth: "480px",
                        lineHeight: 1.6,
                      }}
                    >
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* Legend */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexShrink: 0,
                    flexWrap: "wrap",
                  }}
                >
                  {(["Expert", "Proficient", "Familiar"] as Level[]).map(
                    (level) => {
                      const cfg = levelConfig[level];
                      return (
                        <div
                          key={level}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[1, 2, 3].map((d) => (
                              <span
                                key={d}
                                style={{
                                  width: "4px",
                                  height: "4px",
                                  borderRadius: "50%",
                                  background:
                                    d <= cfg.dots
                                      ? cfg.color
                                      : "var(--color-border)",
                                  display: "inline-block",
                                }}
                              />
                            ))}
                          </div>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              color: "var(--color-text-muted)",
                              letterSpacing: "0.04em",
                            }}
                          >
                            {level}
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              {/* Skills pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {active.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Marquee ── */}
        <AnimatedDiv variant="fadeUp" delay={0.2}>
          <div style={{ marginBottom: "0.85rem" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.68rem",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1.25rem",
              }}
            >
              Full Tech Stack
            </p>

            <div
              style={{
                overflow: "hidden",
                padding: "1rem 0",
                maskImage:
                  "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="marquee-track">
                {[...marqueeSkills, ...marqueeSkills].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      padding: "0 1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-muted)",
                        whiteSpace: "nowrap",
                        fontWeight: 400,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item}
                    </span>
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--color-gold)",
                        opacity: 0.4,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>

      <style>{`
        .skill-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        @media (max-width: 600px) {
          .skills-tabs {
            gap: 0.35rem !important;
          }
        }
      `}</style>
    </section>
  );
}
