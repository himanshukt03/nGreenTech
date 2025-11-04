import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import PartnerForm from "@/components/JoinUs/PartnerForm";

type PartnerWithUsPageProps = {
  searchParams: {
    type?: string;
  };
};

const formTabs = [
  {
    value: "institution" as const,
    label: "Educational Institutions",
    summary: "Empower students with hands-on sustainability missions, e-waste drives, and leadership training.",
  },
  {
    value: "organization" as const,
    label: "Organizations & Industries",
    summary: "Align CSR, EPR, and employee engagement goals with measurable climate impact.",
  },
  {
    value: "government" as const,
    label: "Government & Policy",
    summary: "Co-develop large-scale awareness, policy, and youth programmes across regions.",
  },
];

const PartnerWithUsPage = ({ searchParams }: PartnerWithUsPageProps) => {
  const urlVariant = (searchParams.type as (typeof formTabs)[number]["value"]) ?? "institution";
  const activeTab = formTabs.find((tab) => tab.value === urlVariant) ?? formTabs[0];

  return (
    <div className="py-24 md:py-28 lg:py-32">
      <div className="container max-w-5xl">
        <SectionTitle
          title="Partner With NGreenTech"
          paragraph={activeTab.summary}
          mb="32px"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {formTabs.map((tab) => {
            const isActive = tab.value === activeTab.value;
            return (
              <Link
                key={tab.value}
                href={tab.value === formTabs[0].value ? "/partner-with-us" : `/partner-with-us?type=${tab.value}`}
                className={`inline-flex items-center rounded-full border px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-btn"
                    : "border-primary/20 bg-white text-body-color hover:border-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <PartnerForm variant={activeTab.value} />

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

export default PartnerWithUsPage;
