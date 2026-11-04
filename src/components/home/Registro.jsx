import "../../assets/styles/home/registro.css";
import { useState } from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    entrenamiento: "",
    mensaje: "",
  });

  const [mensajeEstado, setMensajeEstado] =
    useState("");

    const [enviando, setEnviando] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previo) => ({
      ...previo,
      [name]: value,
    }));
  }

async function handleSubmit(event) {
  event.preventDefault();

  if (enviando) return;

  setEnviando(true);
  setMensajeEstado("");

  const datos = {
    access_key: "f106fa7e-cc8e-471e-b2dd-bcb278c18b37",
    subject: "Registros - Scale Up",
    from_name: "Scale Up",
    "Nombre Completo": form.nombre,
    "Número de teléfono": form.telefono,
    "Entrenamiento de interés": form.entrenamiento,
    "Objetivo que desea alcanzar": form.mensaje,
  };

  try {
    const respuesta = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(datos),
      }
    );

    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.success) {
      throw new Error(
        resultado.message || "No se pudo enviar el formulario"
      );
    }

    setMensajeEstado(
      "¡Mensaje enviado correctamente! Pronto nos pondremos en contacto."
    );

    setForm({
      nombre: "",
      telefono: "",
      entrenamiento: "",
      mensaje: "",
    });

  } catch (error) {
    console.error("Error al enviar:", error);

    setMensajeEstado(
      "No se pudo enviar el mensaje. Inténtalo nuevamente."
    );

  } finally {
    setEnviando(false);
  }
}

  return (
    <section
      className="registro section-anchor"
      id="registro"
    >
      <header
        className="registro-header section-anchor"
        id="contacto"
      >
        <h2>El siguiente paso comienza aquí.</h2>
        
      </header>

      <div className="registro-contenido">
        <div className="registro-copy">
          <h3>¿Te unes al primer capítulo?  </h3>

          <p className="registro-llamanos">
            ¡Llámanos!
          </p>

          <p className="registro-descripcion">
            Completa el siguiente formulario y recibe 
            información para conocer
             más sobre la experiencia y asegurar tu lugar.
          </p>
        </div>

        <form
          className="registro-form"
          onSubmit={handleSubmit}
        >
          <div className="registro-campo">
            <label htmlFor="nombre">
            
            </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="¿Cómo te llamas?"
            aria-label="Nombre"
            required
          />
          </div>
          <div className="registro-campo">
            <label htmlFor="telefono">
              
            </label>

          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="¿A qué número podemos contactarte?"
            aria-label="Número de teléfono"
            required
          />
          </div>

          <div className="registro-campo">
            <label htmlFor="entrenamiento">
              
            </label>

            <select
              id="entrenamiento"
              name="entrenamiento"
              value={form.entrenamiento}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecciona tu entrenamiento
              </option>

              <option value="Scale Up">
                Scale Up
              </option>

              <option value="Otro entrenamiento">
                Otro entrenamiento
              </option>
            </select>
          </div>

          <div className="registro-campo">
            <label htmlFor="mensaje">
              
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Objetivo que deseas alcanzar: Comparte brevemente qué te gustaría explorar o transformar."
              required
            />
          </div>

          <button
            className="button button-orange"
            type="submit"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar mensaje"}
          </button>

          {mensajeEstado && (
            <p
              className="form-message"
              role="status"
            >
              {mensajeEstado}
            </p>
          )}
        </form>
      </div>

{/* TELÉFONO Y CORREO */}

    <div className="registro-datos registro-datos-enfila">

      {/* TELÉFONO */}
      <div className="registro-dato">
        <FaMobileAlt className="registro-icono" />

        <a href="https://wa.me/527712021391">
          +52 (771) 2021 391
        </a>
      </div>

      {/* CORREO */}
      <div className="registro-dato">
        <FaEnvelope className="registro-icono" />

        <a href="mailto:hello@vectornow.me">
          hello@vectornow.me
        </a>
      </div>

    </div>

    </section>
  );
}
