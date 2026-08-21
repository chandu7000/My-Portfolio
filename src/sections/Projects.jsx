import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-surface/30">
      <Container>
        <SectionHeading eyebrow="Work" title="Projects" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col overflow-hidden p-0 transition duration-200 ease-premium hover:-translate-y-1 hover:border-accent-blue/35">
              <img
                src={project.img}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-48 w-full border-b border-line object-cover"
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <p className="my-3 flex-1 text-sm leading-6 text-muted">{project.desc}</p>
                <Button href={project.link} target="_blank" rel="noreferrer" variant="secondary" className="mt-2 self-start">
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
