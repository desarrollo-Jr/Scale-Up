
import "../assets/styles/ubicacion.css";

const BASE_URL = import.meta.env.BASE_URL;

const hotelNombre = "Hotel Reserva Villas de Cuetzalan";

// Abre una búsqueda del hotel en Google Maps.
// No presupone una ubicación exacta verificada.
const hotelMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${hotelNombre}, Cuetzalan, Puebla, México`
  );

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
            alt="Mapa ilustrativo de Puebla que señala Cuetzalan"
            className="mapa-imagen"
            loading="lazy"
            decoding="async"
          />

          <p className="mapa-pie">
            Cuetzalan, Puebla, México.
            Mapa ilustrativo.
          </p>
        </div>

        {/* COLUMNA DERECHA: INFORMACIÓN */}
        <div className="ubicacion-informacion">

          {/* INTRODUCCIÓN */}
          <div className="ubicacion-bloque">
            <span className="ubicacion-etiqueta">
              EL DESTINO DE TU EXPERIENCIA
            </span>

            <h2 id="ubicacion-titulo">
              Ubicación
            </h2>

            <p>
              Conoce el lugar donde vivirás la
              experiencia Scale Up. Consulta el
              mapa para planificar tu llegada
              y organizar tu recorrido.
            </p>
          </div>

          {/* INFORMACIÓN DEL HOTEL */}
          <div className="ubicacion-hotel">

            <img
              src={`${BASE_URL}images/logo-villas.webp`}
              alt="Logotipo de Reserva Villas de Cuetzalan"
              className="ubicacion-hotel-logo"
              loading="lazy"
              decoding="async"
            />

            <span className="ubicacion-hotel-etiqueta">
              LUGAR DE LA EXPERIENCIA
            </span>

            <h3>{hotelNombre}</h3>

            <p className="ubicacion-hotel-destino">
              Cuetzalan, Puebla, México
            </p>

            <p>
              Consulta la ubicación del hotel
              y prepara tu llegada para
              disfrutar de la experiencia
              Scale Up.
            </p>

            <a
              className="ubicacion-boton"
              href={hotelMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buscar Hotel Reserva Villas de Cuetzalan en Google Maps (abre una nueva pestaña)"
            >
              <span>Cómo llegar al hotel</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
