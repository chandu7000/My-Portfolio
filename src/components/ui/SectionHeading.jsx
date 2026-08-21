export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <header className={`mb-10 flex flex-col ${alignment} sm:mb-12`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      ) : null}
    </header>
  );
}
