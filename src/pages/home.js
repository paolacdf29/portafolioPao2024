import { About } from '../components/about/about';
import { Certificados } from '../components/Certificado/Certificados';
import Contacto from '../components/contacto/contacto';
import Projects from '../components/projects/projects';
import { forwardRef } from 'react';

const Home = forwardRef((props, ref) => {
    return (
        <>
            <About />
            <Projects ref={ref} />
            <Certificados />
            <Contacto ref={props.contactRef} />
        </>
    );
});

export default Home;
