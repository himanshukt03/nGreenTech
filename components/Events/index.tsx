import SectionTitle from "../Common/SectionTitle";

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  badge?: string;
};

const upcomingEvents: EventItem[] = [
  {
    id: "green-summit",
    title: "nGreenTech x Schools Climate League",
    date: "26 Oct 2025",
    location: "Hyderabad, India",
    description:
      "Play-off style championship where school teams go head-to-head on solving real e-waste case files with live mentoring.",
    badge: "Upcoming",
  },
  {
    id: "repair-lab",
    title: "Circular Repair Lab",
    date: "09 Nov 2025",
    location: "Visakhapatnam Makers Lab",
    description:
      "Hands-on fix-a-thon pairing repair coaches with students to extend gadget lifecycles and document emissions avoided.",
    badge: "Limited Seats",
  },
];

const pastEvents: EventItem[] = [
  {
    id: "junicorn",
    title: "ISF JUNICORN Sustainability Sprint",
    date: "Jul 2025",
    location: "Delhi NCR",
    description:
      "40 student founders co-designed e-waste ventures earning 4.6 tonnes in avoided emissions.",
  },
  {
    id: "green-drive",
    title: "Community E-waste Drive",
    date: "Mar 2025",
    location: "Andhra Pradesh",
    description:
      "Six ward committees activated for source segregation with 82 kg responsibly channelised in 48 hours.",
  },
  {
    id: "youth-lab",
    title: "Youth Eco Innovators Lab",
    date: "Dec 2024",
    location: "Virtual",
    description:
      "Cross-country accelerator showcasing 15 prototypes for circular living inside campuses.",
  },
];

const Events = () => {
  return (
    <section id="events" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="Events"
          paragraph="Championship-style programs that combine play, peer energy, and measurable climate outcomes."
          mb="56px"
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.9fr]">
          <div className="rounded-3xl border border-primary/15 bg-white/90 p-8 shadow-two lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-primary/10 pb-6">
              <h3 className="text-xl font-semibold text-dark">Upcoming Line-up</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                Next 60 Days
              </span>
            </div>
            <div className="mt-6 space-y-6">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="rounded-2xl border border-primary/10 bg-white/95 p-6 shadow-btn-light transition hover:-translate-y-1 hover:shadow-one"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full border border-primary/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
                      {event.badge}
                    </span>
                    <span className="text-sm font-semibold text-dark/70">{event.date}</span>
                  </div>
                  <h4 className="mt-5 text-2xl font-semibold text-dark">{event.title}</h4>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-body-color">
                    {event.location}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-body-color">{event.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-primary/10 bg-gray-light/60 p-8 shadow-btn-light lg:p-10">
            <div className="border-b border-primary/10 pb-6">
              <h4 className="text-lg font-semibold text-dark">Past Event Highlights</h4>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-body-color">
                From sprints to city drives
              </p>
            </div>
            <ol className="relative mt-8 space-y-6 border-l border-primary/15 pl-6">
              {pastEvents.map((event, index) => (
                <li key={event.id} className="relative">
                  <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border border-primary/20 bg-white text-[10px] font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    {event.date}
                  </p>
                  <h5 className="mt-2 text-lg font-semibold text-dark">{event.title}</h5>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-body-color">
                    {event.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body-color">{event.description}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Events;
