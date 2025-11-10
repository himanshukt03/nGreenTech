import Link from "next/link";

const HomeJoinCTA = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-semibold text-dark">Join the movement</h2>
          <p className="mb-8 text-body-color">Be part of our youth-led climate action — volunteers, institutions, industry and government welcome.</p>
          <Link
            href="/join-us"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-btn transition hover:bg-primary/90"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeJoinCTA;
