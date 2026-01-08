import Breadcrumb from "@/components/Common/Breadcrumb";
import CitySearch from "@/components/NGreenIndiaChallenge/CitySearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participating Cities | nGreen India Challenge",
  description: "Check the list of cities participating in the nGreen India Challenge.",
};

const ParticipatingCitiesPage = () => {
  return (
    <>
      <section className="pb-[120px] mt-20 pt-[80px]">
        <div className="container">
          <CitySearch />
        </div>
      </section>
    </>
  );
};

export default ParticipatingCitiesPage;
