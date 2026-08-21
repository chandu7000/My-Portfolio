export default function Card({
  as = "div",
  className = "",
  children,
  ...props
}) {
  const Tag = as;

  return (
    <Tag
      className={`surface-panel p-5 sm:p-6 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}