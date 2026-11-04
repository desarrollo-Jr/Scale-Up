import { useState } from "react";
import "../../assets/styles/home/preguntas.css";

const WHATSAPP_URL =
  "https://wa.me/527712021391?text=" +
  encodeURIComponent("Hola, quiero conocer más sobre SCALE UP.");

const preguntas = [
  {
    pregunta: "¿Cuándo se realizará SCALE UP?",
    respuesta:
      "Los días 20, 21 y 22 de noviembre de 2026.",
  },
  {
    pregunta: "¿Dónde se llevará a cabo?",
    respuesta:
      "En el Hotel Reserva Villas de Cuetzalan, en Cuetzalan, Puebla.",
  },
  {
    pregunta: "¿Cuánto dura la experiencia?",
    respuesta:
      "3 días y 2 noches. ",
  },
  {
    pregunta: "¿Cuál es la inversión y forma de pago?",
    respuesta:
      "La inversión por persona es de $15,000 MXN + IVA. Puedes asegurar tu lugar con $5,000 MXN. Contamos con facilidades de pago vía transferencia y tarjeta de crédito a 3 MSI en tarjetas participantes. (Pendiente especificar cuáles)",
  },
  {
    pregunta: "¿Cómo puedo reservar mi lugar?",
    respuesta:
      "Llena el formulario de esta página o escríbenos por WhatsApp al 771 202 1391 para realizar tu registro y orientarte durante el proceso.",
  },
  {
    pregunta: "¿Puedo conocer más sobre las actividades antes de inscribirme?",
    respuesta:
      "Sí. Puedes solicitar información detallada sobre el programa, las prácticas y las condiciones de participación antes de realizar tu registro, vía WhatsApp al 771 202 1391.",
  },
];

export default function PreguntasFrecuentes() {
  const [abierta, setAbierta] = useState(null);

  return (
    <section
      className="faq-scaleup section-anchor"
      id="preguntas-frecuentes"
      aria-labelledby="faq-titulo"
    >
      <div className="faq-contenedor">
        <div className="faq-izquierda">
          <header className="faq-encabezado">
            <span className="faq-etiqueta">Preguntas</span>
            <h2 id="faq-titulo">frecuentes</h2>
            <p>Enlistamos las preguntas más frecuentes de nuestros usuarios...</p>
          </header>

          <div className="faq-contacto">
            <h3>¿Aún tienes dudas?</h3>
            <p>
              Si tienes más dudas respecto al entrenamiento,
              ¡da clic aquí abajo!
            </p>
            <a
              className="faq-contacto-boton"
              href="https://wa.me/+527712021391"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escríbenos por WhatsApp (abre una nueva pestaña)"
            >
              ¡Escríbenos!
            </a>
          </div>
        </div>

        <div className="faq-lista" aria-label="Preguntas y respuestas">
          {preguntas.map((item, index) => {
            const estaAbierta = abierta === index;

            return (
              <div className="faq-item" key={item.pregunta}>
                <h3 className="faq-item-titulo">
                  <button
                    type="button"
                    className="faq-pregunta"
                    id={`faq-pregunta-${index}`}
                    aria-expanded={estaAbierta}
                    aria-controls={`faq-respuesta-${index}`}
                    onClick={() => setAbierta(estaAbierta ? null : index)}
                  >
                    <span>{item.pregunta}</span>
                    <span
                      className={`faq-flecha${estaAbierta ? " abierta" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className="faq-respuesta"
                  id={`faq-respuesta-${index}`}
                  role="region"
                  aria-labelledby={`faq-pregunta-${index}`}
                  hidden={!estaAbierta}
                >
                  <p>{item.respuesta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
