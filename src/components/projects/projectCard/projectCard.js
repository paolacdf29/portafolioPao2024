import React from 'react';
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

export default function ProjectCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const iconsUrl = 'https://skillicons.dev/icons?i=';
    const projectObj = {
        nombre: 'Projecto 1',
        img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
        descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
        tecnologias: [
            { name: 'Python', icon: iconsUrl + 'py' },
            { name: 'Django', icon: iconsUrl + 'django' },
            { name: 'React', icon: iconsUrl + 'react' }
        ],
        github: '',
        url: ''
    };

    return (
        <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '20px', padding: '2%' }}>
            <CardHeader title={projectObj.nombre} subheader="September 14, 2016" />
            <CardMedia component="img" height="194" image={projectObj.img} alt="Project mockup" />
            <CardContent>
                <Typography variant="body2" color="text.ligth">
                    {projectObj.descipcion}
                </Typography>
            </CardContent>
            {projectObj.tecnologias.map((tech) => (
                // <Chip label={(tech.name, (<img src={tech.icon} alt="img" />))} />
                <Chip avatar={<Avatar alt={tech.name} src={tech.icon} />} label={tech.name} variant="outlined" />
            ))}
            <CardActions disableSpacing>
                <IconButton aria-label="go to code">
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label="go to site">
                    <OpenInNewIcon url={projectObj.github} />
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
