
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../assets/styles/accion.css"

// Imágenes de la galería
// Coloca tus fotografías dentro de src/assets/galeria/
const galeria = [
  {
    src: "/images/Bosque.jpg",
    alt: "Experiencia Scale Up",
    caption: "Descubre una nueva posibilidad de acción",
  },
  {
    src: "/images/Bosque.jpg",
    alt: "Innovación y desarrollo",
    caption: "Explora nuevas posibilidades",
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

  const actual = galeria[index];

  return (
    <section className="accion section-anchor" id="accion">
      <div className="accion-copy">
        <p>RECONOCE UNA</p>
        <h2>NUEVA</h2>
        <p className="accion-subtitle">POSIBILIDAD DE</p>
        <strong>ACCIÓN</strong>
      </div>

      <div className="gallery">
        <img src={actual.src} alt={actual.alt} />

        <button
          type="button"
          className="gallery-arrow left"
          onClick={anterior}
          aria-label="Fotografía anterior"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className="gallery-arrow right"
          onClick={siguiente}
          aria-label="Fotografía siguiente"
        >
          <FaChevronRight />
        </button>

        <p className="gallery-caption">{actual.caption}</p>

        <div className="gallery-dots">
          {galeria.map((item, i) => (
            <button
              type="button"
              key={item.src}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
              aria-label={`Ver fotografía ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
