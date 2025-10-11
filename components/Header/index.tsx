"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const [activeHash, setActiveHash] = useState("#home");
  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== "undefined") {
        setActiveHash(window.location.hash || "#home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sectionIds = menuData
      .map((item) => {
        const hashIndex = item.path.indexOf("#");
        if (hashIndex === -1) {
          return null;
        }
        return item.path.substring(hashIndex + 1);
      })
      .filter((id): id is string => Boolean(id));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHash(`#${visibleEntry.target.id}`);
        }
      },
      { threshold: 0.4 },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header fixed left-0 top-0 z-[9999] flex w-full items-center border-b border-primary/10 bg-white py-3 transition ${
          sticky ? "shadow-sticky" : "shadow-sm"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className="header-logo block w-full py-2 lg:py-1">
                <div className="relative h-12 w-40">
                  <Image
                    src="/images/logo/Ngreen-logo.png"
                    alt="nGreenTech logo"
                    fill
                    sizes="160px"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border border-body-color/20 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => {
                      const hashIndex = menuItem.path.indexOf("#");
                      const targetHash =
                        hashIndex !== -1
                          ? menuItem.path.substring(hashIndex)
                          : menuItem.path;
                      const isActive =
                        (hashIndex !== -1 && targetHash === activeHash) ||
                        (targetHash === "#home" && usePathName === "/");

                      return (
                        <li key={index} className="group relative">
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 ${
                              isActive
                                ? "text-primary"
                                : "text-dark hover:text-primary"
                            }`}
                            onClick={() => {
                              setNavbarOpen(false);
                              if (hashIndex !== -1) {
                                setActiveHash(targetHash);
                              }
                            }}
                          >
                            {menuItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 lg:flex lg:pr-0">
                <Link
                  href="/#join-us"
                  className="rounded-full border border-primary px-6 py-2 text-sm font-semibold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-white"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
