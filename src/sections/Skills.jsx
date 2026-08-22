import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import SkillCategoryCard from "../components/ui/SkillCategoryCard";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell skills-section bg-canvas">
      <div aria-hidden="true" className="skills-grid absolute inset-0 opacity-35" />
      <div aria-hidden="true" className="skills-glow skills-glow-left" />
      <div aria-hidden="true" className="skills-glow skills-glow-right" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Technical Toolkit"
          title="Skills built for practical development."
          description="A recruiter-friendly view of the technologies, tools, and development concepts I use across responsive frontend and full-stack application work."
        />

        <div className="mb-7 flex flex-col gap-3 rounded-2xl border border-line/70 bg-surface/45 px-5 py-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm leading-6 text-slate-300">
            Organized by technical area for faster scanning—focused on real tools and technologies, not artificial proficiency scores.
          </p>
          <span className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
            <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_14px_rgba(34,211,238,0.55)]" aria-hidden="true" />
            Core Stack
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {skillGroups.map((group, index) => (
            <SkillCategoryCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
