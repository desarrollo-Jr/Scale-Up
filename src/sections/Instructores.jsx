
import {
  PersonSimpleHike,
  Brain,
  FlowerLotus,
} from "@phosphor-icons/react";

import "../assets/styles/instructores.css";

const instructores = [
  {
    nombre: "Ricardo García",
    especialidad:
      "Coach ejecutivo • Firewalker • Empresario",
    imagen: `${import.meta.env.BASE_URL}images/instructores/ricardo-garcia.jpeg`,
    color: "verde",
    Icono: PersonSimpleHike,
  },
  {
    nombre: "Daniel Sánchez",
    especialidad:
      "Maestro en Geomancia Tabular",
    imagen: `${import.meta.env.BASE_URL}images/instructores/daniel-sanchez.jpeg`,
    color: "azul",
    Icono: Brain,
  },
  {
    nombre: "Daniel García",
    especialidad:
      "Life Coach • Facilitador de consciencia",
    imagen: `${import.meta.env.BASE_URL}images/instructores/daniel-garcia.jpeg`,
    color: "naranja",
    Icono: FlowerLotus,
  },
];

export default function Instructores() {
  return (
    <section
      className="instructores"
      id="instructores"
      aria-labelledby="instructores-titulo"
    >
      <header className="instructores-header">
        <span className="instructores-subtitulo">
          NUESTROS
        </span>

        <h2 id="instructores-titulo">
          INSTRUCTORES
        </h2>

        <div
          className="titulo-linea"
          aria-hidden="true"
        />
      </header>

      <div className="instructores-grid">
        {instructores.map((instructor) => {
          const Icono = instructor.Icono;

          return (
            <article
              key={instructor.nombre}
              className={`instructor-card ${instructor.color}`}
            >
              {/* Fotografía */}
              <div className="instructor-foto">
                <div className="foto-marco">
                  <img
                    src={instructor.imagen}
                    alt={`Fotografía de ${instructor.nombre}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Información */}
              <div className="instructor-info">
                <div
                  className="instructor-icono"
                  aria-hidden="true"
                >
                  <Icono
                    size={26}
                    weight="bold"
                  />
                </div>

                <h3>{instructor.nombre}</h3>

                <div
                  className="nombre-linea"
                  aria-hidden="true"
                />

                <p>{instructor.especialidad}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
