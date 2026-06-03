"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import { Mail, Send, MapPin, CheckCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "akankshapilli08@gmail.com",
    href: "mailto:akankshapilli08@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/akankshapilli08",
    href: "https://linkedin.com/in/akankshapilli08",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Akankshapilli",
    href: "https://github.com/Akankshapilli",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xykayzpk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1.1rem",
    background: "var(--color-surface-2)",
    border: "1px solid var(--color-border)",
    borderRadius: "0.65rem",
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          label="Get In Touch"
          title="Let's work"
          highlight="together."
          subtitle="Open to full-time roles, freelance projects, and collaborations. Based in Hyderabad — available for Dubai and remote opportunities."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* ── Left: Info ── */}
          <AnimatedDiv variant="fadeRight" delay={0.1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Availability card */}
              <div
                style={{
                  padding: "1.5rem",
                  background:
                    "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))",
                  border: "1px solid rgba(201,169,110,0.25)",
                  borderRadius: "var(--radius-card)",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.65rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#4ade80",
                      display: "inline-block",
                      boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#4ade80",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Available Now
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  Currently open to full-time UI/UX and frontend roles —
                  especially opportunities in{" "}
                  <span style={{ color: "var(--color-gold)", fontWeight: 500 }}>
                    Dubai & remote
                  </span>
                  .
                </p>
              </div>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "1rem 1.25rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.75rem",
                }}
              >
                <MapPin size={16} color="var(--color-gold)" />
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Hyderabad, India — Open to Dubai
                </span>
              </div>

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.9rem",
                      padding: "0.9rem 1.1rem",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "0.75rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      color: "inherit",
                    }}
                    className="social-link"
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "9px",
                        background: "var(--color-gold-muted)",
                        border: "1px solid rgba(201,169,110,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color="var(--color-gold)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--color-text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--color-text-secondary)",
                          fontWeight: 400,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedDiv>

          {/* ── Right: Form ── */}
          <AnimatedDiv variant="fadeLeft" delay={0.15}>
            <div
              style={{
                padding: "2.25rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-card)",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "3rem 1rem",
                    textAlign: "center",
                  }}
                >
                  <CheckCircle size={48} color="var(--color-gold)" />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Got your message. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.1rem",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                    className="form-row"
                  >
                    {/* Name */}
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        className="form-input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about the role, project, or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "130px",
                      }}
                      className="form-input"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                      marginTop: "0.25rem",
                    }}
                  >
                    {loading ? (
                      "Sending your message..."
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedDiv>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .social-link:hover {
          border-color: rgba(201,169,110,0.3) !important;
          background: rgba(201,169,110,0.04) !important;
          transform: translateX(4px);
        }

        .form-input:focus {
          border-color: rgba(201,169,110,0.5) !important;
          box-shadow: 0 0 0 3px rgba(201,169,110,0.08) !important;
        }

        .form-input::placeholder {
          color: var(--color-text-muted);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 500,
  color: "var(--color-text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "0.45rem",
};
