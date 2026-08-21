const variants = {
  primary:
    "border-transparent bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-glow hover:-translate-y-0.5 hover:shadow-xl",
  secondary:
    "border-line bg-surface-soft/80 text-ink hover:-translate-y-0.5 hover:border-accent-cyan/50 hover:text-accent-cyan",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition duration-200 ease-premium focus-visible:outline-none ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
