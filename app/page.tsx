import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import JoinUs from "@/components/JoinUs";
import NGreenArmy from "@/components/NGreenArmy";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nGreenTech",
  description:
    "nGreenTech co-creates green education, e-waste circularity, and youth leadership programmes across schools and partners.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Impact />
      <JoinUs />
      <Events />
      <NGreenArmy />
  <Partners />
      <Testimonials />
      <Contact />
    </>
  );
}
