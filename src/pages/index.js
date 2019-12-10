import React from "react"
// import { Link } from "gatsby"
import Slider from "../components/slider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
  </Layout>
)

export default IndexPage
