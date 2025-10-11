import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="pt-12 pb-20">
      <div className="container">
        <div className="rounded-3xl bg-white/80 px-6 py-12 shadow-one backdrop-blur-sm md:px-14 md:py-16">
          <SectionTitle
            center
            title="Our Impact"
            paragraph="nGreenTech has mobilized young volunteers, run e-waste collection drives, and created learning programs that combine climate education with hands-on recycling. Here are a few highlights."
            mb="48px"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Volunteers", value: "12,345" },
              { label: "E-waste kg", value: "4,200" },
              { label: "Schools", value: "180" },
              { label: "Workshops", value: "320" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-primary/15 bg-white p-6 text-center shadow-two"
              >
                <div className="text-3xl font-bold text-dark">{item.value}</div>
                <div className="mt-2 text-sm font-semibold text-body-color">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
