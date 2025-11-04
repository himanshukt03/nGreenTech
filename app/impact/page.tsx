import PageHero from "@/components/Common/PageHero";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact | nGreenTech",
  description: "Track the measurable impact of nGreenTech's youth-led climate programmes across volunteers, e-waste diverted, and community partnerships.",
};

const ImpactPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Impact"
        description="From kilograms of e-waste recovered to volunteers activated, discover how student-led action is translating into measurable climate outcomes."
        image="/images/hero/climate%20action.png"
        actions={[{ label: "Read success stories", href: "/ngreen-army" }]}
      />
      <Impact />
      <Partners />
    </>
  );
};

export default ImpactPage;
