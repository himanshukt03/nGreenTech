import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import PartnerForm from "@/components/JoinUs/PartnerForm";

const PartnerWithUsPage = () => {
  return (
    <div className="py-24 md:py-28 lg:py-32">
      <div className="container max-w-5xl">
        <SectionTitle
          title="Partner With NGreentech"
          paragraph="Co-create programmes that mobilise institutions, communities, and ecosystems. Share your organization details and let us design the collaboration blueprint together."
          mb="48px"
        />

        <PartnerForm />

        <div className="mt-10 text-center text-sm text-body-color">
          Want to volunteer as an individual instead?{" "}
          <Link href="/join-our-team" className="font-semibold text-primary hover:underline">
            Head to the volunteer form
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsPage;
