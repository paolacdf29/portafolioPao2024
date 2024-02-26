import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { forwardRef } from 'react';

import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <IconButton
        sx={{ color: '#CDA37D' }}
        aria-label="add to shopping cart"
        size="large"
        key="0"
        href="https://github.com/paolacdf29"
        target="_blank"
    >
        <GitHubIcon fontSize="large" />
    </IconButton>,
    <IconButton
        sx={{ color: '#CDA37D' }}
        aria-label="add to shopping cart"
        size="large"
        key="1"
        href="https://www.linkedin.com/in/paola-diaz-286a19141/"
        target="_blank"
    >
        <LinkedInIcon fontSize="large" />
    </IconButton>,
    <IconButton
        sx={{ color: '#CDA37D' }}
        aria-label="add to shopping cart"
        size="large"
        key="2"
        href="mailto:paolacdf29@gmail.com"
        target="_blank"
    >
        <EmailIcon fontSize="large" />
    </IconButton>
];
const Contacto = forwardRef((props, ref) => {
    return (
        <Grid item xs={12} sx={{ mt: 10 }} ref={ref}>
            <h4 style={{ color: 'white' }}>Contact me!</h4>
            <p style={{ color: 'white' }}>Contact me through my social media accounts or my email:</p>
            <ButtonGroup aria-label="vertical contained button group" variant="text">
                {buttons}
            </ButtonGroup>
        </Grid>
    );
});

export default Contacto;
