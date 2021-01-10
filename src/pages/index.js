import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Succesful from './successful'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Link to="/page-2/">Go to page 2</Link><br/>
    <Link to="/successful">Go to gracias</Link>
  </Layout>
)

export default IndexPage
