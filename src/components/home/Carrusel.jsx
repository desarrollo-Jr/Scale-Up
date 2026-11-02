import "../../assets/styles/home/carrusel.css";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Para reactivar las flechas si se desea.

const BASE_URL = import.meta.env.BASE_URL;

const descripciones = {

};
export default function Carrusel() {
  const [index, setIndex] = useState(0);
  const [galeria, setGaleria] = useState([]);
  const [estado, setEstado] = useState("cargando");

  // Cargar las fotografías registradas en public/images/carrusel/fotos.json.
  useEffect(() => {
    const controlador = new AbortController();

    async function cargarFotografias() {
      try {
        const respuesta = await fetch(
          `${BASE_URL}images/carrusel/fotos.json`,
          { signal: controlador.signal, cache: "no-store" }
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar fotos.json");
        }

        const nombres = await respuesta.json();
        if (!Array.isArray(nombres)) {
          throw new Error("El contenido de fotos.json no es una lista");
        }

        const fotos = nombres
          .filter(
            (nombre) =>
              typeof nombre === "string" &&
              /\.(jpg|jpeg|png|webp|avif)$/i.test(nombre)
          )
          .map((nombre) => ({
            id: nombre,
            src: `${BASE_URL}images/carrusel/${encodeURIComponent(nombre)}`,
            alt:
              descripciones[nombre]?.alt ||
              `Fotografía de Scale Up: ${nombre}`,
            caption:
              descripciones[nombre]?.caption ||
              "",
          }));

        setGaleria(fotos);
        setIndex(0);
        setEstado("listo");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error al cargar las fotos del carrusel:", error);
          setEstado("error");
        }
      }
    }

    cargarFotografias();
    return () => controlador.abort();
  }, []);

  // Avanzar automáticamente cada 4 segundos.
  useEffect(() => {
    if (galeria.length <= 1) return;

    const intervalo = setInterval(() => {
      setIndex((actual) => (actual + 1) % galeria.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [galeria.length]);

  const anterior = () => {
    if (galeria.length <= 1) return;
    setIndex(
      (actual) => (actual - 1 + galeria.length) % galeria.length
    );
  };

  const siguiente = () => {
    if (galeria.length <= 1) return;
    setIndex((actual) => (actual + 1) % galeria.length);
  };

  return (
    <section
      className="accion section-anchor"
      id="accion"
      aria-labelledby="accion-titulo"
    >
      <div className="accion-copy">
        <div className="accion-contenido">
          <p className="accion-kicker">RECONOCE UNA</p>
          <h2 id="accion-titulo">NUEVA</h2>
          <p className="accion-subtitle">POSIBILIDAD DE</p>
          <strong className="accion-destacado">ACCIÓN</strong>
          <span className="accion-linea" aria-hidden="true" />
        </div>
      </div>

      <div
        className="gallery"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Galería de Scale Up"
      >
        <div className="gallery-media">
          {galeria.map((item, i) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              className={`gallery-slide ${i === index ? "active" : ""}`}
              aria-hidden={i !== index}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>

        {/*galeria.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow left"
              onClick={anterior}
              aria-label="Fotografía anterior"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              className="gallery-arrow right"
              onClick={siguiente}
              aria-label="Fotografía siguiente"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </>
        )*/}

        <div className="gallery-bottom">
          <p
            key={galeria[index]?.id ?? "sin-fotografias"}
            className="gallery-caption"
            aria-live="off"
          >
            {galeria[index]?.caption ??
              (estado === "error"
                ? "No fue posible cargar las fotografías."
                : estado === "cargando"
                  ? "Cargando fotografías..."
                  : "Próximamente nuevas fotografías.")}
          </p>

          {galeria.length > 1 && (
            <div
              className="gallery-dots"
              role="group"
              aria-label="Seleccionar fotografía"
            >
              {galeria.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver fotografía ${i + 1}`}
                  aria-pressed={i === index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
