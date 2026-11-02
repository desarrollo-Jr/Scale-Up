import Navbar from "./components/Navbar";
import Home from "./sections/Home";

function App() {
  return (
    <>
      {/* Marca de agua global */}
      <div
        className="marca-agua-global"
        aria-hidden="true"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}images/fondo.png")`,
        }}
      />

      <Navbar />
      <Home />
    </>
  );
}

export default App;