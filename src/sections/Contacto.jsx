
import { useState } from "react";
import {
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../assets/styles/contacto.css";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    mensaje: "",
  });

  const [mensajeEstado, setMensajeEstado] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previo) => ({
      ...previo,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMensajeEstado(
      "Gracias por contactarnos. Tu formulario está listo para conectarse con el servicio de envío."
    );
  }

  return (
    <section
      className="registro section-anchor"
      id="contacto"
    >
      {/* Encabezado */}
      <header className="registro-header">
        <h1>Ponte en contacto</h1>
        <h2>Contáctanos</h2>
      </header>

      {/* Contenido principal */}
      <div className="registro-contenido">
        {/* Texto de la izquierda */}
        <div className="registro-copy">
          <h3>Queremos ayudarte</h3>
          <p className="registro-llamanos">
            ¡Llámanos!
          </p>

          <p className="registro-descripcion">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Formulario */}
        <form
          className="registro-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre..."
            aria-label="Nombre"
            required
          />

          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Correo..."
            aria-label="Correo electrónico"
            required
          />

          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Empresa..."
            aria-label="Empresa"
          />

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Mensaje..."
            aria-label="Mensaje"
            required
          />

          <button
            className="button button-orange"
            type="submit"
          >
            Enviar mensaje
          </button>

          {mensajeEstado && (
            <p className="form-message" role="status">
              {mensajeEstado}
            </p>
          )}
        </form>
      </div>

      {/* Datos de contacto */}
      <div className="registro-datos">
        <div className="registro-dato">
          <FaMobileAlt className="registro-icono" />

          <p>(771) 442 1189</p>
        </div>

        <div className="registro-dato">
          <FaMapMarkerAlt className="registro-icono" />

          <p>
            Pachuca de Soto, Hidalgo
            <br />
            CP. 42080
          </p>
        </div>

        <div className="registro-dato">
          <FaEnvelope className="registro-icono" />

          <p>
            <a href="mailto:contacto@geomancia.com">
              contacto@geomancia.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
