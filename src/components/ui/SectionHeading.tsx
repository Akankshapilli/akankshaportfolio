"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      style={{
        textAlign: isCenter ? "center" : "left",
        marginBottom: "4rem",
      }}
    >
      {/* Label pill */}
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.3rem 1rem",
            border: "1px solid rgba(201, 169, 110, 0.25)",
            borderRadius: "999px",
            background: "rgba(201, 169, 110, 0.06)",
            marginBottom: "1.25rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--color-gold)",
            }}
          />
          <span
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}
          >
            {label}
          </span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.25rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "var(--color-text-primary)",
          marginBottom: subtitle ? "1rem" : 0,
        }}
      >
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>

      {/* Gold divider line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{
          marginTop: "1.25rem",
          marginBottom: subtitle ? "1.25rem" : 0,
          height: "1px",
          width: "60px",
          background: "linear-gradient(90deg, var(--color-gold), transparent)",
          transformOrigin: isCenter ? "center" : "left",
          marginLeft: isCenter ? "auto" : 0,
          marginRight: isCenter ? "auto" : 0,
        }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "520px",
            marginLeft: isCenter ? "auto" : 0,
            marginRight: isCenter ? "auto" : 0,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
