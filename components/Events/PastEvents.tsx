import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

type PastEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
  image: string;
};

const pastEvents: PastEvent[] = [
  {
    id: "sdg-summit-2025",
    title: "SDG Summit 2025",
    date: "2025",
    location: "Global Forum",
    description: "Recap available on LinkedIn (@ngreentech_org).",
    link: "https://www.linkedin.com/posts/ngreen-tech_ngreentech-sdgsummit2025-visionkarnatakafoundation-activity-7382742388638867456-iwrF",
    image: "/images/events/sgd-summit.jpeg",
  },
  {
    id: "podcast-skit",
    title: "Podcast at SKIT",
    date: "2025",
    location: "SKIT",
    description: "Listen in through our LinkedIn posts for session highlights and behind-the-scenes moments.",
    link: "https://www.linkedin.com/company/ngreen-tech/",
    image: "/images/blog/blog-03.jpg",
  },
  {
    id: "singularity-summit-2025",
    title: "Singularity Summit 2025",
    date: "2025",
    location: "Global Innovation Forum",
    description: "Students presented circular innovations alongside global futurists.",
    link: "https://www.linkedin.com/posts/ngreen-tech_youthleadership-isfjunicorn-innovation-activity-7370077677908590592-vsdB",
    image: "/images/events/singularity.jpeg",
  },
  {
    id: "christ-university",
    title: "Christ University",
    date: "2025",
    location: "Bengaluru, India",
    description:
      "Guest of Honor address by Nayan Adithya, sharing NGreenTech's youth-led e-waste recycling vision and thanking Christ University leadership and ISF Junicorn mentors for the platform.",
    link: "https://www.linkedin.com/posts/ngreen-tech_ngreentech-sustainability-christuniversity-activity-7365629716189417473-buoE",
    image: "/images/events/christ.jpeg",
  },
  {
    id: "august-fest-2025",
    title: "August Fest 2025",
    date: "2025",
    location: "Hyderabad, India",
    description: "Showcased e-waste recovery playbooks to startup founders and investors.",
    link: "https://www.linkedin.com/company/ngreen-tech/",
    image: "/images/hero/Sustainable-cities.jpeg",
  },
  {
    id: "isf-junicorn-texas",
    title: "ISF JUNICORN event at Texas State University",
    date: "2025",
    location: "Texas, USA",
    description: "nGreenTech teams collaborated with global peers on circular economy solutions.",
    link: "https://www.linkedin.com/company/ngreen-tech/",
    image: "/images/events/isf.jpg",
  },
];

const PastEvents = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="Past Events"
          paragraph="A snapshot of global summits, campus showcases, and community drives our youth squads have powered."
          mb="56px"
        />

        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {pastEvents.map((event) => (
            <article
              key={event.id}
              className="flex h-full flex-col overflow-hidden rounded-[26px] border border-primary/15 bg-white/95 shadow-two transition hover:-translate-y-0.5 hover:shadow-one"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white">
                  {event.date}
                </div>
              </div>

              <div className="flex flex-col gap-4 px-5 pb-4 pt-3 sm:px-5 sm:pb-5">
                <div className="space-y-2">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/70">
                    {event.location}
                  </div>
                  <h3 className="text-xl font-semibold leading-tight text-dark">{event.title}</h3>
                  <p className="text-[0.92rem] leading-relaxed text-body-color">{event.description}</p>
                </div>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-max items-center rounded-full bg-primary px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-primary/90"
                  >
                    View Highlights
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
