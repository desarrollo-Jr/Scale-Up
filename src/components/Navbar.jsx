
import { useState } from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../assets/styles/global/navbar.css";

const links = [
  /*
  { label: "Botón de acción 1", href: "#pilares" },
  { label: "Botón de acción 2", href: "#experiencia" },
  { label: "Botón de acción 3", href: "#registro" },
  */
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      {/* LOGOTIPO */}
      <a
        className="brand"
        href="#inicio"
        aria-label="Scale Up inicio"
        onClick={() => setOpen(false)}
      >
        <img
          className="brand-logo"
          src={`${import.meta.env.BASE_URL}images/logo-principal.png`}
          alt="Logo Scale Up"
        />
      </a>

      {/* MENÚ RESPONSIVE */}
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* NAVEGACIÓN */}
      <nav
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label="Navegación principal"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}

        {/* REDES SOCIALES */}
        <div
          className="social-links"
          aria-label="Redes sociales"
        >

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/divisionomega"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram División Omega"
          >
            <FaInstagram />
          </a>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/divisionomega.conscienceprogress"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook División Omega"
          >
            <FaFacebookF />
          </a>

          {/* WHATSAPP DESTACADO */}
          <a
            href="https://wa.me/527712021391"
            className="navbar-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Scale Up por WhatsApp"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

        </div>
      </nav>

    </header>
  );
}
