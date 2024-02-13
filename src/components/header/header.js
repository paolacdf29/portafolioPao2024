import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './header.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2'
        }
    }
});

const Header = () => {
    const handleClick = (id) => {
        console.log(id);
        const element = document.getElementById(id);
        console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
                                        <Button>Home</Button>
                                        <Button>About me</Button>
                                        <Button
                                            onClick={() => {
                                                handleClick('projects');
                                            }}
                                        >
                                            Proyects
                                        </Button>
                                        <Button>Resume</Button>
                                        <Button>
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

export default Header;
