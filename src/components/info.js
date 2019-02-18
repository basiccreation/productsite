import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default function info() {
    return (
        <StaticQuery
            query={graphql`
                {
                    site {
                        siteMetadata {
                            title
                            description
                            author
                        }
                    }
                }
            `}
            render={data => {
                console.log(data)
                const guitars = data.site.siteMetadata
                const { title, author, giraffe, description } = guitars
                return (
                    <div>
                        <h2>title: {title}</h2>
                        <h2>giraffe: {giraffe}</h2>
                        <p>description: {description}</p>
                        <h2>author: {author}</h2>
                    </div>
                )
            }}
        />
    )
}
