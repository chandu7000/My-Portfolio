export default function ExternalLink({ href, className = "", children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-cyan-200 ${className}`}
    >
      {children}
    </a>
  );
}
