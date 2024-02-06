import './App.css';
import Header from './components/header/header';
import { About } from './components/about/about';
import { Certificados } from 'components/Certificado/Certificados';
import Contacto from './components/contacto/contacto';
import Projects from './components/projects/projects';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function App() {
    return (
        <Box sx={{ flexGrow: 1, pb: 10 }} className="App">
            <Header />
            <Grid container spacing={5} sx={{ maxWidth: '85%', margin: '5%' }}>
                <About />
                <Projects />
                <Certificados />
                <Contacto />
            </Grid>
        </Box>
    );
}

export default App;
