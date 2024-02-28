import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import pdfFile from '../../assets/statics/ejemplo.pdf';
import PropTypes from 'prop-types';
import './header.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2'
        }
    }
});

const Header = (props) => {
    const scrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView();
        }
    };
    const handleDownloadPDF = async () => {
        try {
            const response = await fetch(pdfFile);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'PaolaDiazCV.pdf';
            a.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    return (
        <>
            {' '}
            <ThemeProvider theme={darkTheme}>
                <Box sx={{ flexGrow: 1 }} color="dark">
                    <AppBar position="static">
                        <Toolbar>
                            <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
                                <Grid item sm={6}>
                                    <Typography variant="h6">Paola Diaz</Typography>
                                </Grid>
                                <Grid item sm={6}>
                                    <ButtonGroup variant="text" aria-label="text button group" color="secondary">
                                        <Button href="/">Home</Button>
                                        <Button href="/aboutme">About me</Button>
                                        <Button
                                            onClick={() => {
                                                scrollTo(props.projectsRef);
                                            }}
                                        >
                                            Projects
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                handleDownloadPDF();
                                            }}
                                        >
                                            Resume
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                scrollTo(props.contactRef);
                                            }}
                                        >
                                            {' '}
                                            <ChatBubbleOutlineIcon /> Contact
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        </>
    );
};

ProjectCard.propTypes = {
    props: PropTypes.object.isRequired
};

export default Header;
