import React from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const getImg = graphql`
{
  file(relativePath: { eq: "road.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default function dude() {
    return ( 
        <StaticQuery 
        query={getImg} 
        render ={data => {
            console.log(data)
            return <Img fluid = { data.file.childImageSharp.fluid } />
        }}
        />        
    )
}