import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const HomeCTA = () => {
  return (
    <section id="join-us" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[34px] border border-primary/15 bg-white p-10 text-center shadow-btn-light transition hover:shadow-one md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -left-12 top-12 h-40 w-40 rounded-full border border-primary/20 bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full border border-primary/20 bg-primary/10 blur-2xl" />
          </div>

          <div className="relative z-[1]">
            <SectionTitle
              center
              title="Join the movement"
              paragraph="Tap into nGreenTech's network of volunteers, institutions, industries, and government allies championing circular innovation."
              width="640px"
              mb="40px"
            />

            <div className="flex items-center justify-center">
              <Link
                href="/join-us"
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-10 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90"
              >
                Explore How to Join
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
