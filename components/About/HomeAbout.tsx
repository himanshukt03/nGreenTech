import SectionTitle from "../Common/SectionTitle";

const HomeAbout = () => {
  return (
    <section id="about" className="bg-gray-light/40 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="rounded-3xl border border-primary/15 bg-white/95 p-8 shadow-two md:p-12">
            <SectionTitle
              title="About nGreenTech"
              paragraph="nGreenTech is a youth-led climate action movement founded by children. We help students design joyful sustainability missions like e-waste drives and neighbourhood plantations, giving them a platform to grow as confident, impact-first leaders."
              mb="32px"
            />
            <div className="space-y-5 text-sm leading-relaxed text-body-color">
              <p>
                We combine environmental education, circular economy projects, and mentorship so that purpose-driven ideas can scale from classrooms to communities. Every programme builds climate literacy while unlocking leadership, creativity, and collaboration.
              </p>
              <p>
                From zero-waste challenges to safe e-waste recovery, students experience the full lifecycle of impact delivery. Their stories keep inspiring new squads to join the mission and shape a greener present and future.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-primary/20 bg-black/60 shadow-two">
              <iframe
                src="https://www.youtube.com/embed/ApniMHLPgLo"
                title="nGreenTech founder message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="rounded-3xl border border-primary/15 bg-white/95 p-6 shadow-btn-light">
              <h3 className="text-base font-semibold text-dark">
                Mini leaders. Mega mission.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body-color">
                nGreenTech nurtures future-ready innovators who take charge of local climate issues today. Explore our founder stories, vision, and mission to see how students are rewriting the rules of sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
