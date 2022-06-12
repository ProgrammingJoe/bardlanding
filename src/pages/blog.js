import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import { ItemHeader } from "../components/typography"
import PageHeader from "../components/page-header"
import { graphql } from "gatsby"
import { Tags, TextIndent } from "../components/simple"

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

  p {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`

const BlogPage = ({ data }) => {
  const blogs = data?.allSanityPost?.edges

  return (
    <Layout>
      <Seo
        title="Bard | Blog"
        description="
          Read about our announcements, our thoughts on topics in the creative industries, and our releases
        "
      />

      <PageHeader
        header="Blog"
        subHeader="
          When we aren't creating stories with all of you, we also write 
          about the industry, what we care about, our releases, and many other things
        "
      />

      <TextIndent>
        <Blogs>
          {blogs.sort(
            (a, b) => a.order - b.order
          ).map(({ node: blog }) => (
            <Blog>
              <ItemHeader>{blog.title}</ItemHeader>
              <p>{blog.preview}</p>
              <Link to={`/blog/${blog.slug.current}`}>Read more</Link>
              <Tags>
                {blog.categories.map((category) => <span>{category.title}</span>)}
              </Tags>
            </Blog>
          ))}
        </Blogs>
      </TextIndent>
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
