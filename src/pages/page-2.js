import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Hi from the second page</h1>
                </div>
                <div className="col-6">
                    <p>Welcome to page 2</p>
                    <ul>
                        {" "}
                        <li>
                            <Link to="/">Go back to the homepage</Link>
                        </li>
                        <li>
                            <Link to="/page-3/">Go to page 3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
)

export default SecondPage
