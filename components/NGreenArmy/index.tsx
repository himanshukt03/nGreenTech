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
  name: string;
  ewaste: string;
  points: number;
};

const members: Member[] = [
  {
    id: "nayan",
    name: "Nayan Adithya Tangutooru",
    role: "Founder",
    grade: "Grade V",
    school: "Bangalore International Academy",
    location: "Bengaluru, Karnataka",
    phone: "7730041280",
    email: "tnayanadithya@gmail.com",
    summary: "Leads nGreenTech's mission to turn e-waste recovery into a joyful learning experience for kids across India.",
    bio: "Nayan founded nGreenTech to help every child become an eco-warrior. He orchestrates collection drives, speaks on global stages, and builds climate curricula with educators.",
    highlight: "Coordinated 30+ campus cleanups and mentors regional chapter leads.",
    mediaUrl: "https://www.youtube.com/watch?v=ApniMHLPgLo",
    image: getImagePath("/images/about/nayan_adithya.jpg"),
  },
  {
    id: "utkarsh",
    name: "Utkarsh",
    role: "Core Member",
    grade: "Grade VI",
    school: "Chrysalis High",
    location: "Bengaluru, Karnataka",
    summary: "Champions device auditing drives and keeps campus teams focused on safe recycling standards.",
    bio: "Utkarsh leads weekly peer briefings at Chrysalis High to catalogue gadgets for drop-off and ensure safety-first handling.",
    highlight: "Designed the labelling workflow used by three partner schools.",
  },
  {
    id: "kartikeya",
    name: "Kartikeya",
    role: "Core Member",
    grade: "Grade IV",
    school: "National Public School",
    location: "Bengaluru, Karnataka",
    summary: "Runs storytelling corners that help juniors understand circular economy basics.",
    bio: "Kartikeya creates comic-style explainers and activity sheets that simplify recycling habits for primary learners.",
    highlight: "Led classroom pledge sessions reaching 220 students.",
  },
  {
    id: "praneesh",
    name: "Praneesh",
    role: "Core Member",
    grade: "Grade VII",
    school: "Whitefield Global School",
    location: "Bengaluru, Karnataka",
    summary: "Coordinates logistics for weekend e-waste camps and volunteer assignments.",
    bio: "Praneesh manages the sign-up and routing system that keeps Whitefield Global School's drives smooth and transparent.",
    highlight: "Introduced barcode tracking for collected devices.",
  },
  {
    id: "vivaan",
    name: "Vivaan",
    role: "Core Member",
    grade: "Grade III",
    school: "Vagdevi Vilas School",
    location: "Bengaluru, Karnataka",
    summary: "Hosts eco-club games that motivate younger peers to recycle household electronics.",
    bio: "Vivaan's gamified scoreboard keeps his neighbourhood engaged in weekly segregation challenges.",
    highlight: "Raised 40+ pledges from families in his housing community.",
  },
  {
    id: "aaradhya",
    name: "Aaradhya Chappali",
    role: "Core Member",
    grade: "Grade V",
    school: "AHPS",
    location: "Bengaluru, Karnataka",
    summary: "Collects impact stories from volunteers and shares them at assemblies.",
    bio: "Aaradhya documents every drive's highlights and encourages peers to champion sustainability beyond campus.",
    highlight: "Produced three short films celebrating student-led repair efforts.",
  },
  {
    id: "joshith",
    name: "Joshith Eswar",
    role: "Core Member",
    grade: "Grade V",
    school: "Maria Public School",
    location: "Guwahati, Assam",
    summary: "Launches regional awareness rallies and partners with ward teams for safe collection.",
    bio: "Joshith builds collaborations with local civic groups in Guwahati to create accessible drop-off stations.",
    highlight: "Scaled the city's first children's climate pledge wall.",
  },
  {
    id: "aadya",
    name: "Aadya",
    role: "Member",
    grade: "Grade VII",
    school: "National Public School",
    location: "Bengaluru, Karnataka",
    summary: "Designs posters and social media snippets that rally classmates for every drive.",
    bio: "Aadya curates digital toolkits and friendly reminders to keep her school community informed.",
    highlight: "Built a template library now used across two chapters.",
  },
  {
    id: "prakriti",
    name: "Prakriti",
    role: "Member",
    grade: "Grade VI",
    school: "National Public School",
    location: "Bengaluru, Karnataka",
    summary: "Supports data logging and impact summaries after each recycling sprint.",
    bio: "Prakriti analyses collection numbers and prepares concise reports for parents and partners.",
    highlight: "Introduced simple dashboards that track category-wise e-waste.",
  },
  {
    id: "manas",
    name: "Manas",
    role: "Member",
    grade: "Grade V",
    school: "Maria Public School",
    location: "Guwahati, Assam",
    summary: "Keeps the collection bay organised and ensures everything is safely packed for transport.",
    bio: "Manas leads on-ground operations in Guwahati, double-checking device categories and safety tags.",
    highlight: "Helped streamline logistics for the North East pilot chapter.",
  },
  {
    id: "akansha",
    name: "Akansha",
    role: "Member",
    grade: "Grade VI",
    school: "Vagdevi Vilas School",
    location: "Bengaluru, Karnataka",
    summary: "Works with Vivaan to mentor eco-club newcomers and keep recycling streaks going.",
    bio: "Akansha pairs students for weekly buddy tasks so sustainability becomes a shared routine.",
    highlight: "Co-created the buddy checklist now adopted by junior clubs.",
  },
];

const leaderboard: Leader[] = [
  { id: "1", name: "Samaira Rao", ewaste: "61 kg", points: 980 },
  { id: "2", name: "Arjun Mehta", ewaste: "48 kg", points: 905 },
  { id: "3", name: "Mehak Sood", ewaste: "44 kg", points: 860 },
  { id: "4", name: "Vedant Pillai", ewaste: "39 kg", points: 790 },
  { id: "5", name: "Isha Fernandes", ewaste: "32 kg", points: 725 },
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
            {leaderboard.map((leader, index) => {
              const progress = Math.round((leader.points / maxPoints) * 100);
              const isTopThree = index < 3;
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
                    #{index + 1}
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
