import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import RegistrationForm from "@/components/NGreenIndiaChallenge/RegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | nGreen India Challenge",
  description:
    "Register your institution for the National Inter-School E-Waste Awareness & Action Challenge",
};

const RegisterPage = () => {
  return (
    <>
      <div className="pb-24 pt-24 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Register Your Institution"
            paragraph="Join the movement shaping a cleaner, greener, and more responsible India."
            mb="32px"
          />
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
