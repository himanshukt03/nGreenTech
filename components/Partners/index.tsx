import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const partners = [
  {
    id: "aarohan",
    name: "Aarohan",
    tagline: "Women-led innovation collective backing grassroots climate founders",
    logo: "/images/brands/ayroui.svg",
  },
  {
    id: "startup-runway",
    name: "Startup Runway",
    tagline: "Fueling student-led climate ventures from idea to pilot",
    logo: "/images/brands/tailgrids-light.svg",
  },
  {
    id: "us-india",
    name: "Linecoins",
    tagline: "Industry mentors co-designing circular economy playbooks",
    logo: "/images/brands/lineicons.svg",
  },
  {
    id: "tie-austin",
    name: "TiE Austin",
    tagline: "Global entrepreneurs cultivating green leadership pathways",
    logo: "/images/brands/uideck-light.svg",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="bg-gray-light/70 py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          center
          title="Supporting Organizations"
          paragraph="Collaborating with innovative institutions to drive climate action, youth leadership, and technology-forward solutions."
          mb="48px"
        />

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex h-full flex-col items-center gap-5 rounded-[32px] border border-primary/15 bg-white p-6 text-center shadow-two transition hover:-translate-y-1 hover:shadow-one"
            >
              <div className="flex w-full max-w-[180px] flex-col items-center gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-primary/15 bg-gray-100">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-5"
                      sizes="180px"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold uppercase tracking-[0.2em] text-primary">
                      {partner.name
                        .split(" ")
                        .map((word) => word[0] ?? "")
                        .join("")
                        .slice(0, 3)}
                    </span>
                  )}
                </div>
                <p className="text-base font-semibold text-dark">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
