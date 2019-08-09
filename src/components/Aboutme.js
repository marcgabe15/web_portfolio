import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Image from "./shared/Image";
import Grid from '@material-ui/core/Grid';
import "./aboutme.css";
import AboutMeLeftSideBar from '../images/AboutMeLeftSideBar.svg';
import AboutMeRightSideBar from '../images/AboutMeRightSideBar.svg';

const AboutMe = () => {
    const data = useStaticQuery(graphql`
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
    // linear-gradient(rgb(52, 102, 174), rgb(83, 144, 241));
        return (
            <section className="section-about-me">
                <Image
                  src={AboutMeLeftSideBar}
                  style={{ position: 'absolute', left: 0, transform: 'translateY(-50px)'}}
                  lighten
                />
                <Image
                  src={AboutMeRightSideBar}
                  style={{ position: 'absolute', right: 0, transform: 'translateY(-50px)'}}
                  lighten
                />
                <h2 className="text-center about-header" id="about-me">ABOUT ME</h2>
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className="aboutme-grid"
                >
                    <div className="col-sm-5">
                      <Img
                        title="profile picture"
                        alt="about me picture"
                        fluid={data.file.childImageSharp.fluid}
                        className="cool-me"
                      />
                    </div>
                    <div className="col-sm-7 about-txt">
                      <p>
                        Hello! I'm a software engineer looking for opportunities to work in full-stack or AI. I am quick to adapt, love to learn, and always
                        looking forward to working with new tech!
                      </p>
                      <h4>What I hope to do</h4>
                      <p>
                        My mission as a developer
                        is to contribute to the social good.
                        Started out as a hobby and now
                        I finally have found myself a true purpose
                        and passion
                      </p>
                      <h4>What I'm doing</h4>
                      <p>
                        On my free time, I read Medium and Reddit,
                        listen to podcasts, and take tutorials
                        on new frameworks and libraries. I am especially interested
                        in serverless, AI, and data science.
                      </p>
                      <h4>When I'm not coding...</h4>
                      <p>
                        You can catch me brewing coffee, trying new food,
                        working out, or meditating
                      </p>
                      <p>
                        I also want to say thank you to my girlfriend
                        Lauren. You always push me to do better and inspire me everyday :)
                      </p>
                    </div>
                  </Grid>
            </section>
        )
}

export default AboutMe;