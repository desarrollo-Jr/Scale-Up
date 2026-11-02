export default function Button({
  href = "#registro",
  children = "registro",
  className = "butto",
}) {
  return (
    <a className={`button ${className}`} href={href}>
      {children}
    </a>
  );
}