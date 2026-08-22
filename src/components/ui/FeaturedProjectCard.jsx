import Button from "./Button";

const technologyIcons = {
  "React.js": {
    icon: "fa-brands fa-react",
    color: "text-cyan-400",
  },
  "Node.js": {
    icon: "fa-brands fa-node-js",
    color: "text-green-400",
  },
  "Express.js": {
    icon: "fa-solid fa-code",
    color: "text-zinc-300",
  },
  MongoDB: {
    icon: "fa-solid fa-leaf",
    color: "text-green-500",
  },
  "Socket.IO": {
    icon: "fa-solid fa-bolt",
    color: "text-zinc-200",
  },
  "Tailwind CSS": {
    icon: "fa-solid fa-wind",
    color: "text-cyan-400",
  },
  JavaScript: {
    icon: "fa-brands fa-js",
    color: "text-yellow-400",
  },
  HTML5: {
    icon: "fa-brands fa-html5",
    color: "text-orange-500",
  },
  CSS3: {
    icon: "fa-brands fa-css3-alt",
    color: "text-blue-400",
  },
  MySQL: {
    icon: "fa-solid fa-database",
    color: "text-blue-400",
  },
  Git: {
    icon: "fa-brands fa-git-alt",
    color: "text-orange-500",
  },
  GitHub: {
    icon: "fa-brands fa-github",
    color: "text-zinc-100",
  },
};

function TechnologyBadge({ technology }) {
  const technologyIcon = technologyIcons[technology];

  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas/65 px-3 py-2 text-xs font-semibold text-muted transition duration-200 hover:border-accent-cyan/30 hover:bg-surface-soft hover:text-ink sm:text-sm">
      {technologyIcon ? (
        <i
          className={`${technologyIcon.icon} ${technologyIcon.color} text-base`}
          aria-hidden="true"
        />
      ) : (
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-cyan/10 text-[9px] font-bold text-accent-cyan"
          aria-hidden="true"
        >
          {technology.charAt(0)}
        </span>
      )}

      <span>{technology}</span>
    </span>
  );
}

export default function FeaturedProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-line bg-surface/90 shadow-card transition duration-300 ease-premium hover:-translate-y-1 hover:border-accent-blue/40 hover:shadow-glow">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_42%)] opacity-80" />

      <div className="relative p-5 sm:p-7 lg:p-8">
        {/* Main Featured Project Layout */}
        <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          {/* Project Information */}
          <div className="flex min-w-0 flex-col">
            {/* Labels */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                Featured Project
              </span>

              <span className="rounded-full border border-line bg-surface-soft/80 px-3 py-1 text-xs font-semibold text-muted">
                {project.type}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2rem] lg:leading-tight">
              {project.title}
            </h3>

            {/* Project Purpose */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {project.purpose}
            </p>

            {/* Key Functionality */}
            {project.features?.length > 0 && (
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                  Key Functionality
                </p>

                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-6 text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Large Project Screenshot */}
          <div className="relative min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-canvas/75 shadow-card transition duration-300 group-hover:border-accent-blue/25">
              {/* Browser Header */}
              <div className="flex items-center gap-1.5 border-b border-line bg-surface/95 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>

              {/* Screenshot */}
              <div className="flex min-h-[250px] items-center justify-center overflow-hidden bg-canvas/60 sm:min-h-[300px] lg:min-h-[315px]">
                <img
                  src={project.img}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-auto w-full object-contain object-center transition duration-500 ease-premium group-hover:scale-[1.012]"
                />
              </div>

              {/* Subtle screenshot overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-7 border-t border-line/70" />

        {/* Technologies + Actions */}
        <div className="mt-5 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          {/* Technology Stack */}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
              Technologies Used
            </p>

            <div
              className="mt-3 flex flex-wrap gap-2"
              aria-label={`${project.title} technology stack`}
            >
              {project.stack.map((technology) => (
                <TechnologyBadge
                  key={technology}
                  technology={technology}
                />
              ))}
            </div>
          </div>

          {/* Project Actions */}
          <div className="flex shrink-0 flex-wrap items-center gap-3 xl:justify-end">
            {project.repoUrl && (
              <Button
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <i
                  className="fa-brands fa-github"
                  aria-hidden="true"
                />

                <span>GitHub Repository</span>
              </Button>
            )}

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                <span>Live Demo</span>

                <i
                  className="fa-solid fa-arrow-up-right-from-square text-xs"
                  aria-hidden="true"
                />
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}