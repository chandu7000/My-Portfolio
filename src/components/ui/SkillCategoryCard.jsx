import Card from "./Card";

export default function SkillCategoryCard({ group, index }) {
  return (
    <Card
      as="article"
      className={`skill-card skill-reveal skill-reveal-${Math.min(index + 1, 6)} group relative overflow-hidden p-5 sm:p-6 lg:p-7`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-accent-blue/10 blur-3xl transition duration-500 group-hover:bg-accent-violet/15"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start gap-4">
          <span className="skill-category-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10 text-lg text-accent-cyan">
            <i className={group.icon} aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {group.category}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={`${group.category} skills`}>
          {group.skills.map((skill) => (
            <li key={skill.name}>
              <span className="skill-chip inline-flex min-h-10 items-center gap-2.5 rounded-xl border border-line/80 bg-canvas/45 px-3.5 py-2 text-sm font-medium text-slate-200">
                <i
                  className={`${skill.icon} w-4 text-center text-accent-cyan/90`}
                  aria-hidden="true"
                />
                <span>{skill.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
