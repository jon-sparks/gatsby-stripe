import React, { useEffect } from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

require("dotenv").config()

const IndexPage = () => {

  useEffect(() => {
    console.log(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku {
              edges {
                node {
                  id
                  currency
                  price
                  attributes {
                    name
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <div>
            {skus.edges.map(({ node: sku }) => (
              <p key={sku.id}>{sku.attributes.name}</p>
            ))}
          </div>
        )}
      />

    </Layout>
  )
}

export default IndexPage
