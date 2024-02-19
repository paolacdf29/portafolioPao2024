import './App.css';
import Header from './components/header/header';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';

function App() {
    return (
        <Router>
            <Box sx={{ flexGrow: 1, pb: 10 }} className="App">
                <Header />
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                    </Routes>
                </div>
            </Box>
        </Router>
    );
}

export default App;
