
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pilares from "./sections/Pilares";
import Instructores from "./sections/Instructores";
import Accion from "./sections/Accion";
import Requisitos from "./sections/Requisitos";
import Contacto from "./sections/Contacto";

import Ubicacion from "./sections/ubicacion";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Pilares />
        <Instructores />
        <Accion />
        <Requisitos />
        <Ubicacion />
        <Contacto />
      </main>    

      
    </>
  );
}


