import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Contact from "../components/contact";
import LandingPage from "../components/landingpage";
import Projects from "../components/projects";
import AboutMe from "../components/aboutme";
import Resume from "../components/resume";
const IndexPage = ({data}) => (
  <div>
  <Navigation/>
  <LandingPage/>
  <AboutMe/>
  <Projects/>
  <Resume/>
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

export default IndexPage
