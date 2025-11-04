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

const Events = () => {
  return (
    <section id="events" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="Upcoming Events"
          paragraph="Youth-led showcases, championships, and maker labs that keep the circular economy in motion."
          mb="56px"
        />

        <div className="rounded-3xl border border-primary/15 bg-white/90 p-8 shadow-two lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/10 pb-6">
            <h3 className="text-xl font-semibold text-dark">Next activations</h3>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
              More announcements soon
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
                Upcoming events will be published here shortly. Explore our past events for inspiration from the journey so far.
              </div>
            )}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-6">
            <p className="text-sm text-body-color">
              Want to co-host an activation with us? Reach out and we will help design the programme with your team.
            </p>
            <a
              href="/events"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-primary/90"
            >
              View Past Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
