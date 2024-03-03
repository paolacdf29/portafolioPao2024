import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard/projectCard';
import { useEffect } from 'react';
import { useProjects } from 'hooks/projectsHook';
import PropTypes from 'prop-types';
import './projects.css';

const Projects = (props) => {
    const { loading, projects, error, getProjects } = useProjects();

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <Grid item xs={12} sx={{ mt: 10, color: 'white' }}>
                <h1>Projects</h1>
            </Grid>
            <div className="project-card-container" ref={props.projectsRef}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={12} md={6} key={index}>
                        <ProjectCard project={project} index={index} />
                    </Grid>
                ))}
            </div>
        </>
    );
};

Projects.propTypes = {
    props: PropTypes.object
};

export default Projects;
