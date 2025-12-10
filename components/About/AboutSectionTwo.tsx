import SectionTitle from "../Common/SectionTitle";
import AboutVideoShowcase from "./AboutVideoShowcase";

const AboutSectionTwo = () => {
  return (
    <section className="pt-12 pb-20">
      <div className="container">
        <div className="rounded-3xl bg-white/90 px-6 py-12 shadow-one backdrop-blur-sm md:px-14 md:py-16">
          <SectionTitle
            title="Video Highlights"
            paragraph=""
            width="720px"
            center
            mb="40px"
          />

          <AboutVideoShowcase />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
