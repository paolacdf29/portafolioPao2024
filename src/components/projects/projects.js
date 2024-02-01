import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard/projectCard';

const Projects = () => {
    const projectsObjs = [
        {
            nombre: 'Projecto 1',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: '',
            github: '',
            url: ''
        },
        {
            nombre: 'Projecto 1',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: '',
            github: '',
            url: ''
        }
    ];

    return (
        <Grid container spacing={5} sx={{ maxWidth: '80%', margin: '10%' }}>
            {projectsObjs.map((project) => (
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;
