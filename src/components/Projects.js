import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Img from "gatsby-image";
import Grid from '@material-ui/core/Grid';
import projects from "../data/projects.json";
import './projects.css';
class Projects extends Component {
    render () {
        const projectImgs = this.props.projectImgs
        return (
            <section id="projects" className="section-projects">
                <h2 className="text-center projects-header">PROJECTS</h2>
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >
                {projects.map(project => {
                    const Image = projectImgs.find(n => {
                        return n.node.relativePath === `projects/${project.img}`
                    });
                    const ImageFixed = Image.node.childImageSharp.fluid
                    return (
                        <a
                        href={project.url}
                        key={project.url}
                        className="blah"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <Card className="project-card">
                                <CardActionArea>
                                    <Img
                                        title={project.name}
                                        alt="screen shot of project"
                                        fluid={ImageFixed}
                                        objectFit="cover"
                                        objectPosition="50% 50%"
                                        className="contained-image"
                                    />
                                    <CardContent>
                                    <h4 className="project-name">{`${project.name}`}</h4>
                                    <p className="cardtext">{`${project.description}`}</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        )
                })}
                </Grid>
            </section>
        )
    }
}

export default Projects;