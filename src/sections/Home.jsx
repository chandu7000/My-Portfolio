import { useEffect, useState } from "react";
import resumeUrl from "../assets/Resume.pdf";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import ExternalLink from "../components/ui/ExternalLink";
import { heroRoles } from "../data/hero";
import { socialLinks } from "../data/socialLinks";

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = heroRoles[index];
      if (!deleting) {
        setText(current.substring(0, char + 1));
        setChar(char + 1);
        if (char === current.length) setDeleting(true);
      } else {
        setText(current.substring(0, char - 1));
        setChar(char - 1);
        if (char === 0) {
          setDeleting(false);
          setIndex((index + 1) % heroRoles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [char, deleting, index]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-canvas pb-20 pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-premium opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 top-28 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-accent-violet/10 blur-3xl" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row lg:gap-16">
          <div className="w-full text-center md:w-2/3 md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent-cyan">Developer Portfolio</p>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m a <span className="text-gradient">{text}</span>
              <span className="ml-1 inline-block h-[0.9em] w-0.5 translate-y-1 bg-accent-cyan" aria-hidden="true" />
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg md:mx-0">
              Building stunning and professional web experiences.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button href="#about">Discover More</Button>
              <Button href={resumeUrl} download variant="secondary">
                Download PDF
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start" aria-label="Social links">
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

          <div className="flex w-full justify-center md:w-1/3 md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-gradient-to-br from-accent-cyan/20 via-accent-blue/10 to-accent-violet/20 blur-2xl" aria-hidden="true" />
              <img
                src="https://res.cloudinary.com/dmafwatx5/image/upload/v1727030004/port1_trtqcm.jpg"
                alt="Chandra Sekhar profile"
                className="relative aspect-[4/5] w-60 rounded-3xl border border-line object-cover shadow-soft sm:w-72 md:w-full md:max-w-xs"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
