import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import {
  aboutHighlights,
  developerSnapshot,
  developmentJourney,
  educationItems,
  trainingItems,
} from "../data/about";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.292a1 1 0 0 1 .004 1.414l-7.25 7.292a1 1 0 0 1-1.42.003L3.29 9.292a1 1 0 1 1 1.408-1.42l4.04 4.006 6.542-6.582a1 1 0 0 1 1.424-.004Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V16c2.7 2.1 7.3 2.1 10 0v-4.5M21 9v6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13 5l-2 14" />
    </svg>
  );
}

function SectionLabel({ icon, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
        {icon}
      </span>
      <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">{children}</h3>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-shell about-section bg-surface/30">
      <div aria-hidden="true" className="about-grid absolute inset-0 opacity-40" />
      <div aria-hidden="true" className="about-glow about-glow-left" />
      <div aria-hidden="true" className="about-glow about-glow-right" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="About"
          title="Developer mindset. Practical full-stack focus."
          description="A concise look at my development background, technical direction, and the way I approach building modern web applications."
        />

        <div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr] xl:gap-8">
          <Card className="about-reveal about-reveal-1 relative overflow-hidden p-6 sm:p-8 lg:p-9">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent-blue/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
                Professional Introduction
              </p>
              <h3 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Building responsive interfaces and full-stack experiences with a focus on clean implementation.
              </h3>

              <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                <p>
                  I&apos;m <strong className="font-semibold text-ink">Chandra Sekhar</strong>, a full-stack developer working with React and JavaScript on the frontend and Node.js, Express.js, and databases on the backend. I focus on turning application requirements into responsive, usable, and maintainable web experiences.
                </p>
                <p>
                  My development approach emphasizes reusable components, clear structure, practical API integration, responsive design, and code that can be understood and extended without unnecessary complexity.
                </p>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2" aria-label="Development strengths">
                {aboutHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-line/70 bg-canvas/35 px-4 py-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-1 text-accent-cyan">
                      <CheckIcon />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="about-reveal about-reveal-2 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {developerSnapshot.map((item) => (
              <Card
                key={item.label}
                className="group p-5 transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/30 hover:bg-surface sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-ink sm:text-xl">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-cyan shadow-[0_0_18px_rgba(34,211,238,0.5)] transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Card className="about-reveal about-reveal-3 p-6 sm:p-8">
            <SectionLabel icon={<EducationIcon />}>Education</SectionLabel>
            <div className="space-y-1">
              {educationItems.map((item, index) => (
                <article
                  key={`${item.title}-${item.institution}`}
                  className="relative grid gap-2 border-l border-line/80 py-4 pl-6 first:pt-1 last:pb-1"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full border-2 border-surface bg-accent-blue first:top-2"
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h4 className="font-semibold leading-6 text-slate-100">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-accent-cyan">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted">{item.location}</p>
                  {index < educationItems.length - 1 ? <span className="sr-only">Next education item</span> : null}
                </article>
              ))}
            </div>
          </Card>

          <Card className="about-reveal about-reveal-4 p-6 sm:p-8">
            <SectionLabel icon={<CodeIcon />}>Training &amp; Development Background</SectionLabel>
            <div className="space-y-5">
              {trainingItems.map((item) => (
                <article key={`${item.title}-${item.institution}`}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-100">{item.title}</h4>
                      <p className="mt-1 text-sm font-medium text-accent-cyan">{item.institution}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-line/80 bg-canvas/40 px-3 py-1 text-xs font-medium text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Card>
        </div>

        <Card className="about-reveal about-reveal-5 mt-8 overflow-hidden p-6 sm:p-8 lg:p-9">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">Development Journey</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">From engineering foundations to practical application development.</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted sm:text-right">
              A compact progression here; the dedicated experience section later in the portfolio can provide deeper detail.
            </p>
          </div>

          <ol className="relative mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {developmentJourney.map((item, index) => (
              <li key={item.marker} className="group relative rounded-2xl border border-line/70 bg-canvas/30 p-5 transition duration-300 hover:border-accent-blue/30 hover:bg-canvas/50">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent-blue/25 bg-accent-blue/10 text-xs font-bold tracking-wider text-accent-cyan">
                    {item.marker}
                  </span>
                  {index < developmentJourney.length - 1 ? (
                    <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-accent-blue/50 to-transparent xl:block" />
                  ) : null}
                </div>
                <h4 className="font-semibold text-slate-100">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </Card>
      </Container>
    </section>
  );
}
