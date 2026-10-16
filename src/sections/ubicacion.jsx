
import "../assets/styles/ubicacion.css";

export default function Ubicacion() {
  return (
    <section
      className="ubicacion section-anchor"
      id="ubicacion"
    >
      {/* Mapa */}
      <div className="ubicacion-mapa">
        <img
          src="/images/mapa.png"
          alt="Mapa de ubicación de Cuetzalan, Puebla"
          className="mapa-imagen"
        />

        <p className="mapa-pie">
          Cuetzalan, Puebla, México. Mapa ilustrativo.
        </p>
      </div>

      {/* Información del evento y hotel */}
      <div className="ubicacion-informacion">
        <div className="ubicacion-bloque">
          <h2>Ubicación</h2>

          <p>
            Conoce el lugar donde vivirás la experiencia
            Scale Up. Consulta el mapa para planificar
            tu llegada y organizar tu recorrido.
          </p>
        </div>

        <div className="ubicacion-hotel">
          <img
            src="/images/logo-villas.webp"
            alt="Logotipo del Hotel Reserva Villas de Cuetzalan"
            className="ubicacion-hotel-logo"
          />

          <h2>Hotel Reserva Villas de Cuetzalan</h2>

          <p>
            Consulta la ubicación del hotel y prepara
            tu llegada para disfrutar de la experiencia
            Scale Up.
          </p>

          <a
            className="ubicacion-boton"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación del hotel
          </a>
        </div>
      </div>
    </section>
  );
}
