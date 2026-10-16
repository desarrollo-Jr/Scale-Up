
export default function Button({
  href = "#registro",
  children = "Agenda tu llamada",
  className = "",
}) {
  return (
    <a className={`button ${className}`} href={href}>
      {children}
    </a>
  );
}
