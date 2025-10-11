const Contact = () => {
  const socialLinks = [
    {
      id: "youtube-main",
      label: "YouTube Channel",
      href: "https://www.youtube.com/watch?v=ZNFDU8b6b0Y",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21.6 7.2a2.4 2.4 0 0 0-1.69-1.7C18.06 5 12 5 12 5s-6.06 0-7.91.5a2.4 2.4 0 0 0-1.69 1.7A25.1 25.1 0 0 0 2.9 12a25.1 25.1 0 0 0 .3 4.8 2.4 2.4 0 0 0 1.69 1.7C5.94 19 12 19 12 19s6.06 0 7.91-.5a2.4 2.4 0 0 0 1.69-1.7c.2-1.6.3-3.2.3-4.8a25.1 25.1 0 0 0-.3-4.8ZM9.96 15.46V8.54L15.64 12Z"
          />
        </svg>
      ),
    },
    {
      id: "youtube-founder",
      label: "Founder Talk",
      href: "https://www.youtube.com/watch?v=ApniMHLPgLo",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21.6 7.2a2.4 2.4 0 0 0-1.69-1.7C18.06 5 12 5 12 5s-6.06 0-7.91.5a2.4 2.4 0 0 0-1.69 1.7A25.1 25.1 0 0 0 2.9 12a25.1 25.1 0 0 0 .3 4.8 2.4 2.4 0 0 0 1.69 1.7C5.94 19 12 19 12 19s6.06 0 7.91-.5a2.4 2.4 0 0 0 1.69-1.7c.2-1.6.3-3.2.3-4.8a25.1 25.1 0 0 0-.3-4.8ZM9.96 15.46V8.54L15.64 12Z"
          />
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/ngreentech_org/",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM17.82 5.21a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM19.36 2H4.64A2.64 2.64 0 0 0 2 4.64v14.72A2.64 2.64 0 0 0 4.64 22h14.72A2.64 2.64 0 0 0 22 19.36V4.64A2.64 2.64 0 0 0 19.36 2Zm.84 17.36c0 .46-.38.84-.84.84H4.64a.84.84 0 0 1-.84-.84V4.64c0-.46.38-.84.84-.84h14.72c.46 0 .84.38.84.84Z"
          />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/ngreen-tech",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 17.4H6.16V9.63h2.18v7.77ZM7.25 8.61a1.27 1.27 0 1 1 0-2.54 1.27 1.27 0 0 1 0 2.54Zm10.15 8.79h-2.18v-3.96c0-.94-.34-1.57-1.17-1.57-.64 0-1.03.43-1.2.85-.06.15-.08.36-.08.57v4.12h-2.18s.03-6.68 0-7.77h2.18v1.1c.29-.45.82-1.1 2-1.1 1.46 0 2.63.95 2.63 3Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-primary/15 bg-white p-10 shadow-two">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-dark">Nayan Adithya Tangutooru</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-body-color">
              <p>
                <span className="font-semibold text-dark">Founder &amp; CEO:</span> nGreenTech, empowering children to recycle e-waste responsibly.
              </p>
              <p>
                <span className="font-semibold text-dark">Address:</span> B19-02, Birla Alokya, Soukya Road, Koraluru, Whitefield, Bengaluru.
              </p>
              <p>
                <span className="font-semibold text-dark">Email:</span> hello@ngreentech.org
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-10 shadow-btn-light">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Stay Connected
            </p>
            <p className="mt-4 text-base leading-relaxed text-body-color">
              Follow our journeys, volunteer call-outs, and live event highlights across platforms.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary shadow-two transition hover:bg-primary hover:text-white"
                  aria-label={social.label}
                >
                  <span className="text-primary transition group-hover:text-white">
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/watch?v=ApniMHLPgLo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white"
              >
                Watch Founder Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
