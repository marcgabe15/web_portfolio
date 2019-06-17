import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import stuff from "../images/pingcare.png"
import projects from "../data/projects.json";

import './projects.css';
class Projects extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <section id="projects" className="section-projects">
                <h2 className="text-center projects-header">PROJECTS</h2>
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >{projects.map(project => (
                    <Card className="project-card">
                        <CardActionArea>
                            <img
                            src={stuff}
                            className="card-media"
                            />
                            <CardContent>
                            <h4>{`${project.name}`}</h4>
                            <p>{`${project.description}`}</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                ))}
                </Grid>
            </section>
        )
    }
}

export default Projects;