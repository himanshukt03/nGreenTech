import PageHero from "@/components/Common/PageHero";
import NGreenArmy from "@/components/NGreenArmy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nGreenArmy | nGreenTech",
  description: "Meet the youth captains, storytellers, and climate innovators powering the nGreenTech movement and view the latest leaderboard.",
};

const NGreenArmyPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Youth Squad"
        title="nGreenArmy"
        description="Meet the eco-champions driving circular economy programmes across schools, neighbourhoods, and global stages."
    image="/images/hero/ngreenarmy.jpeg"
    sectionClassName="flex min-h-screen items-end pb-24 pt-16 md:pt-24 lg:pt-28"
    imageClassName="opacity-60"
  overlayClassName="from-dark/90 via-dark/65 to-dark/35"
        actions={[{ label: "Join as volunteer", href: "/join-our-team" }]}
      />
      <NGreenArmy />
    </>
  );
};

export default NGreenArmyPage;
