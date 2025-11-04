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
        image="/images/hero/education.jpg"
        actions={[{ label: "Join as volunteer", href: "/join-our-team" }]}
      />
      <NGreenArmy />
    </>
  );
};

export default NGreenArmyPage;
