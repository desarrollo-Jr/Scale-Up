import "../assets/styles/home/compartidos.css";
import Hero from "../components/home/Hero.jsx";
import Pilares from "../components/home/Pilares.jsx";
import Instructores from "../components/home/Instructores.jsx";
import Carrusel from "../components/home/Carrusel.jsx";
import Preguntas from "../components/home/Preguntas.jsx";
import Ubicacion from "../components/home/Ubicacion.jsx";
import Registro from "../components/home/Registro.jsx";
import Experiencia from "../components/home/Experiencia.jsx";


export default function Home() {
  return (
    <>
      <Hero />
      <Pilares />
      <Instructores />
      <Carrusel />
      <Ubicacion />
      <Preguntas />
      <Experiencia />
      <Registro />
    </>
  );
}
