"use client";

import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

type Member = {
  id: string;
  name: string;
  role: string;
  grade: string;
  school: string;
  location: string;
  phone?: string;
  email?: string;
  summary: string;
  bio: string;
  highlight?: string;
  mediaUrl?: string;
  image?: string;
};

type Leader = {
  id: string;
  rank: number;
  name: string;
  ewaste: string;
  points: number;
};

const members: Member[] = [
  {
    id: "nayan-adithya",
    name: "Nayan Adithya Tangutooru",
    role: "Founder & CEO",
    grade: "Grade V",
    school: "Bangalore International Academy",
    location: "Bengaluru, Karnataka",
    phone: "7730041280",
    email: "tnayanadithya@gmail.com",
    summary: "Leads nGreenTech's youth-led movement and inspires peers to lead climate missions across India.",
    bio: "Nayan founded nGreenTech to prove children can be powerful climate leaders. He designs programmes, speaks at global forums, and mentors every squad that joins the mission.",
  highlight: "Chaired international sessions including Texas State University's ISF JUNICORN showcase.",
    mediaUrl: "https://www.youtube.com/watch?v=ApniMHLPgLo",
    image: getImagePath("/images/about/nayan_adithya.jpg"),
  },
  {
    id: "utkarsh",
    name: "Utkarsh",
    role: "Operations Captain",
    grade: "Grade VI",
    school: "Chrysalis High",
    location: "Bengaluru, Karnataka",
    summary: "Champions device auditing drives and keeps campus teams focused on safe recycling standards.",
    bio: "Utkarsh leads weekly peer briefings to catalogue gadgets for drop-off, coordinates logistics, and ensures every collection follows safety-first protocols.",
    highlight: "Designed the labelling workflow now adopted by partnering schools.",
  },
  {
    id: "praneesh",
    name: "Praneesh",
    role: "Logistics Lead",
    grade: "Grade VII",
    school: "Whitefield Global School",
    location: "Bengaluru, Karnataka",
    summary: "Coordinates volunteer rosters and ensures every drive runs with clockwork precision.",
    bio: "Praneesh manages sign-ups, routing, and inventory tracking so that each neighbourhood collection hits its targets without waste.",
    highlight: "Introduced barcode tracking for collected devices to improve transparency.",
  },
  {
    id: "aradhya",
    name: "Aradhya",
    role: "Storytelling Champion",
    grade: "Grade V",
    school: "AHPS",
    location: "Bengaluru, Karnataka",
    summary: "Turns every climate initiative into a story that moves classmates and communities.",
    bio: "Aradhya documents drive highlights, hosts assemblies, and produces short films that keep sustainability conversations vibrant in schools.",
    highlight: "Directed mini-documentaries celebrating volunteer-led repair missions.",
  },
  {
    id: "suhit",
    name: "Suhit",
    role: "Collection Strategist",
    grade: "Grade VI",
    school: "Bangalore International Academy",
    location: "Bengaluru, Karnataka",
    summary: "Builds neighbourhood action plans that bring record e-waste collections every month.",
    bio: "Suhit coaches junior squads on doorstep conversations, ensuring families understand why safe recycling matters and how to participate.",
    highlight: "Achieved the highest monthly recovery with 16 Kgs collected in a single drive.",
  },
  {
    id: "vynavi",
    name: "Vynavi",
    role: "Community Connector",
    grade: "Grade IV",
    school: "Vagdevi Vilas School",
    location: "Bengaluru, Karnataka",
    summary: "Brings families, schools, and local businesses together for climate-positive events.",
    bio: "Vynavi curates green pledges, coordinates plantation drives, and keeps younger buddies energised with creative challenges.",
    highlight: "Mobilised three neighbourhoods for a week-long segregation marathon.",
  },
  {
    id: "josith",
    name: "Josith",
    role: "Regional Lead",
    grade: "Grade V",
    school: "Maria Public School",
    location: "Guwahati, Assam",
    summary: "Launches regional awareness rallies and partners with civic teams for safe collection.",
    bio: "Josith builds collaborations with local groups in Assam to open accessible drop-off stations and share circular economy know-how.",
    highlight: "Scaled the city's first children's climate pledge wall.",
  },
  {
    id: "aadya",
    name: "Aadya",
    role: "Design & Outreach",
    grade: "Grade VII",
    school: "National Public School",
    location: "Bengaluru, Karnataka",
    summary: "Designs posters and social snippets that rally classmates for every drive.",
    bio: "Aadya curates digital toolkits, writes quick explainers, and keeps chapters aligned on campaign messaging.",
    highlight: "Built a template library now used across two chapters.",
  },
  {
    id: "adarsh-rathi",
    name: "Adarsh Rathi",
    role: "Innovation Scout",
    grade: "Grade VIII",
    school: "Bangalore International Academy",
    location: "Bengaluru, Karnataka",
    summary: "Explores new reuse pathways for refurbished gadgets and components.",
    bio: "Adarsh experiments with upcycling ideas, tracks repair success stories, and mentors peers on responsible tech usage.",
    highlight: "Piloted a device donation loop connecting students with NGOs.",
  },
  {
    id: "nandhan",
    name: "Nandhan",
    role: "Impact Analyst",
    grade: "Grade VII",
    school: "Bangalore International Academy",
    location: "Bengaluru, Karnataka",
    summary: "Transforms collection data into dashboards that show real climate impact.",
    bio: "Nandhan compiles weekly reports, validates weights, and shares results with chapters to keep the momentum high.",
    highlight: "Introduced impact scorecards that volunteers now review after every drive.",
  },
];

const leaderboard: Leader[] = [
  { id: "leader-suhit", rank: 1, name: "Suhit", ewaste: "16 Kgs", points: 160 },
  { id: "leader-aradhya", rank: 2, name: "Aradhya", ewaste: "15 Kgs", points: 150 },
  { id: "leader-pranish", rank: 3, name: "Pranish", ewaste: "10 kgs", points: 100 },
  { id: "leader-nandan", rank: 3, name: "Nandan", ewaste: "10 kgs", points: 100 },
  { id: "leader-utkarsh", rank: 5, name: "Utkarsh", ewaste: "5 Kgs", points: 50 },
];

const NGreenArmy = () => {
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const maxPoints = Math.max(...leaderboard.map((leader) => leader.points));

  return (
    <section id="ngreenarmy" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          center
          title="nGreenArmy"
          paragraph="Youth captains, storytellers, and coaches who make climate-positive living a team sport."
          mb="56px"
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.id}
              className="flex h-full flex-col rounded-[32px] border border-primary/15 bg-white/95 p-6 shadow-two transition hover:-translate-y-1 hover:shadow-one"
            >
              <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary/5">
                <div className="relative aspect-[4/3] w-full">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 260px, (min-width: 768px) 45vw, 90vw"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-3xl font-semibold uppercase tracking-[0.25em] text-primary/80">
                      {member.name
                        .split(" ")
                        .map((word) => word[0] ?? "")
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-6 flex flex-1 flex-col gap-3">
                <div>
                  <h4 className="text-lg font-semibold text-dark">{member.name}</h4>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-body-color">
                  {member.grade} • {member.school}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
                  {member.location}
                </p>
                <p className="text-sm leading-relaxed text-body-color min-h-[72px]">
                  {member.summary}
                </p>
                {member.highlight && (
                  <p className="text-sm font-semibold text-dark">{member.highlight}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveMember(member)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Know More
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-primary/15 bg-primary/5 p-6 shadow-btn-light sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/15 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Leaderboard</p>
              <h5 className="mt-2 text-lg font-semibold text-dark">Top Climate Champions</h5>
            </div>
            <span className="rounded-full border border-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
              Updated Weekly
            </span>
          </div>

          <ol className="mt-6 space-y-4">
            {leaderboard.map((leader) => {
              const progress = Math.round((leader.points / maxPoints) * 100);
              const isTopThree = leader.rank <= 3;
              return (
                <li
                  key={leader.id}
                  className={`flex items-center gap-5 rounded-[28px] border px-6 py-5 shadow-two transition ${
                    isTopThree
                      ? "border-primary/25 bg-white"
                      : "border-primary/15 bg-white/95"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${
                      isTopThree ? "bg-primary text-white" : "border border-primary/25 text-primary"
                    }`}
                  >
                    #{leader.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-dark">{leader.name}</p>
                      <span className="text-xs uppercase tracking-[0.25em] text-body-color">{leader.ewaste}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-primary/10">
                      <div
                        className={`h-full rounded-full ${
                          isTopThree ? "bg-primary" : "bg-primary/70"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    {leader.points} pts
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {activeMember && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4 py-8"
            onClick={() => setActiveMember(null)}
          >
            <div
              className="relative max-w-lg rounded-3xl bg-white p-8 shadow-one"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveMember(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 text-base font-semibold text-primary"
                aria-label="Close member details"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative h-[120px] w-[120px] overflow-hidden rounded-3xl border border-primary/15 bg-primary/5">
                  {activeMember.image ? (
                    <Image src={activeMember.image} alt={activeMember.name} fill className="object-cover" />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-4xl font-semibold uppercase tracking-[0.25em] text-primary/70">
                      {activeMember.name
                        .split(" ")
                        .map((word) => word[0] ?? "")
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-dark">{activeMember.name}</h4>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                    {activeMember.role}
                  </p>
                  <p className="mt-2 text-sm font-medium text-body-color">
                    {activeMember.grade} • {activeMember.school}
                  </p>
                  <p className="text-sm text-body-color">{activeMember.location}</p>
                  {activeMember.phone && (
                    <p className="mt-3 text-sm text-body-color">
                      <span className="font-semibold text-dark">Phone:</span>{" "}
                      <a href={`tel:${activeMember.phone}`} className="text-primary hover:underline">
                        {activeMember.phone}
                      </a>
                    </p>
                  )}
                  {activeMember.email && (
                    <p className="text-sm text-body-color">
                      <span className="font-semibold text-dark">Email:</span>{" "}
                      <a href={`mailto:${activeMember.email}`} className="text-primary hover:underline">
                        {activeMember.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-body-color">{activeMember.bio}</p>
              {activeMember.highlight && (
                <p className="mt-3 text-sm font-semibold text-dark">{activeMember.highlight}</p>
              )}
              {activeMember.mediaUrl && (
                <a
                  href={activeMember.mediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-primary/90"
                >
                  View Story
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NGreenArmy;
