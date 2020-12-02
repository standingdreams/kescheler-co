import * as React from "react"
import { withUnpublishedPreview } from "gatsby-source-prismic"

import BlogPosts from "../templates/BlogPosts"
import Home from "./index"

import Layout from "../components/layout"
// import { Layout } from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    blogpost: BlogPosts,
    home: Home,
  },
})
