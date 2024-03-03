import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard/projectCard';
import './projects.css';
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
    const projectsObjs = [
        {
            id: 0,
            nombre: 'Projecto 1',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { id: 1, name: 'Python', icon: 'py' },
                { id: 2, name: 'Django', icon: 'django' },
                { id: 3, name: 'React', icon: 'react' }
            ],
            github: '',
            url: ''
        },
        {
            id: 1,
            nombre: 'Projecto 2',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { id: 1, name: 'Angular', icon: 'angular' },
                { id: 2, name: 'Firebase', icon: 'firebase' },
                { id: 3, name: 'Git', icon: 'git' }
            ],
            github: '',
            url: ''
        },
        {
            id: 2,
            nombre: 'Projecto 3',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { id: 1, name: 'Angular', icon: 'angular' },
                { id: 2, name: 'Python', icon: 'py' }
            ],
            github: '',
            url: ''
        },
        {
            id: 3,
            nombre: 'Projecto 4',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { id: 1, name: 'Python', icon: 'py' },
                { id: 2, name: 'flask', icon: 'flask' },
                { id: 3, name: 'React', icon: 'react' }
            ],
            github: '',
            url: ''
        }
    ];

    return (
        <>
            <Grid item xs={12} sx={{ mt: 10, color: 'white' }}>
                <h1>Projects</h1>
            </Grid>
            <div className="project-card-container" ref={ref}>
                {projectsObjs.map((project) => (
                    <Grid item xs={12} sm={12} md={6} key={project.id}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </div>
        </>
    );
});

export default Projects;
