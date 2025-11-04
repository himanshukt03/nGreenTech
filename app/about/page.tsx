import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import PageHero from "@/components/Common/PageHero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | nGreenTech",
  description:
    "Learn about nGreenTech's youth-led mission, meet our founder, and explore the vision and mission powering our climate action programmes.",
};

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About nGreenTech"
        description="nGreenTech is a youth-led climate action movement founded by children. Discover the spark behind our mission, meet the founder, and learn how we are shaping circular economies one school at a time."
        image="/images/about/about-image-2-dark.svg"
        actions={[{ label: "Meet the nGreenArmy", href: "/ngreen-army" }]}
      />
      <AboutSectionOne showVideo={false} />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
