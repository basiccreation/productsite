import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function productss({ data }) {
    console.log(data)
    return (
        <Layout>
            <Link to="/">
                <h3>... back to index</h3>
            </Link>

            <h1>Our Products</h1>
            {data.products.edges.map(({ node: product }) => {
                return (
                    <div
                        key={product.id}
                        style={{ padding: "1rem", margin: "1rem 0" }}
                    >
                        <Img fixed={product.productimage.fixed} />
                        <h3 style={{ marginBottom: "0.5rem" }}>
                            {product.title}{" "}
                            <span style={{ color: "grey", marginLeft: "2rem" }}>
                                {product.price}
                            </span>
                        </h3>
                        <p>{product.description.description}</p>
                        <Link to="/">Details</Link>
                    </div>
                )
            })}
        </Layout>
    )
}

export const query = graphql`
    {
        products: allContentfulProduct {
            edges {
                node {
                    id
                    title
                    description {
                        description
                    }
                    price
                    productimage {
                        fixed(width: 300) {
                            ...GatsbyContentfulFixed_tracedSVG
                        }
                    }
                }
            }
        }
    }
`
