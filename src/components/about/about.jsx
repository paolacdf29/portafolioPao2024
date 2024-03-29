import Card from '@mui/material/Card';
import './about.css';
// import { Height } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

export const About = () => {
    return (
        <Grid item xs={12}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '20px', padding: '5%' }} className="about">
                <div>
                    <h2>
                        <span className="cool-name">PAOLA DIAZ</span> Full-stack developer
                    </h2>
                    <p>
                        As a developer with four years of hands-on experience, I bring a robust background in database management and
                        backend development to every project
                    </p>
                    <p align="center">
                        <img
                            src="https://skillicons.dev/icons?i=py,django,ts,cs,dotnet,react,postgres,angular"
                            alt="img"
                            className="icons-list"
                        />
                    </p>
                    <p align="center">
                        <img
                            src="https://skillicons.dev/icons?i=git,docker,flask,nodejs,openshift,firebase,bash"
                            alt="img"
                            className="icons-list"
                        />
                    </p>
                </div>
            </Card>
        </Grid>
    );
};
