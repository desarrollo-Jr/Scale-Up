import { PersonSimpleHike, Brain, FlowerLotus } from "@phosphor-icons/react";

import "../assets/styles/Pilares.css";

const pilares = [
  { icon: <PersonSimpleHike weight="bold" />, title: "MUNDO FÍSICO" },
  { icon: <Brain weight="bold" />, title: "REGRESIÓN" },
  { icon: <FlowerLotus weight="bold" />, title: "PORTALES" },
];

export default function Pilares() {
  return (
    <section className="pilares section-anchor" id="pilares">
      <div className="pilares-photo">
        <img
          className="pilares-img"
          src="/images/Bosque.jpg"
          alt="Bosque"
          onError={(e) => {
            console.error("No se encontró la imagen:", e.currentTarget.src);
          }}
        />

        <div className="photo-title">
          <span>REPROGRAMA</span>
          <strong>TUS LÍMITES</strong>
          <i />
        </div>
      </div>

      <div className="pilares-copy">
        <p className="pilares-intro">
          <strong>Scale Up®</strong> es el primero de una serie de
          entrenamientos seriados en diversos centros de poder
          ubicados en México y el mundo.
        </p>

        <p className="pilares-subtitle">
          Serás conducid@ por los caminos de 3 instructores
          master a través de 3 planos de consciencia:
        </p>

        <div className="pillar-list">
          {pilares.map((item) => (
            <div className="pillar" key={item.title}>
              <span className="pillar-icon">{item.icon}</span>
              <small>{item.title}</small>
            </div>
          ))}
        </div>

        <p className="pilares-footer">
          El mundo físico y tus resultados (tu historia personal),
          la energía cuántica y la reprogramación en el plano
          espiritual.
        </p>
      </div>
    </section>
  );
}
