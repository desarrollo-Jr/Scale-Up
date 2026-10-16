
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
          src={`${import.meta.env.BASE_URL}images/mapa.png`}
          alt="Mapa de ubicaciÃ³n de Cuetzalan, Puebla"
          className="mapa-imagen"
        />

        <p className="mapa-pie">
          Cuetzalan, Puebla, MÃ©xico. Mapa ilustrativo.
        </p>
      </div>

      {/* InformaciÃ³n del evento y hotel */}
      <div className="ubicacion-informacion">
        <div className="ubicacion-bloque">
          <h2>Ubicaciòn</h2>

          <p>
            Conoce el lugar donde viviras la experiencia
            Scale Up. Consulta el mapa para planificar
            tu llegada y organizar tu recorrido.
          </p>
        </div>

        <div className="ubicacion-hotel">
          <img
            src={`${import.meta.env.BASE_URL}images/logo-villas.webp`}
            alt="Logotipo del Hotel Reserva Villas de Cuetzalan"
            className="ubicacion-hotel-logo"
          />

          <h2>Hotel Reserva Villas de Cuetzalan</h2>

          <p>
            Consulta la ubicaciòn del hotel y prepara
            tu llegada para disfrutar de la experiencia
            Scale Up.
          </p>

          <a
            className="ubicacion-boton"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicaciòn del hotel
          </a>
        </div>
      </div>
    </section>
  );
}


