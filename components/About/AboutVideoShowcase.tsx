"use client";

const videoStories = [
  {
    id: "ceo-message",
    videoId: "4suFR8UZscY",
    title: "Spark in Scrap | TEDxNHVPS Youth",
    description:
      "Nayan explains how nGreenTech began and why young climate leaders are crucial for India’s zero e-waste future.",
  },
  {
    id: "mission-recap",
    videoId: "MrJlOsCStQw",
    title: "nGreenTech Mission Highlights",
    description:
      "Exclusive interview with 11-year-old Nayan Adithya, founder of an e-waste management company, on his motivation and vision for a cleaner planet.",
  },
];

const AboutVideoShowcase = () => {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2">
      {videoStories.map((video) => (
        <VideoStoryCard key={video.id} video={video} />
      ))}
    </div>
  );
};

type VideoStory = (typeof videoStories)[number];

const VideoStoryCard = ({ video }: { video: VideoStory }) => {
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}?rel=0`;

  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-primary/15 bg-white/95 p-4 shadow-two">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-dark/5">
        <iframe
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="space-y-2 px-3 pb-4">
        <h4 className="text-xl font-semibold text-dark">{video.title}</h4>
        <p className="text-sm leading-relaxed text-body-color">{video.description}</p>
      </div>
    </article>
  );
};

export default AboutVideoShowcase;
