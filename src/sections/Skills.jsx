import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-canvas">
      <Container>
        <SectionHeading eyebrow="Toolkit" title="Skills & Tools" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {skills.map((group) => (
            <Card key={group.category} className="transition duration-200 ease-premium hover:-translate-y-1 hover:border-accent-cyan/30">
              <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
              <ul className="mt-5 grid gap-3 text-sm text-slate-300 sm:text-base">
                {group.list.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
