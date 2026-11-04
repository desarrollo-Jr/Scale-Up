import "../../assets/styles/home/ubicacion.css";

const BASE_URL = import.meta.env.BASE_URL;
const hotelNombre = "Hotel Reserva Villas de Cuetzalan";

export default function Ubicacion() {
  return (
    <section
      className="ubicacion section-anchor"
      id="ubicacion"
      aria-labelledby="ubicacion-titulo"
    >
      <div className="ubicacion-contenido">
        {/* COLUMNA IZQUIERDA: MAPA */}
        <div className="ubicacion-mapa">
          <img
            src={`${BASE_URL}images/mapa.png`}
            alt="Mapa ilustrativo de Puebla con Cuetzalan señalado"
            className="mapa-imagen"
            loading="lazy"
            decoding="async"
          />
          <p className="mapa-pie">
            Cuetzalan, Puebla, México. Mapa ilustrativo.
          </p>
        </div>

        {/* COLUMNA DERECHA: TEXTO, LOGO Y BOTÓN */}
        <div className="ubicacion-informacion">
          <div className="ubicacion-bloque">
            <h2 id="ubicacion-titulo">
              Cuetzalan:
              <span>El escenario de tu experiencia.</span>
            </h2>
            <p>
              Consulta el mapa para planificar tu llegada
              y organizar tu recorrido.
            </p>
          </div>

          <div className="ubicacion-hotel">
            <img
              src={`${BASE_URL}images/logo-villas.webp`}
              alt="Logotipo del Hotel Reserva Villas de Cuetzalan"
              className="ubicacion-hotel-logo"
              loading="lazy"
              decoding="async"
            />

            <h3>{hotelNombre}</h3>

            <p>
              Consulta la ubicación del hotel y prepara
              tu camino para cruzar el umbral de SCALE UP.
            </p>

            {/* Descarga la imagen del mapa que está en public/images/ */}
            
          <a
            className="ubicacion-boton"
            href="https://www.google.com/maps/search/?api=1&query=Hotel%20Reserva%20Villas%20de%20Cuetzalan%2C%20Puebla%2C%20Mexico"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación del hotel ↗
          </a>

          </div>
        </div>
      </div>
    </section>
  );
}
