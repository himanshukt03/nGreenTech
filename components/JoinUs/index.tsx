import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const JoinUs = () => {
  return (
  <section id="join-us" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="Join the movement"
          paragraph="Whether you are an institution designing sustainability blueprints or an individual pledging personal action, we are ready to co-create with you."
          mb="48px"
        />

  <div className="grid gap-8 md:grid-cols-2">
          <JoinTile
            eyebrow="Join Our Volunteer Team"
            title="Help us make the planet greener."
            bulletPoints={[
              "Lead e-waste drives, awareness campaigns, and research missions.",
              "Access training, toolkits, and squads shaped around your strengths.",
              "Earn recognition as an nGreenTech ambassador in your community.",
            ]}
            ctaLabel="Join Our Team"
            href="/join-our-team"
            accent="bg-primary/10"
          />
          <JoinTile
            eyebrow="Institutional Partners"
            title="Empower changemakers in your campus."
            bulletPoints={[
              "Join hands with NGreenTech to empower young changemakers in your institution.",
              "Host e-waste collection drives and sustainability workshops.",
              "Collaborate on awareness programs, research, and innovation projects.",
              "Access NGreenTech's resources, training, and recognition framework.",
              "Become a certified nGreenTech Institutional Partner championing responsible recycling.",
            ]}
            ctaLabel="Explore Partnership"
            href="/partner-with-us?type=institution"
            accent="bg-white"
          />
          <div className="grid gap-8 md:col-span-2 md:grid-cols-2">
            <JoinTile
              eyebrow="Corporate & Industry"
              title="Advance your sustainability and EPR goals."
              bulletPoints={[
                "Collaborate with NGreenTech to achieve your sustainability and EPR goals.",
                "Support formal e-waste recycling through CSR-driven initiatives.",
                "Partner in awareness campaigns, youth programs, and green innovation projects.",
                "Access verified recycling data, impact reports, and carbon credit insights.",
                "Be recognized as an nGreenTech Sustainability Partner driving responsible change.",
              ]}
              ctaLabel="Partner With Us"
              href="/partner-with-us?type=organization"
              accent="bg-primary/5"
            />
            <JoinTile
              eyebrow="Government & Policy"
              title="Build large-scale circular economy impact."
              bulletPoints={[
                "Collaborate with NGreenTech to advance national sustainability and circular economy goals.",
                "Enable large-scale e-waste management programs through youth and community engagement.",
                "Support awareness drives, data collection, and recycling initiatives aligned with EPR policies.",
                "Co-develop frameworks for critical mineral recovery and formal recycling systems.",
                "Be a Strategic Government Partner with NGreenTech - building a cleaner, greener India.",
              ]}
              ctaLabel="Connect With Us"
              href="/partner-with-us?type=government"
              accent="bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type JoinTileProps = {
  eyebrow: string;
  title: string;
  bulletPoints: string[];
  ctaLabel: string;
  href: string;
  accent: string;
};

const JoinTile = ({ eyebrow, title, bulletPoints, ctaLabel, href, accent }: JoinTileProps) => {
  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[34px] border border-primary/15 ${accent} p-10 shadow-btn-light transition hover:-translate-y-1 hover:shadow-one`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-10 top-10 h-36 w-36 rounded-full border border-primary/20 bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-14 -right-10 h-40 w-40 rounded-full border border-primary/20 bg-white/60 blur-2xl" />
      </div>

      <div className="relative z-[1] space-y-6">
        <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
        <h3 className="text-[1.75rem] font-semibold leading-tight text-dark">{title}</h3>
        <ul className="space-y-4 text-sm leading-relaxed text-body-color">
          {bulletPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 inline-flex h-1 w-10 rounded-full bg-primary/40" />
              <span className="flex-1">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-[1] mt-10">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-full border border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
