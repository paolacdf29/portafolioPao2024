import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <IconButton sx={{ color: '#CDA37D' }} aria-label="add to shopping cart" size="large">
        <GitHubIcon url="" fontSize="large" />
    </IconButton>,
    <IconButton sx={{ color: '#CDA37D' }} aria-label="add to shopping cart" size="large">
        <LinkedInIcon url="" fontSize="large" />
    </IconButton>,
    <IconButton sx={{ color: '#CDA37D' }} aria-label="add to shopping cart" size="large">
        <EmailIcon url="" fontSize="large" />
    </IconButton>
];
const Contacto = () => {
    return (
        <Grid item xs={12} sx={{ mt: 10 }}>
            <h4 style={{ color: 'white' }}>Contact me!</h4>
            <p style={{ color: 'white' }}>Contact me through my social media accounts or my email:</p>
            <ButtonGroup aria-label="vertical contained button group" variant="text">
                {buttons}
            </ButtonGroup>
        </Grid>
    );
};

export default Contacto;
