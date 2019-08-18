import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import "./landingpage.css";
import Grid from '@material-ui/core/Grid';
import Img from "gatsby-image";
import { faHtml5, faBootstrap, faCss3, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LandingPage = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "background-cover.jpeg" }) {
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
            <Img
            title="background picture"
            alt="the city that never sleeps"
            fluid={data.file.childImageSharp.fluid}
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            }}
            className="cover-img"
            />
            <div className="overlay" />
            <div className="center">
            <h1 className="name">
                <b>HI, I'M MARC</b>
            </h1>
            <p className="greetings">Let's change the world together!</p>
            </div>
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className="landing-grid"
            >
            <div className="banner-text">
                <h2>HI, I'M MARC</h2>
                <h4>Coding for the Social Good</h4>
                <hr/>
                <p>HTML/CSS | Bootstrap | React.js | Graphql</p>
                <div className="dev-links">
                    <FontAwesomeIcon icon = {faHtml5}  size="3x" className="inside-icon"/>
                    <FontAwesomeIcon icon = {faCss3} size="3x" className="inside-icon"/>
                    <FontAwesomeIcon icon = {faBootstrap} size="3x" className="inside-icon"/>
                    <FontAwesomeIcon icon = {faReact} size="3x" className="inside-icon"/>
                </div>
            </div>
            </Grid>
        </section>
    )
}
export default LandingPage;
