import "./globals.css";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://nabarajbasnet.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Nabaraj Basnet — Full-Stack Software Developer",
    template: "%s | Nabaraj Basnet",
  },

  description:
    "Nabaraj Basnet is a full-stack software developer from Kathmandu, Nepal, specializing in NestJS microservices, PostgreSQL, gRPC, React, and Next.js. Building Fitbinary — a live SaaS platform for gym businesses.",

  keywords: [
    "Nabaraj Basnet",
    "Nabaraj Basnet developer",
    "Nabaraj Basnet portfolio",
    "Nabaraj Basnet Nepal",
    "full-stack developer Nepal",
    "NestJS developer",
    "React developer Nepal",
    "Next.js developer",
    "microservices developer",
    "software developer Kathmandu",
    "Fitbinary",
    "FitStock",
    "FitCloud",
    "OnePasal developer",
    "gRPC developer",
    "Node.js developer Nepal",
    "TypeScript developer",
  ],

  authors: [{ name: "Nabaraj Basnet", url: BASE_URL }],
  creator: "Nabaraj Basnet",
  publisher: "Nabaraj Basnet",

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

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Nabaraj Basnet",
    title: "Nabaraj Basnet — Full-Stack Software Developer",
    description:
      "Full-stack developer from Kathmandu, Nepal. Building scalable microservices and production-grade web applications — NestJS, PostgreSQL, gRPC, React, Next.js.",
    firstName: "Nabaraj",
    lastName: "Basnet",
    username: "NabarajBasnet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nabaraj Basnet — Full-Stack Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nabaraj Basnet — Full-Stack Software Developer",
    description:
      "Full-stack developer from Kathmandu, Nepal. Building scalable microservices with NestJS, PostgreSQL, gRPC, React, and Next.js.",
    images: ["/og-image.png"],
    creator: "@NabarajBasnet",
  },

  category: "technology",

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/og-image.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nabaraj Basnet",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    jobTitle: "Full-Stack Software Developer",
    description:
      "Full-stack software developer from Kathmandu, Nepal, specializing in NestJS microservices, PostgreSQL, gRPC, React, and Next.js.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://github.com/NabarajBasnet",
      "https://www.linkedin.com/in/nabaraj-basnet-1b9216248/",
      "https://www.instagram.com/nabaraj__basnet/",
    ],
    knowsAbout: [
      "NestJS",
      "Node.js",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "gRPC",
      "Microservices",
      "Docker",
      "Software Architecture",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Fitbinary",
      url: "https://www.fitbinary.com",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
