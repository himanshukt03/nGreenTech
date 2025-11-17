import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ngreentech.org"),
  title: {
    default: "nGreenTech | Green Education & Circularity",
    template: "%s | nGreenTech",
  },
  description:
    "nGreenTech co-creates green education, e-waste circularity, and youth leadership programmes across schools and partners.",
  keywords: [
    "nGreenTech",
    "green education",
    "e-waste circularity",
    "sustainability",
    "environmental programs",
    "youth leadership",
    "climate action India",
  ],
  applicationName: "nGreenTech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "nGreenTech | Green Education & Circularity",
    description:
      "nGreenTech co-creates green education, e-waste circularity, and youth leadership programmes across schools and partners.",
    url: "https://www.ngreentech.org",
    siteName: "nGreenTech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.ngreentech.org/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "nGreenTech students leading sustainability efforts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nGreenTech | Green Education & Circularity",
    description:
      "nGreenTech co-creates green education, e-waste circularity, and youth leadership programmes across schools and partners.",
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
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta name="apple-mobile-web-app-title" content="Ngreentech" />
      </head>

      <body className={`bg-[#F9FCFA] text-dark ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

import { Providers } from "./providers";
