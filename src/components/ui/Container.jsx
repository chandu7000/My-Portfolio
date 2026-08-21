export default function Container({
  as = "div",
  className = "",
  children,
  ...props
}) {
  const Tag = as;

  return (
    <Tag
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}