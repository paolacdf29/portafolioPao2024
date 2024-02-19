import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard/projectCard';
import './projects.css';

const Projects = () => {
    const projectsObjs = [
        {
            nombre: 'Projecto 1',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { name: 'Python', icon: 'py' },
                { name: 'Django', icon: 'django' },
                { name: 'React', icon: 'react' }
            ],
            github: '',
            url: ''
        },
        {
            nombre: 'Projecto 2',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { name: 'Angular', icon: 'angular' },
                { name: 'Firebase', icon: 'firebase' },
                { name: 'Git', icon: 'git' }
            ],
            github: '',
            url: ''
        },
        {
            nombre: 'Projecto 3',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { name: 'Angular', icon: 'angular' },
                { name: 'Python', icon: 'py' }
            ],
            github: '',
            url: ''
        },
        {
            nombre: 'Projecto 4',
            img: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp',
            descipcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
            tecnologias: [
                { name: 'Python', icon: 'py' },
                { name: 'flask', icon: 'flask' },
                { name: 'React', icon: 'react' }
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
            <div className="project-card-container">
                {projectsObjs.map((project) => (
                    <Grid item xs={12} sm={12} md={6}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </div>
        </>
    );
};

export default Projects;
