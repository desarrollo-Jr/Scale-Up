import { PersonSimpleHike, Brain, FlowerLotus } from "@phosphor-icons/react";

import "../assets/styles/instructores.css";

const instructores = [
  {
    nombre: "Ricardo García",
    especialidad: "Coach ejecutivo · Firewalker · Empresario",
    imagen: "/images/instructores/ricardo-garcia.jpeg",
    color: "verde",
    icono: <PersonSimpleHike weight="bold" />,
  },
  {
    nombre: "Daniel Sánchez",
    especialidad: "Maestro en Geomancia Tabular",
    imagen: "/images/instructores/daniel-sanchez.jpeg",
    color: "azul",
    icono: <Brain weight="bold" />,
  },
  {
    nombre: "Daniel García",
    especialidad: "Life Coach · Facilitador de consciencia",
    imagen: "/images/instructores/daniel-garcia.jpeg",
    color: "naranja",
    icono: <FlowerLotus weight="bold" />,
  },
];

export default function Instructores() {
  return (
    <section className="instructores">
      <header className="instructores-header">
        <span>NUESTROS</span>
        <h2>INSTRUCTORES</h2>
        <div className="titulo-linea"></div>
      </header>

      <div className="instructores-grid">
        {instructores.map((instructor) => (
          <article
            className={`instructor-card ${instructor.color}`}
            key={instructor.nombre}
          >
            <div className="instructor-foto">
              <div className="foto-marco">
                <img
                  src={instructor.imagen}
                  alt={instructor.nombre}
                />
              </div>

              <div className="instructor-icono">
                <span>{instructor.icono}</span>
              </div>
            </div>

            <div className="instructor-info">
              <h3>{instructor.nombre}</h3>
              <div className="nombre-linea"></div>
              <p>{instructor.especialidad}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}