"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import CVModal from "@/components/CVModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "skills",
      "experience",
      "certifications",
      "services",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition:
            "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(8, 8, 8, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          className="section-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70px",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  lineHeight: 1,
                }}
              >
                AP
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                letterSpacing: "-0.01em",
              }}
              className="nav-name"
            >
              Akanksha Pilli
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    position: "relative",
                    padding: "0.45rem 0.85rem",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive
                      ? "var(--color-gold)"
                      : "var(--color-text-secondary)",
                    textDecoration: "none",
                    borderRadius: "8px",
                    transition: "all 0.25s ease",
                    background: isActive
                      ? "rgba(201,169,110,0.08)"
                      : "transparent",
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--color-gold)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Right: CV Button + Mobile Toggle ── */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            {/* View CV button */}
            <button
              onClick={() => setCvOpen(true)}
              className="btn-primary desktop-cv-btn"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.82rem" }}
            >
              <Download size={14} />
              View CV
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-text-primary)",
                flexShrink: 0,
                transition: "all 0.2s ease",
              }}
              className="mobile-toggle"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                zIndex: 40,
              }}
            />

            {/* Drawer */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(320px, 85vw)",
                background: "var(--color-surface)",
                borderLeft: "1px solid var(--color-border)",
                zIndex: 45,
                display: "flex",
                flexDirection: "column",
                padding: "2rem 1.75rem",
                overflowY: "auto",
              }}
            >
              {/* Drawer header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background:
                        "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#0a0a0a",
                      }}
                    >
                      AP
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Akanksha Pilli
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav links */}
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  flex: 1,
                }}
              >
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        fontSize: "1rem",
                        fontWeight: isActive ? 500 : 400,
                        color: isActive
                          ? "var(--color-gold)"
                          : "var(--color-text-secondary)",
                        textDecoration: "none",
                        background: isActive
                          ? "rgba(201,169,110,0.08)"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(201,169,110,0.15)"
                          : "1px solid transparent",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isActive && (
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "var(--color-gold)",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div
                style={{
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--color-border)",
                  marginTop: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setCvOpen(true);
                  }}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Download size={15} />
                  View CV
                </button>

                {/* Availability badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.5rem",
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
                      fontSize: "0.78rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Open to Dubai Opportunities
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CV Modal */}
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .nav-link:hover {
          color: var(--color-text-primary) !important;
          background: rgba(255,255,255,0.04) !important;
        }

        @media (max-width: 900px) {
          .nav-name { display: none !important; }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cv-btn { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }

        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
