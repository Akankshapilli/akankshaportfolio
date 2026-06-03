import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG images (for logos, icons, project screenshots that may be SVGs)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Remote image domains (add more as needed)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velora-estates.vercel.app",
      },
      {
        protocol: "https",
        hostname: "studioarg.in",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Clean URLs — no trailing slashes
  trailingSlash: false,

  // Strict mode for catching bugs early
  reactStrictMode: true,

  // Compress responses
  compress: true,

  // Custom headers for security + performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Allow PDF to be embedded in iframe (for CVModal)
        source: "/Akanksha_CV_2026.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "inline",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
