
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../assets/styles/accion.css";

// Fotografías del carrusel
const galeria = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}images/Bosque.jpg`,
    alt: "Naturaleza y experiencia Scale Up",
    caption: "Descubre una nueva posibilidad de acción.",
  },
  {
    id: 2,
    // Sustituye esta ruta cuando agregues otra fotografía
    src: `${import.meta.env.BASE_URL}images/Bosque.jpg`,
    alt: "Inspiración y nuevas posibilidades",
    caption: "Explora nuevas posibilidades.",
  },
];

export default function Accion() {
  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((actual) =>
      (actual - 1 + galeria.length) % galeria.length
    );
  };

  const siguiente = () => {
    setIndex((actual) =>
      (actual + 1) % galeria.length
    );
  };

  return (
    <section
      className="accion section-anchor"
      id="accion"
      aria-labelledby="accion-titulo"
    >
      {/* PANEL IZQUIERDO */}
      <div className="accion-copy">
        <div className="accion-contenido">
          <p className="accion-kicker">
            RECONOCE UNA
          </p>

          <h2 id="accion-titulo">
            NUEVA
          </h2>

          <p className="accion-subtitle">
            POSIBILIDAD DE
          </p>

          <strong className="accion-destacado">
            ACCIÓN
          </strong>

          <span
            className="accion-linea"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* PANEL DERECHO: CARRUSEL */}
      <div
        className="gallery"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Galería de Scale Up"
      >
        {/* Imágenes con transición suave */}
        <div className="gallery-media">
          {galeria.map((item, i) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              className={`gallery-slide ${
                i === index ? "active" : ""
              }`}
              aria-hidden={i !== index}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>

        {/* Flecha anterior */}
        <button
          type="button"
          className="gallery-arrow left"
          onClick={anterior}
          aria-label="Fotografía anterior"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>

        {/* Flecha siguiente */}
        <button
          type="button"
          className="gallery-arrow right"
          onClick={siguiente}
          aria-label="Fotografía siguiente"
        >
          <FaChevronRight aria-hidden="true" />
        </button>

        {/* Descripción e indicadores */}
        <div className="gallery-bottom">
          <p
            key={galeria[index].id}
            className="gallery-caption"
            aria-live="polite"
            aria-atomic="true"
          >
            {galeria[index].caption}
          </p>

          <div
            className="gallery-dots"
            role="group"
            aria-label="Seleccionar fotografía"
          >
            {galeria.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`dot ${
                  i === index ? "active" : ""
                }`}
                onClick={() => setIndex(i)}
                aria-label={`Ver fotografía ${i + 1}`}
                aria-pressed={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
