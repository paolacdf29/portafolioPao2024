import { About } from '../components/about/about';
import { Certificados } from '../components/Certificado/Certificados';
import Contacto from '../components/contacto/contacto';
import Projects from '../components/projects/projects';

const Home = () => {
    return (
        <>
            <About />
            <Projects id="projects" />
            <Certificados />
            <Contacto />
        </>
    );
};

export default Home;
