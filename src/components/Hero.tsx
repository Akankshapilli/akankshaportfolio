"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import CVModal from "@/components/CVModal";
import Image from "next/image";

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "AI-First Builder",
  "Design-to-Code Specialist",
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Akankshapilli", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/akankshapilli08",
    label: "LinkedIn",
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "7rem 1.5rem 5rem",
        }}
      >
        {/* ── Background image + overlay ── */}
        <div
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
          suppressHydrationWarning
        >
          <Image
            src="/images/bg.png"
            alt="background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={90}
          />
          {/* Dark overlay so text stays readable */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(8, 8, 8, 0.72)",
            }}
          />
        </div>

        {/* Keep your existing ambient glows on top for depth */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "55vw",
            height: "55vw",
            maxWidth: "700px",
            maxHeight: "700px",
            background:
              "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Floating socials (left side) ── */}
        <div
          style={{
            position: "fixed",
            left: "1.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            zIndex: 10,
          }}
          className="hero-socials"
        >
          {socials.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.2 + i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              className="hero-social-icon"
            >
              <Icon size={15} />
            </motion.a>
          ))}

          {/* Vertical line below socials */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "1px",
              height: "60px",
              background:
                "linear-gradient(to bottom, var(--color-border), transparent)",
              transformOrigin: "top",
            }}
          />
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.1rem",
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.25)",
              borderRadius: "999px",
              marginBottom: "2.25rem",
              cursor: "default",
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
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--color-gold)",
                letterSpacing: "0.06em",
              }}
            >
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <div style={{ overflow: "hidden", marginBottom: "0.5rem" }}>
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 11vw, 8rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
                display: "block",
              }}
            >
              Akanksha
            </motion.h1>
          </div>

          <div style={{ overflow: "hidden", marginBottom: "2rem" }}>
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 11vw, 8rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                display: "block",
              }}
              className="text-gradient"
            >
              Pilli
            </motion.h1>
          </div>

          {/* Animated role typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "1.75rem",
              minHeight: "2rem",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "var(--color-gold)",
                opacity: 0.6,
                display: "inline-block",
              }}
            />

            <div
              style={{
                height: "1.6rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "block",
                    fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <span
              style={{
                width: "28px",
                height: "1px",
                background: "var(--color-gold)",
                opacity: 0.6,
                display: "inline-block",
              }}
            />
          </motion.div>

          {/* Bio line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: "0 auto 2.75rem",
            }}
          >
            Crafting modern digital experiences that balance{" "}
            <span style={{ color: "var(--color-text-secondary)" }}>
              visual design
            </span>{" "}
            with{" "}
            <span style={{ color: "var(--color-text-secondary)" }}>
              precision frontend execution
            </span>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <button onClick={() => setCvOpen(true)} className="btn-outline">
              View CV
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              marginTop: "4rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "5+", label: "Projects" },
              { value: "50K+", label: "Users Reached" },
              { value: "2", label: "Live Clients" },
            ].map(({ value, label }, i, arr) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    padding: "0 2rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="text-gradient"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {label}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "32px",
                      background: "var(--color-border)",
                    }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            cursor: "pointer",
          }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span
            style={{
              fontSize: "0.65rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} color="var(--color-text-muted)" />
          </motion.div>
        </motion.div>
      </section>

      {/* CV Modal */}
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />

      <style>{`
        .hero-social-icon:hover {
          border-color: rgba(201,169,110,0.4) !important;
          color: var(--color-gold) !important;
          background: rgba(201,169,110,0.06) !important;
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .hero-socials {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
