import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import './projectCard.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

export default function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);
    const [iconsUrl, setIconsUrl] = useState('https://skillicons.dev/icons?i=');

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { nombre, img, descipcion, tecnologias, github, url } = project;

    return (
        <Card sx={{ width: '750px', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '20px', padding: '2%', marginTop: '8%' }}>
            <CardHeader title={nombre} subheader="September 14, 2016" />
            <CardMedia component="img" height="194" image={img} alt="Project mockup" />
            <CardContent>
                <Typography variant="body2" color="text.ligth">
                    {descipcion}
                </Typography>
            </CardContent>
            {tecnologias.map((tech) => (
                // <Chip label={(tech.name, (<img src={tech.icon} alt="img" />))} />
                <Chip avatar={<Avatar alt={tech.name} src={iconsUrl + tech.icon} />} label={tech.name} variant="outlined" />
            ))}
            <CardActions disableSpacing>
                <IconButton aria-label="go to code">
                    <GitHubIcon url={github} />
                </IconButton>
                <IconButton aria-label="go to site">
                    <OpenInNewIcon url={url} />
                </IconButton>
                <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
