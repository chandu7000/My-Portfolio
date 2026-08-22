import Container from "../components/ui/Container";
import FeaturedProjectCard from "../components/ui/FeaturedProjectCard";
import OtherProjectCard from "../components/ui/OtherProjectCard";
import SectionHeading from "../components/ui/SectionHeading";
import { featuredProjects, otherProjects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell relative overflow-hidden bg-surface/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_68%)]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Selected Work"
          title="Flagship Projects"
          description="A focused selection of my strongest full-stack work, followed by additional projects that show broader frontend and API experience."
        />

        <div className="mt-10 space-y-8 sm:mt-12 lg:space-y-10">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-16 border-t border-line pt-12 sm:mt-20 sm:pt-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">More Work</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Other Projects</h3>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                Additional applications that demonstrate practical use of React, JavaScript, external APIs, and core frontend technologies.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {otherProjects.map((project) => (
                <OtherProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
