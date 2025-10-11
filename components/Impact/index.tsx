"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

type Metric = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

const metrics: Metric[] = [
  {
    id: "awareness",
    label: "Awareness Generated",
    value: 10000,
    suffix: "+",
  },
  {
    id: "ewaste",
    label: "E-Waste Collected",
    value: 200,
    suffix: "+ Kgs",
  },
  {
    id: "leaders",
    label: "Student Leaders",
    value: 25,
    suffix: "+",
  },
];

const animationDuration = 1600;

const Impact = () => {
  const [counts, setCounts] = useState<number[]>(() => metrics.map(() => 0));
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let frameId: number | null = null;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const start = performance.now();

      const animate = (timestamp: number) => {
        const progress = Math.min((timestamp - start) / animationDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCounts(metrics.map((metric) => Math.round(metric.value * eased)));

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setCounts(metrics.map((metric) => metric.value));
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="impact" className="bg-gray-light/70 py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          center
          title="Impact that compounds"
          paragraph="Each partnership turns discarded devices into community assets and climate confidence for young people."
          mb="48px"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="rounded-3xl border border-primary/15 bg-white px-8 py-10 text-center shadow-two transition hover:-translate-y-1 hover:shadow-one"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                {metric.label}
              </p>
              <p className="mt-4 text-4xl font-semibold text-dark">
                {counts[index].toLocaleString()}
                {metric.suffix ? (
                  <span className="ml-2 align-middle text-3xl font-semibold text-primary/80">
                    {metric.suffix}
                  </span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
