import Image from "next/image";

type AboutSectionOneProps = {
  showVideo?: boolean;
};

const AboutSectionOne = ({ showVideo = true }: AboutSectionOneProps) => {
  const gridClasses = showVideo
    ? "grid gap-10 lg:grid-cols-[1.2fr,0.8fr]"
    : "grid gap-10";

  return (
    <section id="about" className="pt-12 md:pt-16 lg:pt-20">
      <div className="container">
        <div className="mt-6">
          <div className={gridClasses}>
            {/* Founder Section */}
            <article
              className={`relative isolate w-full overflow-hidden rounded-[36px] border border-primary/10 bg-white/95 p-6 shadow-two md:p-10 ${
                showVideo ? "lg:max-w-none" : "lg:col-span-full"
              }`}
            >
              <div
                className="absolute inset-0 -z-[1] bg-gradient-to-br from-primary/5 via-white to-white/80"
                aria-hidden="true"
              />

              <div className="grid gap-6 sm:grid-cols-[1fr,auto] sm:items-start">
                {/* Left Column: Title and Content */}
                <div className="flex flex-col gap-6">
                  <div className="text-left">
                    <h3 className="text-[2.25rem] font-semibold leading-tight text-dark sm:text-[2.5rem] md:text-[2.75rem]">
                      Nayan Adithya Tangutooru
                    </h3>
                    <span className="mt-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary">
                      Founder
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 text-base leading-relaxed text-body-color sm:text-lg">
                    <p>
                      Nayan Adithya Tangutooru, a 10-year-old student of Bangalore International Academy, is the Founder &amp; CEO of nGreenTech. With a vision far beyond his age, he started nGreenTech to empower children to collect and recycle e-waste responsibly.
                    </p>
                    <p>
                      Nayan has shared his ideas on global platforms, including a presentation at Texas State University, USA, where he impressed audiences with his clarity, passion, and commitment. Under his leadership, nGreenTech has grown into a movement that nurtures youth leadership, sustainability, and innovation—proving that age is no barrier to making a global impact.
                    </p>
                  </div>
                </div>

                {/* Right Column: Image */}
                <figure className="group relative mx-auto w-full max-w-[200px] overflow-hidden rounded-[24px] border border-primary/15 bg-primary/5 shadow-two sm:mx-0 sm:max-w-[240px] md:max-w-[280px]">
                  <Image
                    src="/images/about/nayan_adithya.jpg"
                    alt="Portrait of Nayan Adithya Tangutooru"
                    width={280}
                    height={350}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 280px, 200px"
                    priority={showVideo}
                  />
                </figure>
              </div>
            </article>

            {showVideo && (
              <div className="mt-10 w-full max-w-[560px] justify-self-center lg:mt-24 lg:justify-self-end">
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
            )}
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
    </section>
  );
};

export default AboutSectionOne;
