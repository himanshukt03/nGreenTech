import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="rounded-3xl bg-white/80 px-6 py-12 shadow-one backdrop-blur-sm md:px-14 md:py-16">
          <SectionTitle
            center
            title="About nGreenTech"
            paragraph="nGreentech is youth led climate action movement founded by children. It unleashes the true potential in students at young age and give them a platform to raise as leaders by making them conduct sustainable initiatives as e- waste collection drives, tree plantations in their neighbourhood, schools etc. At nGreentech, we believe that every student if given right mentorship and platform can rise as powerful  leaders creating their own impact in present and future."
            mb="48px"
          />

          <div className="mt-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
              {/* Founder Section */}
              <article className="w-full max-w-[760px] justify-self-center rounded-3xl border border-primary/15 bg-white p-6 shadow-two md:p-8 lg:max-w-none lg:justify-self-stretch">
                <div className="mb-6 text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Founder</p>
                  <h3 className="mt-2 text-xl font-semibold text-dark md:text-2xl">Nayan Adithya Tangutooru</h3>
                </div>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  <div className="relative mx-auto w-full max-w-[320px] shrink-0 overflow-hidden rounded-2xl border border-primary/15 shadow-two sm:mx-0 sm:w-[260px]">
                    <img
                      src="/images/about/nayan_adithya.jpg"
                      alt="Portrait of Nayan Adithya Tangutooru"
                      className="aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 space-y-4 text-sm leading-relaxed text-body-color sm:text-base">
                    <p>
                      Nayan Adithya Tangutooru, a 10-year-old student of Bangalore International Academy, is the Founder &amp; CEO of nGreenTech. With a vision far beyond his age, he started nGreenTech to empower children to collect and recycle e-waste responsibly.
                    </p>
                    <p>
                      Nayan has shared his ideas on global platforms, including a presentation at Texas State University, USA, where he impressed audiences with his clarity, passion, and commitment. Under his leadership, nGreenTech has grown into a movement that nurtures youth leadership, sustainability, and innovation—proving that age is no barrier to making a global impact.
                    </p>
                  </div>
                </div>
              </article>

              {/* Video Section */}
              <div className="w-full max-w-[560px] justify-self-center mt-10 lg:mt-24 lg:justify-self-end">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-primary/20 shadow-two">
                  <iframe
                    src="https://www.youtube.com/embed/ApniMHLPgLo"
                    title="nGreenTech founder message"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-primary/15 bg-white/90 p-8 shadow-btn-light">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vision</p>
                <div className="mt-4 space-y-3">
                  {["Environment Protection", "Building Future Leaders", "Promoting Circular Economy"].map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold text-white ${
                        index === 0
                          ? "bg-[#f4b000]"
                          : index === 1
                            ? "bg-[#0096d6]"
                            : "bg-[#009952]"
                      }`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-base">
                        {index + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Mission</p>
                <div className="mt-4 space-y-3">
                  {[
                    "Building 1 Lakh Volunteers",
                    "E-Waste Collection Drives",
                    "Industrial visits and other engagements for Volunteers",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold text-white ${
                        index === 0
                          ? "bg-[#f4b000]"
                          : index === 1
                            ? "bg-[#0096d6]"
                            : "bg-[#009952]"
                      }`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-base">
                        {index + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
