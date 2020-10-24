import React, {useState, useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Image from "./shared/Image";
import Grid from '@material-ui/core/Grid';
import "./aboutme.css";
import AboutMeLeftSideBar from '../images/AboutMeLeftSideBar.svg';
import AboutMeRightSideBar from '../images/AboutMeRightSideBar.svg';
import Typist from 'react-typist'
const AboutMe = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
      setCount(1)
  }, [count])

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
                    <div className="about-txt">
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
                  {/* <div className="typing-move" style={{display: 'inline-block', position:'absolute'}}>
                    {count ? (
                    <Typist cursor={{show: false}} onTypingDone={() => setCount(0)} avgTypingDelay={75}>
                        <h4 style={{fontSize: '1.5rem'}}>I work to inspire others!</h4>
                        <Typist.Backspace count={25} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>Want to build connections</h4>
                        <Typist.Backspace count={25} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>Hiking and workout junkie</h4>
                        <Typist.Backspace count={25} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>Coding Breaking Repeating</h4>
                        <Typist.Backspace count={25} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>Code for the Social Good!</h4>
                        <Typist.Backspace count={25} delay={1500}/>
                    </Typist>
                ) : (<h4 style={{fontSize: '1.5rem'}}>  </h4>)
                }
                </div> */}
                
            </section>
        )
}

export default AboutMe;