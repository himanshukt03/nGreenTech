'use client';

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import PartnerForm from "@/components/JoinUs/PartnerForm";

type PartnerFormVariant = "institution" | "organization" | "government";

type FormTab = {
  value: PartnerFormVariant;
  label: string;
  summary: string;
};

const formTabs: FormTab[] = [
  {
    value: "institution",
    label: "Educational Institutions",
    summary: "Empower students with hands-on sustainability missions, e-waste drives, and leadership training.",
  },
  {
    value: "organization",
    label: "Organizations & Industries",
    summary: "Align CSR, EPR, and employee engagement goals with measurable climate impact.",
  },
  {
    value: "government",
    label: "Government & Policy",
    summary: "Co-develop large-scale awareness, policy, and youth programmes across regions.",
  },
];

const PartnerWithUsContent = () => {
  const [activeVariant, setActiveVariant] = useState<PartnerFormVariant>("institution");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    if (type === "organization" || type === "government") {
      setActiveVariant(type);
    }
  }, []);

  const handleSelect = useCallback(
    (nextVariant: PartnerFormVariant) => {
      setActiveVariant(nextVariant);

      if (typeof window === "undefined") {
        return;
      }

      const params = new URLSearchParams(window.location.search);
      if (nextVariant === "institution") {
        params.delete("type");
      } else {
        params.set("type", nextVariant);
      }

      const query = params.toString();
      const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}`;
      window.history.replaceState(null, "", nextUrl);
    },
    [],
  );

  const activeTab = formTabs.find((tab) => tab.value === activeVariant) ?? formTabs[0];

  return (
    <div className="py-24 md:py-28 lg:py-32">
      <div className="container max-w-5xl">
        <SectionTitle title="Partner With NGreenTech" paragraph={activeTab.summary} mb="32px" />

        <div className="mb-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Partner form type">
          {formTabs.map((tab) => {
            const isActive = tab.value === activeTab.value;

            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelect(tab.value)}
                className={`inline-flex items-center rounded-full border px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-btn"
                    : "border-primary/20 bg-white text-body-color hover:border-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <PartnerForm key={activeTab.value} variant={activeTab.value} />

        <div className="mt-10 text-center text-sm text-body-color">
          Want to volunteer as an individual instead?{" "}
          <Link href="/join-our-team" className="font-semibold text-primary hover:underline">
            Head to the volunteer form
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsContent;
