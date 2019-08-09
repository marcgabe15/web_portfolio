import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import LandingPage from "../components/Landingpage";
import Projects from "../components/Projects";
import AboutMe from "../components/Aboutme";
// import Resume from "../components/resume";
const IndexPage = ({data}) => {
  const {edges: ProjectImgs} = data.ProjectImgs
  return  (
      <div>
      <Navigation/>
      <LandingPage/>
      <AboutMe/>
      <Projects projectImgs={ProjectImgs}/>
      {/* <Resume/> */}
      <Contact/>
      <Footer/>
      </div>
      // <Navigation/>
      // <Layout>
      //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      //   <h1>Hi people</h1>
      //   <p>Welcome to your new Gatsby site.</p>
      //   <p>Now go build something great.</p>
      //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      //     <Image />
      //   </div>
      //   <Link to="/page-2/">Go to page 2</Link>
      // </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata{
        title
        description
      }
    }
    ProjectImgs: allFile(sort: {order: ASC, fields: absolutePath}, filter: {relativePath: {regex: "/projects/.*.png/"}}) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(quality: 100) {
                aspectRatio
                sizes
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
      }
  }

`
