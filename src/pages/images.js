import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function images({ data },index) {
    const images = data.allFile.edges
    return (
        <Layout>

        <Link to="/">Go to index page</Link>

        <h1> H3770 FR0M 1M4G3S P4G3</h1>
            {images.map(({node}, index) => {
                return <h6 key={index}>{node.relativePath}</h6>
            })}
        </Layout>
    )
}

export const query = graphql`
    {
        allFile {
            edges {
                node {
                    relativePath
                }
            }
        }
    }
`
