import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import { ItemHeader, Text } from "../components/typography"
import PageHeader from "../components/page-header"
import { graphql } from "gatsby"
import { Tags } from "../components/simple"

const Blogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Blog = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 18px 0;
`

const BlogPage = ({ data }) => {
  const blogs = data?.allSanityPost?.edges

  return (
    <Layout>
      <Seo title="Blogs" />

      <PageHeader
        header="Blogs"
        subHeader="
          When we aren't creating stories with all of you, we also write 
          about the industry, what we care about, our releases, and many other things
        "
      />

      <Blogs>
        {blogs.sort(
          (a, b) => a.order - b.order
        ).map(({ node: blog }) => (
          <Blog>
            <ItemHeader>{blog.title}</ItemHeader>
            <Text>{blog.preview}</Text>
            <Tags>
              {blog.categories.map((category) => <span>{category.title}</span>)}
            </Tags>
            <Link to={`/blog/${blog.slug.current}`}>Read more</Link>
          </Blog>
        ))}
      </Blogs>

    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    allSanityPost {
      edges {
        node {
          title
          publishedAt
          preview
          slug {
            current
          }
          body {
            children {
              marks
              text
            }
          }
          categories {
            title
          }
          mainImage {
            asset {
              publicUrl
            }
          }
        }
      }
    }
  }
`
