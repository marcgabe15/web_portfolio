import React, {useState, useEffect} from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import "./landingpage.css";
import Grid from '@material-ui/core/Grid';
import Img from "gatsby-image";
import { faHtml5, faBootstrap, faCss3, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageFlip from './shared/ImageFlip'
import Typist from 'react-typist'
import PhotoMotion from './shared/PhotoMotion'
const LandingPage = () => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        setCount(1)
    }, [count])

    const data2 = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "super-close-up.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                 ...GatsbyImageSharpFluid
                 presentationWidth
                }
            }
        }
      }
    `)

    return (
        <section className="landing-grid" id="front-page">
            <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
            className="landing-grid"
            >
            <div className="banner-text">
                <h1 style={{fontSize: '3em'}}>HI, I'M MARC!</h1>
                <p>Developer | Lifelong Learner | Foodie</p>
                <div style={{margin: '0 auto', maxWidth: '250px'}}>
                <Img
                title="profile picture"
                alt="about me picture"
                fluid={data2.file.childImageSharp.fluid}
                className="cool-me"
                />
                </div>
                <PhotoMotion/>
            </div>


            </Grid>
        </section>
    )
}
export default LandingPage;
