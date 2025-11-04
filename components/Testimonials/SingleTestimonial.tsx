import { Testimonial } from "@/types/testimonial";

const quoteIcon = (
  <svg width="40" height="32" viewBox="0 0 40 32" className="fill-current">
    <path d="M15.77 0C9.33 0 4 5.2 4 11.6c0 4.52 2.36 7.6 6.28 9.24-.56 3.96-3.68 7-6.28 7.84L6.6 32c6.16-2.24 9.72-7.84 9.72-14.2 0-1.36-.08-2.28-.24-3.04 1.12-.24 3.28-1.04 3.28-1.04L18.84 10s-2.64-.08-4.04-.08c-.36-3.36 1.44-5.8 4.72-6.32L15.77 0Zm18.46 0C27.79 0 22.46 5.2 22.46 11.6c0 4.52 2.36 7.6 6.28 9.24-.56 3.96-3.68 7-6.28 7.84l2.6 3.32c6.16-2.24 9.72-7.84 9.72-14.2 0-1.36-.08-2.28-.24-3.04 1.12-.24 3.28-1.04 3.28-1.04L37.3 10s-2.68-.08-4.08-.08c-.36-3.36 1.48-5.8 4.76-6.32L34.23 0Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, content, designation } = testimonial;

  return (
    <article className="relative flex h-full flex-col justify-between gap-8 rounded-2xl border border-primary/15 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-dark">
      <span className="text-primary">{quoteIcon}</span>
      <p className="text-base leading-relaxed text-body-color dark:text-white">
        {content}
      </p>
      <div className="flex flex-col">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{name}</span>
        <span className="text-sm text-body-color dark:text-white/70">{designation}</span>
      </div>
      <span className="pointer-events-none absolute -bottom-4 right-6 text-primary/10">
        {quoteIcon}
      </span>
    </article>
  );
};

export default SingleTestimonial;
