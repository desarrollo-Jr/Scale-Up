
import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../assets/styles/navbar.css";

const links = [
  { label: "Boton de acciòn 1", href: "#pilares" },
  { label: "Boton de acciòn 2", href: "#instructores" },
  { label: "Boton de acciòn 3", href: "#registro" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a
        className="brand"
        href="#inicio"
        aria-label="Scale Up inicio"
      >
        <img
          className="brand-logo"
          src={`${import.meta.env.BASE_URL}images/logo-principal.png`}
          alt="Logo Scale Up"
        />
        
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menÃº" : "Abrir menÃº"}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={open ? "nav-links is-open" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <div className="social-links" aria-label="Redes sociales">
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="https://wa.me/" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </nav>
    </header>
  );
}


