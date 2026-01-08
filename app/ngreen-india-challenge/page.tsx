import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "nGreen India Challenge | nGreenTech",
  description: "National Inter-School E-Waste Awareness & Action Challenge",
};

const ChallengeCard = ({ title, children, className = "" }) => (
  <div className={`rounded-xl bg-white p-6 shadow-one dark:bg-dark md:p-8 ${className}`}>
    <h3 className="mb-4 text-lg font-bold text-black dark:text-white sm:text-2xl">
      {title}
    </h3>
    <div className="text-base font-medium leading-relaxed text-body-color">
      {children}
    </div>
  </div>
);

const FeatureItem = ({ text }) => (
  <div className="mb-4 flex items-start">
    <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
      ✓
    </span>
    <span className="text-sm font-medium leading-relaxed text-body-color sm:text-base">
      {text}
    </span>
  </div>
);

const StepItem = ({ number, title }) => (
  <div className="mb-8 flex items-center">
    <div className="mr-4 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary md:mr-6 md:h-[60px] md:w-[60px] md:text-2xl">
      {number}
    </div>
    <div className="w-full">
      <h4 className="text-base font-bold text-black dark:text-white sm:text-lg">
        {title}
      </h4>
    </div>
  </div>
);

const NGreenIndiaChallengePage = () => {
  return (
    <>
      <section className="pb-[40px] pt-[40px] md:pb-[120px]">
        <div className="container">
          {/* Banner Image */}
          <div className="mb-8 mt-20 overflow-hidden rounded-xl bg-white shadow-one dark:bg-dark md:mb-16">
            <div className="relative aspect-video w-full md:aspect-[3/1] lg:aspect-[4/1]">
              <Image
                src="/images/logo/Green_India_Challenge.png"
                alt="nGreen India Challenge Banner"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-3xl">
                  nGreen India Challenge
                </h2>
                <h3 className="mb-6 text-sm font-semibold text-gray-600 dark:text-gray-400 sm:text-lg">
                  National Inter-School E-Waste Awareness & Action Challenge
                </h3>
                <p className="mb-6 text-sm font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The nGreen India Challenge is a national-level, student-led
                  initiative that brings schools across India together to create
                  awareness, responsibility, and action around e-waste
                  management.
                </p>
                <p className="text-sm font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  This challenge empowers students to lead real-world
                  environmental change by organizing e-waste awareness and
                  collection drives within their schools and communities,
                  ensuring responsible disposal through formal, certified
                  recyclers recommended by nGreenTech.
                </p>
              </div>

              {/* How it Works & Awards */}
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                <ChallengeCard title="How it Works">
                  <div className="flex flex-col">
                    <StepItem
                      number="1"
                      title="Schools register on the nGreenTech website"
                    />
                    <StepItem
                      number="2"
                      title="Student volunteers lead an E-Waste Awareness & Collection Week"
                    />
                    <StepItem
                      number="3"
                      title="Collected e-waste is handed over to formal recyclers supported by nGreenTech"
                    />
                    <StepItem
                      number="4"
                      title="Awareness campaigns must be completed by June–July 2026"
                    />
                  </div>
                </ChallengeCard>

                <ChallengeCard title="Awards & Recognition">
                  <p className="mb-4 text-sm sm:text-base">The nGreen India Awards will honour:</p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">🏆</span>
                      <span className="text-sm sm:text-base">
                        Top 5 Schools with the highest total e-waste collected
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">🏆</span>
                      <span className="text-sm sm:text-base">
                        Top 5 Schools with the highest per-capita e-waste
                        collection
                      </span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-yellow-50 p-4 dark:bg-white/5">
                    <p className="text-xs font-medium italic text-body-color sm:text-base">
                      Winners will be celebrated at the nGreen India Award
                      Ceremony, to be held in July 2026, Bengaluru, in the
                      presence of national dignitaries.
                    </p>
                  </div>
                </ChallengeCard>
              </div>

              <div className="mt-8 md:mt-12">
                <div className="relative z-10 overflow-hidden rounded-xl bg-primary px-6 py-8 md:p-[70px]">
                  <h3 className="mb-4 text-xl font-bold text-white sm:text-3xl md:mb-6">
                    Beyond Collection: Doubling the Impact
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base md:mb-8 md:text-lg">
                    To amplify environmental impact, nGreenTech will carry out
                    tree plantation in recognized eco-restoration sites,
                    equivalent to the carbon offset achieved through the
                    collected e-waste — celebrating the Challenge by turning
                    responsible action into long-term regeneration.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full px-4 lg:w-4/12">
              <div className="sticky top-[120px] mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <div className="p-6 md:p-8">
                  <h3 className="mb-6 border-b border-body-color border-opacity-10 pb-4 text-xl font-bold text-black dark:text-white">
                    Who Can Participate
                  </h3>
                  <div className="mb-8">
                    <p className="mb-2 font-bold text-primary">
                      Schools across major cities of India
                    </p>
                    <Link
                      href="/ngreen-india-challenge/cities"
                      className="mt-2 inline-flex items-center rounded-sm bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
                    >
                      View Participating Cities
                    </Link>
                  </div>

                  <h3 className="mb-6 border-b border-body-color border-opacity-10 pb-4 text-xl font-bold text-black dark:text-white">
                    Why Join?
                  </h3>
                  <div className="mb-8">
                    <FeatureItem text="Build environmental awareness among students" />
                    <FeatureItem text="Develop leadership & problem-solving skills" />
                    <FeatureItem text="Contribute directly to climate action" />
                    <FeatureItem text="National student-led sustainability movement" />
                  </div>

                  <div className="mt-10 text-center">
                    <Link
                      href="/ngreen-india-challenge/register"
                      className="mb-4 inline-flex w-full items-center justify-center rounded-lg bg-primary py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-primary/90"
                    >
                      Register to Join
                    </Link>
                    <p className="mt-2 text-sm text-body-color">
                      Become part of the movement shaping a cleaner, greener, and
                      more responsible India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NGreenIndiaChallengePage;