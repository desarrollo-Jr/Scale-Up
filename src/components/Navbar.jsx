
import { useState } from "react";
import {FaInstagram, FaFacebookF, FaWhatsapp, FaBars, FaTimes,
} from "react-icons/fa";
import "../assets/styles/global/navbar.css";
const links = [
  /*
  { label: "Boton de acciòn 1", href: " " },
  { label: "Boton de acciòn 2", href: " " },
  { label: "Boton de acciòn 3", href: " " },
   */
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
        aria-label={open ? "Cerrar menu" : "Abrir menu"}
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
          <a href="https://www.instagram.com/divisionomega" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/divisionomega.conscienceprogress"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook División Omega"
          >
            <FaFacebookF />
          </a>
          <a href="https://wa.me/+527712021391" 
          aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </nav>
    </header>
  );
}


