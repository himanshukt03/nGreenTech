"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const Hero = () => {
  const slides = useMemo<Slide[]>(
    () => [
      {
        id: "sdg-4",
        title: "SDG 4 – Quality Education",
        description: "- Promoting Environmental Education and Leadership Skills in students",
        image: "/images/hero/education.jpg",
      },
      {
        id: "sdg-8",
        title: "SDG 8 – Decent Work & Economic Growth",
        description: "- green entrepreneurship & innovation",
        image: "/images/hero/decent-work.webp",
      },
      {
        id: "sdg-11",
        title: "SDG 11 – Sustainable Cities & Communities",
        description: "- community level e-waste solutions",
        image: "/images/hero/Sustainable-cities.jpeg",
      },
      {
        id: "sdg-12",
        title: "SDG 12 – Responsible Consumption & Production",
        description: "- formal recycling & circular economy",
        image: "/images/hero/consumption.webp",
      },
      {
        id: "sdg-13",
        title: "SDG 13 – Climate Action",
        description: "- cutting emissions via safe e-waste recovery",
        image: "/images/hero/climate%20action.png",
      },
      {
        id: "sdg-17",
        title: "SDG 17 – Partnerships for the Goals",
        description: "- collaborating with schools, industries & NGOs",
        image: "/images/hero/Partnershipsjpeg.jpeg",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-70px)] min-h-[700px] w-full items-center overflow-hidden bg-dark/80 pt-[88px] md:h-[calc(100vh-70px)] lg:min-h-[760px]"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === activeIndex
                ? "z-20 opacity-100"
                : "z-10 opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

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
                href="/#join-us"
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

      <div className="absolute bottom-10 left-1/2 z-40 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full bg-white/35 px-6 py-3 backdrop-blur-md">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <span
                key={slide.id}
                aria-hidden="true"
                className={
                  isActive
                    ? "h-2 w-8 rounded-full bg-white"
                    : "h-2 w-2 rounded-full bg-white/60"
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
