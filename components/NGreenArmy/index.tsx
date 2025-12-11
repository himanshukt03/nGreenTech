"use client";

import { getImagePath } from "@/lib/utils";
import { LeaderRow } from "@/lib/googleSheets";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

type Member = {
  id: string;
  name: string;
  role: string;
  grade: string;
  school: string;
  location?: string;
  phone?: string;
  email?: string;
  summary: string;
  image?: string;
};

type NGreenArmyProps = {
  leaderboard?: LeaderRow[];
};

const members: Member[] = [
  {
    id: "nayan-adithya",
    name: "Nayan Adithya Tangutooru",
    role: "Founder",
    grade: "Grade V",
    school: "Bangalore International Academy, Bengaluru",
    phone: "7730041280",
    email: "tnayanadithya@gmail.com",
    summary: "Phone: 7730041280 | Email: tnayanadithya@gmail.com",
    image: getImagePath("/images/about/nayan_adithya.jpg"),
  },
  {
    id: "utkarsh",
    name: "Utkarsh",
    role: "Member",
    grade: "Grade VI",
    school: "Chrysalis High, Bengaluru",
    summary: "Member",
    image: getImagePath("/images/about/utkarsh.webp"),
  },
  {
    id: "praneesh",
    name: "Praneesh",
    role: "Member",
    grade: "Grade VII",
    school: "Whitefield Global School, Bengaluru",
    summary: "Member",
    image: getImagePath("/images/about/pranish.webp"),
  },
  {
    id: "aaradhya",
    name: "Aaradhya Chappali",
    role: "Member",
    grade: "Grade V",
    school: "AHPS, Bengaluru",
    summary: "Member",
    image: getImagePath("/images/about/aaradhya.webp"),
  },
  {
    id: "joshith",
    name: "Joshith Eswar",
    role: "Member",
    grade: "Grade V",
    school: "Maria Public School, Guwahati, Assam",
    summary: "Member",
    image: getImagePath("/images/about/joshith-eswar.webp"),
  },
  {
    id: "aadya",
    name: "Aadya",
    role: "Member",
    grade: "Grade V",
    school: "Maria Public School, Guwahati, Assam",
    summary: "Member",
    image: getImagePath("/images/about/aadya.jpg"),
  },
  {
    id: "suhit",
    name: "Suhit",
    role: "Member",
    grade: "Grade V",
    school: "Gopalan International School, Bengaluru",
    summary: "Member",
    image: getImagePath("/images/about/suhit.jpeg"),
  },
  {
    id: "vynavi",
    name: "Vynavi",
    role: "Member",
    grade: "Grade VI",
    school: "Samashti International School, Hyderabad",
    summary: "Member",
    image: getImagePath("/images/about/Vynavi.jpg"),
  },
  {
    id: "adarsh-rathi",
    name: "Adarsh Rathi",
    role: "Member",
    grade: "Grade V",
    school: "Bangalore International Academy",
    summary: "Member",
  },
  // Nandhan removed as requested
];

// Fallback static leaderboard data
const staticLeaderboard: LeaderRow[] = [
  { position: 1, name: "Suhit", kgs: 16, points: 160 },
  { position: 2, name: "Aaradhya", kgs: 15, points: 150 },
  { position: 3, name: "Praneesh", kgs: 10, points: 100 },
  { position: 4, name: "Utkarsh", kgs: 5, points: 50 },
];

const NGreenArmy = ({ leaderboard: sheetLeaderboard }: NGreenArmyProps) => {
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  
  // Use Google Sheets data if available, otherwise fallback to static
  const leaderboard = sheetLeaderboard && sheetLeaderboard.length > 0 ? sheetLeaderboard : staticLeaderboard;
  const maxPoints = Math.max(...leaderboard.map((leader) => leader.points || 0), 1);
  // const backgroundImage = getImagePath("/images/hero/ngreenarmy.jpeg");

  return (
    // <section id="ngreenarmy" className="relative overflow-hidden py-16 md:py-20 lg:py-28">
    //   <div className="absolute inset-0">
    //     <Image
    //       src={backgroundImage}
    //       alt="nGreenArmy background"
    //       fill
    //       className="object-cover"
    //       priority
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-br from-[#04140b]/92 via-[#071f12]/85 to-[#0a2316]/88" />
    //     <div className="absolute inset-0 bg-white/70 mix-blend-soft-light" />
    //   </div>

      <div className="container relative z-10">
        <br />
        <br />
        <SectionTitle
          center
          title="nGreenArmy"
          paragraph="Youth captains, storytellers, and coaches who make climate-positive living a team sport."
          mb="56px"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white/95 shadow-[0_14px_40px_-18px_rgba(13,99,38,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_-16px_rgba(27,158,63,0.58)]"
            >
              <div className="relative overflow-hidden rounded-b-[36px] rounded-t-3xl border-b border-primary/5 bg-gradient-to-br from-primary/10 via-white to-primary/5">
                <div className="relative aspect-[4/3] w-full">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.05]"
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
              <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-dark transition group-hover:text-primary">{member.name}</h4>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">{member.role}</p>
                </div>
                <div className="rounded-2xl bg-primary/5 px-4 py-3 text-xs font-medium uppercase tracking-[0.28em] text-primary/80">
                  {member.grade} • {member.school}
                </div>
                {member.location && (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">{member.location}</p>
                )}
                <p className="text-sm leading-relaxed text-body-color">{member.summary}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMember(member)}
                className="mx-6 mb-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-primary/90"
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
            {leaderboard.map((leader, idx) => {
              const rank = leader.position || idx + 1;
              const progress = Math.round(((leader.points || 0) / maxPoints) * 100);
              const isTopThree = rank <= 3;
              return (
                <li
                  key={`leader-${leader.name}-${idx}`}
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
                    #{rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-dark">{leader.name}</p>
                      <span className="text-xs uppercase tracking-[0.25em] text-body-color">{leader.kgs} Kgs</span>
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
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative h-[140px] w-[140px] overflow-hidden rounded-3xl border border-primary/15 bg-primary/5 shadow-[0_12px_30px_-18px_rgba(27,158,63,0.6)]">
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
                  <h4 className="text-2xl font-semibold text-dark">{activeMember.name}</h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                    {activeMember.role}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-body-color">
                    {activeMember.grade} • {activeMember.school}
                  </p>
                  {activeMember.location && (
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/60">{activeMember.location}</p>
                  )}
                  {activeMember.phone && (
                    <p className="mt-3 text-sm text-body-color">
                      <span className="font-semibold text-dark">Phone:</span>{" "}
                      <a href={`tel:${activeMember.phone}`} className="text-primary underline-offset-4 hover:underline">
                        {activeMember.phone}
                      </a>
                    </p>
                  )}
                  {activeMember.email && (
                    <p className="text-sm text-body-color">
                      <span className="font-semibold text-dark">Email:</span>{" "}
                      <a href={`mailto:${activeMember.email}`} className="text-primary underline-offset-4 hover:underline">
                        {activeMember.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-6 rounded-2xl bg-primary/5 px-5 py-4 text-sm leading-relaxed text-body-color">{activeMember.summary}</p>
            </div>
          </div>
        )}
      </div>
    // </section>
  );
};

export default NGreenArmy;
