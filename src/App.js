import "./App.css";
import Header from "./components/header/header";
import { About } from "./components/about/about";
import CertificadoCard from "./components/certificadoCard/certificadoCard";
import Contacto from "./components/contacto";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <About />
        <Projects />
        <CertificadoCard />
        <Contacto />
      </div>
    </>
  );
}

export default App;
