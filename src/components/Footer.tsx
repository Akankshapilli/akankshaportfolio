"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Akankshapilli",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/akankshapilli08",
    label: "LinkedIn",
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
          opacity: 0.4,
        }}
      />

      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-container"
        style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}
      >
        {/* ── Top row: Brand + Nav + Socials ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Monogram */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  lineHeight: 1,
                }}
              >
                AP
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Akanksha Pilli
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "240px",
              }}
            >
              UI/UX Designer & Frontend Developer crafting modern digital
              experiences. Open to Dubai opportunities.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.1rem",
              }}
            >
              Navigation
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.25s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.1rem",
              }}
            >
              Connect
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.25s ease",
                  }}
                  className="footer-social-link"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.9rem",
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.2)",
                borderRadius: "999px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(74,222,128,0.6)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#4ade80",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                Open to opportunities
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)",
            marginBottom: "1.75rem",
          }}
        />

        {/* ── Bottom row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "0.8rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
            }}
          >
            © {year}{" "}
            <span style={{ color: "var(--color-text-secondary)" }}>
              Akanksha Pilli
            </span>
            {"  ·  "}
            Designed &amp; Developed by{" "}
            <span
              style={{
                color: "var(--color-gold)",
                fontWeight: 500,
              }}
            >
              Akanksha Pilli
            </span>
          </motion.p>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            onClick={scrollToTop}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 0.9rem",
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: "999px",
              fontSize: "0.75rem",
              color: "var(--color-text-secondary)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "var(--font-body)",
            }}
            className="back-to-top"
          >
            <ArrowUp size={13} />
            Back to top
          </motion.button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .footer-nav-link:hover {
          color: var(--color-gold) !important;
        }

        .footer-social-link:hover {
          color: var(--color-gold) !important;
        }

        .back-to-top:hover {
          border-color: rgba(201,169,110,0.3) !important;
          color: var(--color-gold) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
