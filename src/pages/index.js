import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../components/Button"
import { FaApple } from "react-icons/fa"
import Section from "../components/section/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello You!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Section />
      <Image />
    </div>
    <FaApple className="icon" />
    <Button>I'm a button</Button>
    <ul>
      <li>
        {" "}
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li>
        <Link to="/page-3/">Go to page 3</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
