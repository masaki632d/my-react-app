import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

import logoSketch from "../images/logo-sketch.png"
import logoFigma from "../images/logo-figma.png"
import logoStudio from "../images/logo-studio.png"
import logoFramer from "../images/logo-framer.png"
import logoReact from "../images/logo-react.png"
import logoSwift from "../images/logo-swift.png"

import wallpaper from "../images/wallpaper.jpg"
import wallpaper2 from "../images/wallpaper2.jpg"
import wallpaper3 from "../images/wallpaper3.jpg"
import wallpaper4 from "../images/wallpaper4.jpg"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br />
          design and code React apps
        </h1>
        <p>
          Complete cources about the best tools and design systems. Ptototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch the video</Link> <br />
        <div className="Logos">
          <img src={logoSketch} width="50" height="45" alt="画像" />
          <img src={logoFigma} width="50" height="50" alt="画像" />
          <img src={logoStudio} width="50" height="50" alt="画像" />
          <img src={logoFramer} width="50" height="51" alt="画像" />
          <img src={logoReact} width="50" height="45" alt="画像" />
          <img src={logoSwift} width="50" height="45" alt="画像" />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card title="Design System" text="10 sections" image={wallpaper} />
          <Card
            title="React for Designers"
            text="12 sections"
            image={wallpaper2}
          />
          <Card title="Sound Design" text="5 sections" image={wallpaper3} />
          <Card title="ARKit 2" text="10 sections" image={wallpaper4} />
        </div>
      </div>
      <Section
        image={wallpaper2}
        logo={logoReact}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage
