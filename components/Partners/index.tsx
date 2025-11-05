import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const partners = [
  {
    id: "isf-junicorn",
    name: "ISF Junicorn",
    tagline: "Global innovation program mentoring young founders to scale climate solutions.",
    logo: "/images/logo/junicorn.jpg",
  },
  {
    id: "bia-whitefield",
    name: "Bangalore International Academy, Whitefield",
    tagline: "School community rallying students to champion sustainability with nGreenTech.",
    logo: "/images/logo/bangalore-international.png",
  },
  {
    id: "sri-krishna-institute",
    name: "Sri Krishna Institute of Technology, Bengaluru",
    tagline: "Engineering talent co-designing e-waste recovery playbooks and outreach.",
    logo: "/images/logo/sri-krishna.png",
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

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex h-full w-[260px] flex-col items-center gap-5 rounded-[32px] border border-primary/15 bg-white p-6 text-center shadow-two transition hover:-translate-y-1 hover:shadow-one"
            >
              <div className="flex w-[180px] flex-col items-center gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-gray-300 bg-gray-100">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
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
