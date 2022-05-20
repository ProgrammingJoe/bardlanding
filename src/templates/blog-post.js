import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SectionHeader } from "../components/typography"

const BlogPage = ({ pageContext }) => {
  const node = pageContext.node

  return (
    <Layout>
      <Seo title="Blog" />

      <SectionHeader>{ node.title }</SectionHeader>
    </Layout>
  )
}

export default BlogPage
