import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function() {
    return (
        <Layout>
            <h1>Single Product Template</h1>
            <Link to="/productss/">
                <h3>back to products</h3>
            </Link>
        </Layout>
    )
}
