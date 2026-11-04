import "../../assets/styles/home/hero.css";
import Button from "../Button.jsx";

const BASE_URL = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      style={{
        backgroundImage: `url("${BASE_URL}images/Portada.png")`,
      }}
    >
      <div className="hero-content">
        <img
          className="hero-logo"
          src={`${BASE_URL}images/logo.png`}
          alt="Logo Scale Up"
        />

        <span className="hero-tag">
          Scale Up
        </span>

        <p className="hero-description">
          No es un retiro, ES UN UMBRAL
        </p>

        <p className="hero-fecha">
          20 al 22 de Noviembre
        </p>

        <div className="hero-actions">
        <Button href="#registro">
          ¡Agenda tu llamada!
        </Button>
      </div>
      </div>
    </section>
  );
}
