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
        <section className="landing-grid" id="front-page">
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className="landing-grid"
            >
            <div className="banner-text" style={{marginTop: "17%"}}>
                <h1 style={{fontSize: '3em'}}>HI, I'M MARC</h1>
                <div>
                {/* <h3 style={{display: 'inline-block', marginTop: '2%', marginBottom: '2%', marginRight: '2%'}}><code title="a.k.a." style={{color: 'white', fontWeight: '700'}}>&gt;</code>
                </h3> */}
                <div style={{display: 'inline-block'}}>
                    {count ? (
                    <Typist cursor={{show: false}} onTypingDone={() => setCount(0)} avgTypingDelay={75}>
                        <h4 style={{fontSize: '1.5rem'}}>I am a Software Engineer</h4>
                        <Typist.Backspace count={24} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>I write Code</h4>
                        <Typist.Backspace count={12} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>I like to workout!</h4>
                        <Typist.Backspace count={18} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>Code, Break, Repeat</h4>
                        <Typist.Backspace count={26} delay={1000}/>
                        <h4 style={{fontSize: '1.5rem'}}>I love Cooking :)</h4>
                        <Typist.Backspace count={31} delay={1500}/>
                    </Typist>
                ) : (<h4/>)
                }
                </div>
                </div>
                <PhotoMotion/>
            </div>


            </Grid>
        </section>
    )
}
export default LandingPage;
