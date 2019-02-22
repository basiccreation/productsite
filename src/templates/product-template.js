import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function({ data }) {
    const { title, price } = data.contentfulProduct
    const { description } = data.contentfulProduct.description
    const { fluid } = data.contentfulProduct.productimage

    return (
        <Layout>
            <h1>Single Product Template</h1>
            <Img fluid={fluid} />
            <h1>
                {title}{" "}
                <span style={{ marginLeft: "2rem", color: "grey" }}>
                    $ {price}
                </span>
            </h1>
            <p>{description}</p>
            <Link to="/productss/">
                <h3>back to products</h3>
            </Link>
        </Layout>
    )
}

export const query = graphql`
    query($id: String!) {
        contentfulProduct(id: { eq: $id }) {
            id
            title
            price
            description {
                description
            }
            productimage {
                fluid {
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
        }
    }
`
