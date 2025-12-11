import HomeAbout from "@/components/About/HomeAbout";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import JoinCTA from "@/components/JoinUs/HomeCTA";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import { fetchEvents } from "@/lib/googleSheets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nGreenTech",
  description:
    "nGreenTech co-creates green education, e-waste circularity, and youth leadership programmes across schools and partners.",
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function Home() {
  // Fetch Google Sheets data (returns empty array if env vars missing)
  const sheetEvents = await fetchEvents();

  return (
    <>
      <ScrollUp />
      <Hero />
      <HomeAbout />
      <Impact />
      <JoinCTA />
      <Events sheetEvents={sheetEvents} />
      <Partners />
      <Testimonials />
      <Contact />
    </>
  );
}
