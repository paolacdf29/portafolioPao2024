import { About } from '../components/about/about';
import { Certificados } from '../components/Certificado/Certificados';
import Contacto from '../components/contacto/contacto';
import Projects from '../components/projects/projects';
import { forwardRef } from 'react';

const Home = ({ contactRef, projectsRef }) => {
    return (
        <>
            <About />
            <Projects projectsRef={projectsRef} />
            <Certificados />
            <Contacto contactRef={contactRef} />
        </>
    );
};

export default Home;
