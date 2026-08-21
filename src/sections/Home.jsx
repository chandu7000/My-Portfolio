import { useEffect, useState } from "react";
import resumeUrl from "../assets/Resume.pdf";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import ExternalLink from "../components/ui/ExternalLink";
import { heroRoles } from "../data/hero";
import { socialLinks } from "../data/socialLinks";

const ROLE_INTERVAL = 2600;

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || heroRoles.length < 2) return undefined;

    let transitionTimeout;
    const interval = window.setInterval(() => {
      setRoleVisible(false);

      transitionTimeout = window.setTimeout(() => {
        setRoleIndex((current) => (current + 1) % heroRoles.length);
        setRoleVisible(true);
      }, 220);
    }, ROLE_INTERVAL);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(transitionTimeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-canvas pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-premium opacity-70"
        aria-hidden="true"
      />
      <div
        className="hero-orb hero-orb-left pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent-blue/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="hero-orb hero-orb-right pointer-events-none absolute right-[-9rem] top-6 h-96 w-96 rounded-full bg-accent-violet/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-9rem] left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-accent-cyan/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:gap-14 xl:gap-20">
          <div className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="hero-reveal hero-reveal-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-glow" aria-hidden="true" />
                MERN Full Stack Developer
              </p>
            </div>

            <div className="hero-reveal hero-reveal-2 mt-5">
              <p className="text-base font-semibold text-slate-300 sm:text-lg">
                Hi, I&apos;m <span className="text-ink">Chandra Sekhar.</span>
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.04] xl:text-7xl">
                I build <span className="text-gradient">responsive web applications</span> from interface to API.
              </h1>
            </div>

            <div className="hero-reveal hero-reveal-3 mt-5 flex min-h-[2.75rem] items-center justify-center lg:justify-start">
              <span className="mr-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted sm:text-base">
                Focus
              </span>
              <span
                className={`inline-flex min-w-0 items-center rounded-xl border border-line/80 bg-surface-soft/75 px-3 py-2 text-sm font-bold text-accent-cyan transition-all duration-200 sm:min-w-[13.5rem] sm:text-base ${
                  roleVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1.5 opacity-0"
                }`}
                aria-live="polite"
              >
                {heroRoles[roleIndex]}
              </span>
            </div>

            <p className="hero-reveal hero-reveal-4 mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:mx-0">
              I develop modern full-stack applications with React.js, Node.js,
              Express.js, MongoDB, and MySQL, with a focus on clean responsive
              interfaces, practical APIs, and maintainable implementation.
            </p>

            <div className="hero-reveal hero-reveal-5 mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href="#projects" className="px-6">
                View Projects
                <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </Button>
              <Button href="#contact" variant="secondary" className="px-6">
                Contact Me
              </Button>
              <Button
                href={resumeUrl}
                download
                variant="secondary"
                className="px-6"
              >
                <i className="fas fa-download text-xs" aria-hidden="true" />
                Resume
              </Button>
            </div>

            <div
              className="hero-reveal hero-reveal-6 mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
              aria-label="Social links"
            >
              {socialLinks.map(({ name, icon, url }) => (
                <ExternalLink
                  key={name}
                  href={url}
                  label={`Visit ${name}`}
                  className="min-h-11 min-w-11 justify-center rounded-xl border border-line bg-surface-soft/80 px-3 text-slate-300 hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-accent-cyan"
                >
                  <i className={`${icon} text-xl`} aria-hidden="true" />
                </ExternalLink>
              ))}
            </div>
          </div>

          <div className="hero-reveal hero-reveal-visual mx-auto flex w-full max-w-md justify-center lg:mx-0 lg:max-w-none lg:justify-end">
            <div className="hero-visual-float relative w-full max-w-[21rem] sm:max-w-[24rem] lg:max-w-[25rem] xl:max-w-[27rem]">
              <div
                className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-accent-cyan/20 via-accent-blue/10 to-accent-violet/20 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-surface/75 p-2.5 shadow-soft backdrop-blur-xl sm:p-3">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent" aria-hidden="true" />

                <div className="relative overflow-hidden rounded-[1.55rem]">
                  <img
                    src="https://res.cloudinary.com/dmafwatx5/image/upload/v1727030004/port1_trtqcm.jpg"
                    alt="Chandra Sekhar, full stack developer"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas/85 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative -mt-14 px-3 pb-3 sm:px-4 sm:pb-4">
                  <div className="rounded-2xl border border-line/80 bg-canvas/85 p-4 shadow-soft backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-ink">Chandra Sekhar</p>
                        <p className="mt-1 text-xs font-medium text-muted">Full Stack Developer</p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan">
                        <i className="fas fa-code text-sm" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2" aria-label="Core technologies">
                      {["React", "Node.js", "Express", "MongoDB"].map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-line bg-surface-soft/85 px-2.5 py-1.5 text-xs font-semibold text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -left-4 top-16 hidden rounded-xl border border-line/80 bg-canvas/80 px-3 py-2 text-xs font-bold text-accent-cyan shadow-soft backdrop-blur-xl sm:block lg:-left-8"
                aria-hidden="true"
              >
                Responsive UI
              </div>
              <div
                className="absolute -right-4 bottom-24 hidden rounded-xl border border-line/80 bg-canvas/80 px-3 py-2 text-xs font-bold text-accent-violet shadow-soft backdrop-blur-xl sm:block lg:-right-7"
                aria-hidden="true"
              >
                REST APIs
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
