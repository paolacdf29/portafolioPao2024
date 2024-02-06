import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <IconButton color="secondary" aria-label="add to shopping cart" size="large">
        <GitHubIcon url="" />
    </IconButton>,
    <IconButton color="secondary" aria-label="add to shopping cart" size="large">
        <GitHubIcon url="" />
    </IconButton>,
    <IconButton color="secondary" aria-label="add to shopping cart" size="large">
        <GitHubIcon url="" />
    </IconButton>
];
const Contacto = () => {
    return (
        <Grid item xs={12} sx={{ mt: 10 }}>
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text">
                {buttons}
            </ButtonGroup>
        </Grid>
    );
};

export default Contacto;
