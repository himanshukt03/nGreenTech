import PageHero from "@/components/Common/PageHero";
import NGreenArmy from "@/components/NGreenArmy";
import { fetchLeaderboard } from "@/lib/googleSheets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nGreenArmy | nGreenTech",
  description: "Meet the youth captains, storytellers, and climate innovators powering the nGreenTech movement and view the latest leaderboard.",
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function NGreenArmyPage() {
  // Fetch leaderboard from Google Sheets
  const leaderboard = await fetchLeaderboard();

  return (
    <>
      <PageHero
        eyebrow="Youth Squad"
        title="nGreenArmy"
        description="Meet the eco-champions driving circular economy programmes across schools, neighbourhoods, and global stages."
        image="/images/hero/ngreenarmy.jpeg"
        sectionClassName="flex min-h-screen items-end pb-24 pt-16 md:pt-24 lg:pt-28"
        imageClassName="opacity-60"
        overlayClassName="from-dark/65 via-dark/40 to-dark/35"
        actions={[{ label: "Join as volunteer", href: "/join-our-team" }]}
      />
      <NGreenArmy leaderboard={leaderboard} />
    </>
  );
}
