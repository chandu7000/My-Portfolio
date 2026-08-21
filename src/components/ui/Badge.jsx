export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-3 py-1 text-xs font-medium text-slate-200 ${className}`}
    >
      {children}
    </span>
  );
}
