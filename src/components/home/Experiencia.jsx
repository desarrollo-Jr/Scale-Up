import "../../assets/styles/home/experiencia.css";

const BASE_URL = import.meta.env.BASE_URL;

// IMPORTANTE: los datos comerciales de la captura son de referencia.
// Cambia mostrarPrecio a true únicamente cuando el precio, el IVA y los MSI
// estén aprobados y esa opción de financiamiento esté disponible.
const informacionPago = {
  mostrarPrecio: true,
  precio: "Valor por persona: $15,000 MXN + IVA",
  facilidades: "Facilidades de pago a 3 MSI",
};

const actividades = [
  "Dos noches y tres días de hospedaje.",
  "Desayuno, comida y cena tipo buffet.",
  "Senderismo e inmersiones en el río y cascadas.",
  "Ceremonia ancestral con plantas sagradas.",
  "Música electro ambiental en vivo durante 6 horas.",
  "Materiales de trabajo para cada entrenamiento.",
];

export default function ExperienciaIncluye() {
  return (
    
    <section
    className="experiencia-incluye section-anchor"
    id="experiencia"
    aria-labelledby="experiencia-titulo"
    style={{
        "--experiencia-bg": `url("${BASE_URL}")`,
    }}
    >

      <div className="experiencia-incluye__contenedor">
        <header className="experiencia-incluye__encabezado">
          <h2 id="experiencia-titulo">¿Qué vivirás en esta experiencia?</h2>
          <p>
            Durante tu estancia, el espacio y el entorno natural
            formarán parte del recorrido.
          </p>
        </header>

        <div className="experiencia-incluye__lista">
          {actividades.map((actividad) => (
            <p className="experiencia-incluye__actividad" key={actividad}>
              {actividad}
            </p>
          ))}
        </div>

        <div className="experiencia-incluye__inversion">
          {informacionPago.mostrarPrecio ? (
            <>
              <p>{informacionPago.precio}</p>
              <p>{informacionPago.facilidades}</p>
            </>
          ) : (
            <p>Inversión y opciones de pago por confirmar.</p>
          )}
        </div>

        
        <button
        type="button"
        className="experiencia-incluye__boton"
        >
        ¡Quiero registrarme!
        </button>

      </div>
    </section>
  );
}
