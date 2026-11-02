import "../assets/styles/home/compartidos.css";
import Hero from "../components/home/Hero.jsx";
import Pilares from "../components/home/Pilares.jsx";
import Instructores from "../components/home/Instructores.jsx";
import Carrusel from "../components/home/Carrusel.jsx";
import Requisitos from "../components/home/Requisitos.jsx";
import Ubicacion from "../components/home/Ubicacion.jsx";
import Registro from "../components/home/Registro.jsx";



export default function Home() {
  return (
    <>
      <Hero />
      <Pilares />
      <Instructores />
      <Carrusel />
      <Requisitos />
      <Ubicacion />
      <Registro />
    </>
  );
}
