import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { experienceTimeline, technologyEvidence } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-shell experience-section bg-surface/25">
      <div aria-hidden="true" className="experience-grid absolute inset-0 opacity-35" />
      <div aria-hidden="true" className="experience-glow experience-glow-left" />
      <div aria-hidden="true" className="experience-glow experience-glow-right" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Experience & Development Journey"
          title="From foundations to practical full-stack development."
          description="A concise, truthful progression through training, project development, and the technologies I have applied in real applications."
        />

        <div className="mx-auto max-w-5xl">
          <ol className="relative space-y-6 sm:space-y-8">
            <span
              aria-hidden="true"
              className="absolute bottom-6 left-[1.18rem] top-6 w-px bg-gradient-to-b from-accent-cyan/70 via-accent-blue/45 to-accent-violet/20 sm:left-[1.43rem]"
            />

            {experienceTimeline.map((item, index) => (
              <li
                key={`${item.marker}-${item.title}`}
                className={`experience-reveal experience-reveal-${Math.min(index + 1, 4)} relative grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6`}
              >
                <div className="relative z-10 flex justify-center pt-6">
                  <span className="experience-node grid h-9 w-9 place-items-center rounded-full border border-accent-cyan/40 bg-canvas text-[0.68rem] font-bold tracking-[0.12em] text-accent-cyan shadow-glow sm:h-11 sm:w-11">
                    {item.marker}
                  </span>
                </div>

                <Card as="article" className="group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/30 sm:p-7 lg:p-8">
                  <div aria-hidden="true" className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent-blue/10 blur-3xl" />

                  <div className="relative">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                          {item.category}
                        </p>
                        <h3 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                          {item.title}
                        </h3>
                        {item.organization ? (
                          <p className="mt-1 text-sm font-semibold text-slate-300">{item.organization}</p>
                        ) : null}
                      </div>

                      <span className="w-fit shrink-0 rounded-full border border-line/80 bg-canvas/55 px-3 py-1.5 text-xs font-semibold text-muted">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`${item.title} technologies`}>
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-line/80 bg-surface-soft/70 px-3 py-1.5 text-xs font-semibold text-slate-300 transition duration-200 group-hover:border-accent-blue/25"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 sm:mt-14">
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">Technology In Practice</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Learning translated into working applications.</h3>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              These examples connect core technologies with the real project functionality where they were applied, without repeating the full Projects section.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {technologyEvidence.map((item) => (
              <Card key={item.title} className="group p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-blue/30 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-accent-blue/25 bg-accent-blue/10 text-accent-cyan">
                    <i className="fa-solid fa-code-branch" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-ink">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.detail}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-line/80 bg-canvas/45 px-3 py-1 text-xs font-medium text-slate-300">
                      {technology}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
