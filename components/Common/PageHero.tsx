import Image from "next/image";
import Link from "next/link";

type Action = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  actions?: Action[];
  sectionClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
};

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  actions = [],
  sectionClassName,
  imageClassName,
  overlayClassName,
}: PageHeroProps) => {
  const sectionClasses = `relative overflow-hidden bg-dark/90 pb-20 pt-28 text-white md:pb-24 md:pt-36 lg:pb-28 lg:pt-40 ${
    sectionClassName ?? ""
  }`;
  const imageClasses = `object-cover opacity-50 ${imageClassName ?? ""}`;
  const overlayClasses = `absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/60 ${
    overlayClassName ?? ""
  }`;

  return (
    <section className={sectionClasses}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className={imageClasses}
        />
        <div className={overlayClasses} />
      </div>

      <div className="relative z-10">
        <div className="container max-w-5xl">
          <div className="space-y-6">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
              {description}
            </p>
            {actions.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="inline-flex items-center rounded-full bg-primary px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90"
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-0 right-0 flex justify-center">
        <div className="h-44 w-[120%] rounded-[50%] bg-white/10 blur-3xl" aria-hidden="true" />
      </div>
    </section>
  );
};

export default PageHero;
