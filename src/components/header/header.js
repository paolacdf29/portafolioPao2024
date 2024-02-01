import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
    return (
        <>
            {' '}
            <ThemeProvider theme={darkTheme}>
                <Box sx={{ flexGrow: 1 }} color="dark">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">PD</Typography>
                            <ButtonGroup variant="text" aria-label="text button group" color="secondary">
                                <Button>About me</Button>
                                <Button>Proyects</Button>
                                <Button>
                                    {' '}
                                    <ChatBubbleOutlineIcon /> Contact
                                </Button>
                            </ButtonGroup>
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Header;
