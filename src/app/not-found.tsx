"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(7rem, 20vw, 14rem)",
              fontWeight: 800,
              lineHeight: 1,
              background:
                "linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(201,169,110,0.05) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
              letterSpacing: "-0.04em",
              userSelect: "none",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            margin: "0 auto 2.5rem",
            maxWidth: "320px",
          }}
        />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Page Not Found
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1rem",
              maxWidth: "360px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Looks like this page wandered off. Let&apos;s get you back to
            something real.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Subtle credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: "4rem",
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Akanksha Pilli &mdash; Portfolio
        </motion.p>
      </div>
    </main>
  );
}
