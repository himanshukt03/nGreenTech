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
            eyebrow="Join our volunteer team"
            title="Help us build a sustainable future through environmental action."
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
            eyebrow="Partner with us"
            title="Co-create programmes that mobilise institutions and communities."
            bulletPoints={[
              "Design circularity playbooks and sustainability dashboards for campuses.",
              "Deploy student-led and community-focused stewardship initiatives.",
              "Collaborate on awareness, events, and impact reporting that scale."
            ]}
            ctaLabel="Partner With Us"
            href="/partner-with-us"
            accent="bg-white"
          />
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
    <div className={`flex h-full flex-col justify-between rounded-3xl border border-primary/15 ${accent} p-8 shadow-btn-light`}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold text-dark">{title}</h3>
        <ul className="mt-5 space-y-3 text-sm text-body-color">
          {bulletPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 h-1 w-12 rounded-full bg-primary/40" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-primary/90"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
