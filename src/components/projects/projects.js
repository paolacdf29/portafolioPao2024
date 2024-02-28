import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard/projectCard';
import { useEffect, forwardRef } from 'react';
import { useProjects } from 'hooks/projectsHook';
import PropTypes from 'prop-types';
import './projects.css';

const Projects = forwardRef((props, ref) => {
    const { loading, projects, error, getProjects } = useProjects();

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <Grid item xs={12} sx={{ mt: 10, color: 'white' }}>
                <h1>Projects</h1>
            </Grid>
            <div className="project-card-container" ref={ref}>
                {/* {projectsObjs.map((project) => (
                    <Grid item xs={12} sm={12} md={6} key={project.id}>
                        <ProjectCard project={project} />
                    </Grid>
                ))} */}
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={12} md={6} key={project.id}>
                        <ProjectCard project={project} index={index} />
                    </Grid>
                ))}
            </div>
        </>
    );
});

ProjectCard.propTypes = {
    props: PropTypes.object.IsOptional,
    ref: PropTypes.object.isRequired
};

export default Projects;
