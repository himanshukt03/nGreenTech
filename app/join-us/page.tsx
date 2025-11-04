import Breadcrumb from "@/components/Common/Breadcrumb";
import JoinUs from "@/components/JoinUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Movement | nGreenTech",
  description: "Partner with nGreenTech as a volunteer, institution, corporate or government ally and co-create youth-led climate action.",
};

const JoinUsPage = () => {
  return (
    <>
      <JoinUs />
    </>
  );
};

export default JoinUsPage;
