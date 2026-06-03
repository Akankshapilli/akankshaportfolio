"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.88)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              zIndex: 100,
            }}
          />

          {/* Modal Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 101,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "820px",
                maxHeight: "92vh",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                pointerEvents: "all",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.1rem 1.5rem",
                  borderBottom: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--color-gold)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Akanksha Pilli — CV 2026
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <a
                    href="/Akanksha_CV_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in new tab"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                    }}
                    className="modal-icon-btn"
                  >
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href="/Akanksha_CV_2026.pdf"
                    download="Akanksha_Pilli_CV_2026.pdf"
                    title="Download CV"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.45rem 1rem",
                      background:
                        "linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))",
                      color: "#0a0a0a",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      letterSpacing: "0.03em",
                    }}
                    className="modal-download-btn"
                  >
                    <Download size={14} />
                    Download
                  </a>

                  <button
                    onClick={onClose}
                    title="Close"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      color: "var(--color-text-secondary)",
                    }}
                    className="modal-icon-btn"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div
                style={{
                  flex: 1,
                  overflow: "hidden",
                  background: "#1a1a1a",
                  minHeight: 0,
                }}
              >
                <iframe
                  src="/Akanksha_CV_2026.pdf#toolbar=0&navpanes=0&scrollbar=1"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "600px",
                    border: "none",
                    display: "block",
                  }}
                  title="Akanksha Pilli CV"
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "0.85rem 1.5rem",
                  borderTop: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0,
                  background: "var(--color-surface)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Press{" "}
                  <kbd
                    style={{
                      padding: "0.1rem 0.4rem",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      fontSize: "0.7rem",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    Esc
                  </kbd>{" "}
                  to close
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  akankshapilli08@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
