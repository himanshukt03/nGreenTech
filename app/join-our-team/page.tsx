import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import VolunteerForm from "@/components/JoinUs/VolunteerForm";

const JoinOurTeamPage = () => {
  return (
    <div className="py-24 md:py-28 lg:py-32">
      <div className="container max-w-4xl">
        <SectionTitle
          title="Join Our Volunteer Team"
          paragraph="Be part of the change. Share your details so we can welcome you into the nGreentech community and plug you into squads that match your strengths."
          mb="48px"
        />

        <VolunteerForm />

        <div className="mt-10 text-center text-sm text-body-color">
          Looking to collaborate as an institution instead?{" "}
          <Link href="/partner-with-us" className="font-semibold text-primary hover:underline">
            Explore our partnership form
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeamPage;
