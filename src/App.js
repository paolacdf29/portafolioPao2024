import './App.css';
import Header from './components/header/header';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import { useRef } from 'react';

function App() {
    const contactRef = useRef(null);
    const projectsRef = useRef(null);
    return (
        <Router>
            <Box sx={{ flexGrow: 1, pb: 10 }} className="App">
                <Header contactRef={contactRef} projectsRef={projectsRef} />
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home projectsRef={projectsRef} contactRef={contactRef} />} />
                        <Route path="/aboutme" element={<AboutMe />} />{' '}
                    </Routes>
                </div>
            </Box>
        </Router>
    );
}

export default App;
