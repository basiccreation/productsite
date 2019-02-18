import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function images({ data }) {
    const images = data.allFile.edges
    return (
        <Layout>
        <h1> HELLO FROM IMAGES PAGE</h1>
            {images.map(({node}) => {
                return <h6>{node.relativePath}</h6>
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
