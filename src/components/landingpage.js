import React, {Component} from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import "./landingpage.css";
import Grid from '@material-ui/core/Grid';
import Img from "gatsby-image";
import Image from "./shared/Image";
import profile from '../images/portfolio.jpg';
import devicons from '../data/devicons.json';

//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>
const LandingPage = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "background-cover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                 ...GatsbyImageSharpFluid
                 presentationWidth
                }
            }
        }
      }
    `)
    return (
        <section id="front-page">
            {/* <Img
            title="background picture"
            alt="the city that never sleeps"
            fluid={data.file.childImageSharp.fluid}
            /> */}
            <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
            className="landing-grid"
            >
            <img 
            src = {profile}
            alt = "profile pic"
            className = "profile-pic"
            />
            <div className="banner-text">
                <h1>Software Engineer</h1>
                <hr/>
                <p>HTML/CSS | Bootstrap | Node.js | React.js</p>
                <div className="dev-links">
                    {devicons.map(devicon => (
                        <div className="col-sm-2 align-icon develop-icon">
                            <span
                                className={`${devicon.prefix} fa-${devicon.icon}`}
                                alt={`External link to my ${devicon.name} account`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            </Grid>
        </section>
    )
}
export default LandingPage;
