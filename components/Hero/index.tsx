"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  id: string;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
};

const slides: Slide[] = [
  {
    id: "ngreen-india-challenge",
    title: "nGreen India Challenge",
    description: "National Inter school E waste Competiton.",
    image: "/images/hero/e-waste_challenege.png",
    mobileImage: "/images/hero/e-waste_challenege-mobile.png",
  },
  {
    id: "sdg-4",
    title: "SDG 4 – Quality Education",
    description: "Promoting environmental education and leadership skills in students.",
    image: "/images/hero/education.jpg",
  },
  {
    id: "sdg-8",
    title: "SDG 8 – Decent Work & Economic Growth",
    description: "Advancing green entrepreneurship and innovation for young leaders.",
    image: "/images/hero/decent-work.jpg",
  },
  {
    id: "sdg-11",
    title: "SDG 11 – Sustainable Cities & Communities",
    description: "Building e-waste solutions with neighbourhoods and civic bodies.",
    image: "/images/hero/Sustainable-cities.jpeg",
  },
  {
    id: "sdg-12",
    title: "SDG 12 – Responsible Consumption & Production",
    description: "Scaling formal recycling and circular economy practices.",
    image: "/images/hero/consumption.jpg",
  },
  {
    id: "sdg-13",
    title: "SDG 13 – Climate Action",
    description: "Cutting emissions through safe and traceable e-waste recovery.",
    image: "/images/hero/climate-action.jpg",
  },
  {
    id: "sdg-17",
    title: "SDG 17 – Partnerships for the Goals",
    description: "Collaborating with schools, industries, and NGOs to amplify impact.",
    image: "/images/hero/Partnershipsjpeg.jpeg",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldAutoRotate, setShouldAutoRotate] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setShouldAutoRotate(!mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    if (!shouldAutoRotate) {
      return undefined;
    }

    const duration = activeIndex === 0 ? 15000 : 7000; // 15s for first slide (8s more), 7s for others

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [shouldAutoRotate, activeIndex]);

  const handleIndicatorSelect = (index: number) => {
    setActiveIndex(index);
  };

  const activeSlide = slides[activeIndex];

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center overflow-hidden bg-dark/80 pt-[88px]"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isFirstSlide = index === 0;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === activeIndex ? "z-20 opacity-100" : "z-10 opacity-0"
              }`}
            >
              {/* Desktop Image */}
              <div
                className={`hidden h-full w-full md:block`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: isFirstSlide ? "contain" : "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: isFirstSlide ? "#cae2ff" : undefined,
                  backgroundOrigin: isFirstSlide ? "content-box" : undefined,
                  paddingTop: isFirstSlide ? "90px" : undefined,
                  paddingBottom: isFirstSlide ? "0px" : undefined,
                }}
              />

              {/* Mobile Image */}
              <div
                className={`block h-full w-full md:hidden`}
                style={{
                  backgroundImage: `url(${slide.mobileImage || slide.image})`,
                  backgroundSize: isFirstSlide ? "contain" : "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: isFirstSlide ? "#cae2ff" : undefined,
                  backgroundOrigin: isFirstSlide ? "content-box" : undefined,
                  paddingTop: isFirstSlide ? "80px" : undefined,
                  paddingBottom: isFirstSlide ? "0px" : undefined,
                }}
              />

              {!isFirstSlide && <div className="absolute inset-0 bg-black/50" />}
              {isFirstSlide && (
                <Link
                  href="/ngreen-india-challenge"
                  className="absolute left-1/2 top-[65%] z-30 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-white bg-primary px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(0,0,0,0.3)] transition duration-300 hover:scale-105 hover:bg-primary/90 md:top-[82%] md:px-10 md:py-4 md:text-sm"
                >
                  Register Now
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {activeIndex !== 0 && (
        <div className="relative z-30 w-full">
          <div className="container">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
                {activeSlide.title}
              </h1>
              <p className="text-base leading-relaxed text-white/90">
                {activeSlide.description}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/join-us"
                  className="rounded-full bg-primary/90 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-btn transition hover:bg-primary"
                >
                  Join The Movement
                </Link>
                <Link
                  href="/#about"
                  className="rounded-full border border-white/50 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white"
                >
                  Explore Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-10 left-1/2 z-40 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full bg-white/35 px-6 py-3 backdrop-blur-md">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => handleIndicatorSelect(index)}
                className={
                  isActive
                    ? "h-2 w-8 rounded-full bg-white"
                    : "h-2 w-2 rounded-full bg-white/60 transition hover:bg-white/80"
                }
                aria-label={`Show ${slide.title}`}
              >
                <span className="sr-only">{`Activate ${slide.title}`}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
