import Button from "./Button";

export default function OtherProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/75 transition duration-300 ease-premium hover:-translate-y-1 hover:border-accent-violet/35 hover:shadow-card">
      <div className="relative h-44 overflow-hidden border-b border-line bg-canvas/70">
        <img
          src={project.img}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 ease-premium group-hover:scale-[1.03]"
        />

        <div className="absolute left-4 top-4 rounded-full border border-line bg-canvas/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted backdrop-blur">
          {project.type}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-ink">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-muted">
          {project.purpose}
        </p>

        <div
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.title} technology stack`}
        >
          {project.stack.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line bg-canvas/55 px-2.5 py-1 text-[11px] font-medium text-subtle"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-4">
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

          {project.liveUrl ? (
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
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-2.5 text-sm font-semibold text-white opacity-50">
              <span>Live Demo</span>
              <i
                className="fa-solid fa-arrow-up-right-from-square text-xs"
                aria-hidden="true"
              />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}