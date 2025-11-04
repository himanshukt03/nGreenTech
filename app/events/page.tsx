import PageHero from "@/components/Common/PageHero";
import PastEvents from "@/components/Events/PastEvents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | nGreenTech",
  description: "Dive into nGreenTech's past events, global showcases, and community programmes led by young climate champions.",
};

const EventsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Events"
        description="Explore our championships, podcast spotlights, campus activations, and global collaborations led by young climate champions."
        image="/images/hero/Sustainable-cities.jpeg"
        actions={[{ label: "Partner with us", href: "/partners" }]}
      />
      <PastEvents />
    </>
  );
};

export default EventsPage;
