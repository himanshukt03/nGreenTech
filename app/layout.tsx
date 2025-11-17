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
    default: "nGreenTech",
    template: "%s | nGreenTech",
  },
  description:
    "nGreenTech is a youth-led climate action movement founded by children. We help students design joyful sustainability missions like e-waste drives and neighbourhood plantations, empowering them to grow as confident, impact-first leaders.",
  keywords: [
    "ngreentech",
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
    title: "nGreenTech",
    description:
      "nGreenTech is a youth-led climate action movement founded by children. We help students design joyful sustainability missions like e-waste drives and neighbourhood plantations, empowering them to grow as confident, impact-first leaders.",
    url: "https://www.ngreentech.org",
    siteName: "nGreenTech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/a7bad283-30f4-4ed4-83fc-43371e944220.jpg?token=KBLPDWsjSQEe1rJJ2bIRRU7pjD0kUeopXq-QAZ1gdwI&height=1200&width=1200&expires=33299352772",
        width: 1200,
        height: 1200,
        alt: "nGreenTech mission collage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nGreenTech",
    description:
      "nGreenTech is a youth-led climate action movement founded by children. We help students design joyful sustainability missions like e-waste drives and neighbourhood plantations, empowering them to grow as confident, impact-first leaders.",
    images: [
      "https://opengraph.b-cdn.net/production/images/a7bad283-30f4-4ed4-83fc-43371e944220.jpg?token=KBLPDWsjSQEe1rJJ2bIRRU7pjD0kUeopXq-QAZ1gdwI&height=1200&width=1200&expires=33299352772",
    ],
  },
  other: {
    "twitter:domain": "ngreentech.org",
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
