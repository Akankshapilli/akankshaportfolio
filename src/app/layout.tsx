import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Akanksha Pilli — UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Akanksha Pilli — AI-First Frontend Developer & Designer with 3+ years of experience building user-centric digital products across SaaS and AI-enabled platforms.",
  keywords: [
    "Akanksha Pilli",
    "UI/UX Designer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Figma",
    "Product Designer",
    "Dubai",
    "Hyderabad",
    "Portfolio",
  ],
  authors: [
    { name: "Akanksha Pilli", url: "https://akankshapilli.vercel.app" },
  ],
  creator: "Akanksha Pilli",
  metadataBase: new URL("https://akankshapilli.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akankshapilli.vercel.app",
    title: "Akanksha Pilli — UI/UX Designer & Frontend Developer",
    description:
      "AI-First Frontend Developer & Designer crafting modern, user-centered digital experiences. Open to opportunities in Dubai.",
    siteName: "Akanksha Pilli Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akanksha Pilli — UI/UX Designer & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akanksha Pilli — UI/UX Designer & Frontend Developer",
    description:
      "AI-First Frontend Developer & Designer crafting modern, user-centered digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
