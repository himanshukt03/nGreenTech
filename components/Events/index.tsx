import SectionTitle from "../Common/SectionTitle";

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  badge?: string;
};

const upcomingEvents: EventItem[] = [];

const pastEvents: EventItem[] = [
  {
    id: "sdg-summit-2025",
    title: "SDG Summit 2025",
    date: "2025",
    location: "Global Forum",
    description: "Recap available on LinkedIn (@ngreentech_org).",
  },
  {
    id: "podcast-skit",
    title: "PODCAST at SKIT",
    date: "2025",
    location: "SKIT",
    description: "Listen in via LinkedIn for photos and session highlights.",
  },
  {
    id: "singularity-summit-2025",
    title: "Singularity Summit 2025",
    date: "2025",
    location: "Global Innovation Forum",
    description: "See LinkedIn for behind-the-scenes moments and key takeaways.",
  },
  {
    id: "christ-university",
    title: "Christ University",
    date: "2025",
    location: "Bengaluru, India",
    description: "Campus engagement stories documented on LinkedIn.",
  },
  {
    id: "august-fest-2025",
    title: "August Fest 2025",
    date: "2025",
    location: "Hyderabad, India",
    description: "Catch the showcase recap on LinkedIn (@ngreentech_org).",
  },
  {
    id: "isf-junicorn-texas",
    title: "ISF JUNICORN event at Texas State University",
    date: "2025",
    location: "Texas, USA",
    description: "Highlights and photos shared on our LinkedIn page.",
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
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <article
                    key={event.id}
                    className="rounded-2xl border border-primary/10 bg-white/95 p-6 shadow-btn-light transition hover:-translate-y-1 hover:shadow-one"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      {event.badge ? (
                        <span className="inline-flex items-center rounded-full border border-primary/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
                          {event.badge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary/70">
                          Upcoming
                        </span>
                      )}
                      <span className="text-sm font-semibold text-dark/70">{event.date}</span>
                    </div>
                    <h4 className="mt-5 text-2xl font-semibold text-dark">{event.title}</h4>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-body-color">
                      {event.location}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-body-color">{event.description}</p>
                  </article>
                ))
              ) : (
                <div className="rounded-2xl border border-primary/10 bg-white/95 p-6 text-sm leading-relaxed text-body-color shadow-btn-light">
                  I will update shortly.
                </div>
              )}
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
