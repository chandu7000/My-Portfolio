import { useEffect, useMemo, useState } from "react";
import resumeUrl from "../../assets/Resume.pdf";
import { navItems } from "../../data/navigation";
import { socialLinks } from "../../data/socialLinks";
import Container from "../ui/Container";

const NAVBAR_OFFSET = 88;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const professionalLinks = useMemo(
    () =>
      socialLinks.filter(({ name }) =>
        ["GitHub", "LinkedIn"].includes(name),
      ),
    [],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -56% 0px",
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const navigateToSection = (event, sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    event.preventDefault();

    const top = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const navLinkClass = (sectionId, mobile = false) => {
    const isActive = activeSection === sectionId;

    if (mobile) {
      return `group flex min-h-12 items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition duration-200 ${
        isActive
          ? "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan"
          : "border-transparent text-slate-200 hover:border-line hover:bg-surface-soft hover:text-ink"
      }`;
    }

    return `group relative rounded-lg px-2.5 py-2 text-sm font-semibold tracking-wide transition duration-200 ${
      isActive ? "text-ink" : "text-slate-300 hover:text-ink"
    }`;
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-2 sm:pt-3" : "pt-0"
      }`}
      aria-label="Primary navigation"
    >
      <Container>
        <div
          className={`relative transition-all duration-300 ${
            isScrolled
              ? "rounded-2xl border border-line/80 bg-canvas/80 shadow-soft backdrop-blur-xl"
              : "border-b border-line/55 bg-canvas/72 backdrop-blur-md"
          }`}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/45 to-transparent" aria-hidden="true" />

          <div className="flex h-16 items-center gap-4 px-3 sm:h-[4.5rem] sm:px-4 lg:px-5">
            <a
              href="#home"
              className="group flex shrink-0 items-center gap-2.5 rounded-lg"
              onClick={(event) => navigateToSection(event, "home")}
              aria-label="Chandra Sekhar portfolio home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent-cyan/25 bg-gradient-to-br from-accent-cyan/15 via-accent-blue/10 to-accent-violet/15 text-sm font-black tracking-tight text-accent-cyan shadow-glow sm:h-10 sm:w-10">
                CS
              </span>
              <span className="hidden leading-none sm:block">
                <span className="block text-[0.95rem] font-bold tracking-tight text-ink lg:text-base">
                  Chandra Sekhar
                </span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-accent-cyan">
                  Developer Portfolio
                </span>
              </span>
            </a>

            <div className="hidden min-w-0 flex-1 justify-center md:flex">
              <ul className="flex items-center gap-0.5 lg:gap-1.5">
                {navItems.map((item) => {
                  const sectionId = item.toLowerCase();
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={item}>
                      <a
                        href={`#${sectionId}`}
                        className={navLinkClass(sectionId)}
                        onClick={(event) => navigateToSection(event, sectionId)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item}
                        <span
                          className={`absolute inset-x-2.5 -bottom-0.5 h-px origin-center bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet transition-transform duration-200 ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
              {professionalLinks.map(({ name, icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/90 bg-surface-soft/70 text-slate-300 hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-accent-cyan"
                  aria-label={`Open ${name}`}
                  title={name}
                >
                  <i className={`${icon} text-[1.05rem]`} aria-hidden="true" />
                </a>
              ))}

              <a
                href={resumeUrl}
                download
                className="inline-flex min-h-10 items-center justify-center rounded-xl border border-accent-cyan/30 bg-gradient-to-r from-accent-cyan/15 via-accent-blue/10 to-accent-violet/15 px-4 text-sm font-bold text-ink shadow-glow hover:-translate-y-0.5 hover:border-accent-cyan/55 hover:bg-accent-cyan/15"
              >
                Resume
              </a>
            </div>

            <button
              type="button"
              className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line bg-surface-soft/85 text-ink shadow-soft hover:border-accent-cyan/45 hover:text-accent-cyan md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div
            id="mobile-navigation"
            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="border-t border-line/70 px-3 pb-4 pt-3 sm:px-4">
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const sectionId = item.toLowerCase();
                    const isActive = activeSection === sectionId;

                    return (
                      <a
                        key={item}
                        href={`#${sectionId}`}
                        className={navLinkClass(sectionId, true)}
                        onClick={(event) => navigateToSection(event, sectionId)}
                        aria-current={isActive ? "page" : undefined}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        <span>{item}</span>
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-accent-cyan shadow-glow" : "bg-line"
                          }`}
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-3 grid grid-cols-[1fr_auto_auto] gap-2 border-t border-line/70 pt-3">
                  <a
                    href={resumeUrl}
                    download
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-accent-cyan/30 bg-gradient-to-r from-accent-cyan/15 via-accent-blue/10 to-accent-violet/15 px-4 text-sm font-bold text-ink"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    Resume
                  </a>

                  {professionalLinks.map(({ name, icon, url }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line bg-surface-soft text-slate-300 hover:border-accent-cyan/40 hover:text-accent-cyan"
                      aria-label={`Open ${name}`}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      <i className={`${icon} text-lg`} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
