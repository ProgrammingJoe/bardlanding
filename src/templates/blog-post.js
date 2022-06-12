import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SectionHeader, SubText } from "../components/typography"
import { PortableText } from '@portabletext/react'
import styled from "styled-components"
import { graphql } from "gatsby"
import { Tags, FlexRowSpace } from "../components/simple"
import { Link } from "gatsby"

const BlogImage = styled.div`
  margin: auto;
  max-width: 500px;

  img {
    width: 100%;
    max-width: 500px;
    max-height: 400px;
  }

  p.image-caption {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.subtext};
  }
`

const BlogWrapper = styled.div`
  p {
    margin-bottom: 36px;
    font-size: 1rem;
    line-height: 1.4rem;
  }
`

const BlogContainer = styled.div`
  max-width: 800px;
  margin: auto;
  margin-bottom: 80px;
`


const BlogPage = ({ pageContext, data }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(data?.allSanityImageAsset?.edges)
  }, [data])

  const node = pageContext.node
  const components = {
    types: {
      blogImage: ({ value }) => {
        const imageId = value?.asset?._ref
        const image = images.find((i) => i.node.id === imageId)

        if (image) {
          return <BlogImage>
            <img src={image.node.url} alt={value.alt}/>
            <p className="image-caption">{value.alt}</p>
          </BlogImage>
        } else {
          return <span/>
        }
      }
    }
  }

  return (
    <Layout>
      <Seo
        title={`Bard | ${node.title}`}
        description={node.preview}
      />

      <BlogContainer>
        <SectionHeader>{ node.title }</SectionHeader>
        <SubText margin="0 0 12px 0">{ node.publishedAt }</SubText>

        <BlogWrapper>
          <PortableText
            value={node._rawBody}
            components={components}
          />
        </BlogWrapper>

        <FlexRowSpace>
          <Tags>
            {node.categories.map((category) => <span>{category.title}</span>)}
          </Tags>
          <Link to="/blog">Read another</Link>
        </FlexRowSpace>
      </BlogContainer>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    allSanityImageAsset(filter: {}) {
      edges {
        node {
          id
          url
        }
      }
    }
  }
`