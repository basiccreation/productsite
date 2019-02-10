import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
    <Layout>
        <SEO title="Page two" />
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Hi from the third page</h1>
                </div>
                <div className="col-6">
                    <p>Welcome to page 3</p>
                    <ul>
                        <li>
                            <Link to="/">Go back to the homepage</Link>
                        </li>
                        <li>
                            <Link to="/page-2/">Go to page 2</Link>
                        </li>
                        <li>
                            <Link to="products/product1/">
                                Go to product one page
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
)

export default ThirdPage
