import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

export default function Header() {
  const data = useStaticQuery(graphql`
    query Header {
      file(relativePath: { eq: "hero.jpg" }) {
        id
        root
        relativePath
        childImageSharp {
          fluid(maxWidth: 2000) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  return (
    <section id="header">
      <Img
        alt="Roundhay Park Lake"
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
        }}
      />
      <div className="inner">
        <h1>Roundhay Park</h1>
        <p>
          One of the largest urban parks in the world!
          <br />
          Bonfires, food events and performances. It is a must do of places to
          visit.
        </p>
        <ul className="actions">
          <li>
            <a href="#intro" className="button scrolly">
              Discover
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
