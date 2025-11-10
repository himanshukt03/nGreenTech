"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-6 inline-block">
                  <span className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary">
                    nGreenTech
                  </span>
                </Link>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  We design regenerative learning experiences, climate leadership journeys, and circular economy pilots with schools, cities, and enterprises.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/919390012345"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ngreen-tech"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/ngreentech_org/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=ZNFDU8b6b0Y"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-semibold text-black">Explore</h2>
                <ul className="space-y-4 text-base text-body-color">
                  <li>
                    <a href="/#about" className="transition hover:text-primary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/#impact" className="transition hover:text-primary">
                      Impact
                    </a>
                  </li>
                  <li>
                    <a href="/join-us" className="transition hover:text-primary">
                      Join Us
                    </a>
                  </li>
                  <li>
                    <a href="/#events" className="transition hover:text-primary">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-semibold text-black">Connect</h2>
                <ul className="space-y-4 text-base text-body-color">
                  <li>ngreentech2025@gmail.com</li>
                  <li>+91 77300 41280</li>
                  <li>Bengaluru, India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#CFE8D6] to-transparent"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color">
              © {new Date().getFullYear()} nGreenTech. All rights reserved.
            </p>
            <p className="mt-2 text-center text-sm text-body-color">
              a company registered under Section 8 of the Companies Act, 2013.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-10 z-[-1] h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-0 z-[-1] h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
      </footer>
    </>
  );
};

export default Footer;
