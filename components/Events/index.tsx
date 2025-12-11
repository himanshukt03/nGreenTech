import { getImagePath } from "@/lib/utils";
import { EventRow } from "@/lib/googleSheets";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
};

// Static featured events (always shown)
const featuredEvents: EventItem[] = [
  {
    id: "tedx-youth-2025",
    title: "TEDx Youth Talk by Nayan Adithya",
    date: "19 November 2025",
    location: "TBD",
    description: "Nayan Adithya presents a youth-led perspective on climate action and circular economies.",
    badge: "Featured",
    image: getImagePath("/images/events/nayan-tedx.jpeg"),
    imageAlt: "TEDx Youth Talk by Nayan Adithya banner",
  },
];

// Static fallback when Google Sheets data is unavailable
const staticUpcomingEvents: EventItem[] = [
  {
    id: "ksit-talk-2025",
    title: "My Story — Motivational Talk by Nayan Adithya",
    date: "22 November 2025",
    location: "KSIT (Sri Krishna Institute of Technology), Bengaluru",
    description: "An inspiring session for engineering students on youth leadership and sustainable innovation.",
  },
];

type EventsProps = {
  /** Events from Google Sheets (optional). Falls back to static data if empty/undefined */
  sheetEvents?: EventRow[];
};

const Events = ({ sheetEvents }: EventsProps) => {
  // Dynamic events: use Google Sheets data if provided and non-empty, otherwise fall back to static
  const dynamicEvents: EventItem[] =
    sheetEvents && sheetEvents.length > 0
      ? sheetEvents.map((e) => ({
          id: e.id || String(Math.random()),
          title: e.title || "",
          date: e.date || "",
          location: e.location || "",
          description: e.description || "",
        }))
      : staticUpcomingEvents;

  // Helper to render an event card
  const renderEventCard = (event: EventItem) => (
    <article
      key={event.id}
      className="rounded-2xl border border-primary/10 bg-white/95 p-6 shadow-btn-light transition hover:-translate-y-1 hover:shadow-one"
    >
      <div
        className={
          event.image
            ? "grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr] lg:items-center"
            : "space-y-4"
        }
      >
        {event.image && (
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 shadow-two lg:max-w-[260px]">
            <div className="relative aspect-[7/8] w-full">
              <Image
                src={event.image}
                alt={event.imageAlt ?? event.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 45vw, 85vw"
                priority={event.id === "tedx-youth-2025"}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4">
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
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-dark/70">
              {event.date}
            </span>
          </div>
          <h4 className="text-[26px] font-semibold leading-snug text-dark md:text-[28px]">
            {event.title}
          </h4>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
            {event.location}
          </p>
          <p className="text-sm leading-relaxed text-body-color md:text-base">
            {event.description}
          </p>
        </div>
      </div>
    </article>
  );

  return (
    <section id="events" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="Key Events"
          paragraph=""
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
            {/* Featured events (static, always shown) */}
            {featuredEvents.map(renderEventCard)}
            
            {/* Dynamic events from Google Sheets */}
            {dynamicEvents.length > 0 ? (
              dynamicEvents.map(renderEventCard)
            ) : (
              <div className="rounded-2xl border border-primary/10 bg-white/95 p-6 text-sm leading-relaxed text-body-color shadow-btn-light">
                More events coming soon. Explore our past events for inspiration from the journey so far.
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
