import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { ItemHeader, Text, SectionHeader } from "../components/typography"
import { Link } from "gatsby"
import PageHeader from "../components/page-header"
 
const FAQ = styled.div`
  padding: 24px 0;
`

const FeaturedArticle = styled(Link)`
  padding: 18px;

  img {
    max-width: 300px;
  }
`

const FAQS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Articles = styled.div`
  display: flex;
  gap: 12px;
`

const Releases = styled.div`
  display: flex;
  gap: 12px;
`

const Release = styled.div`

`

const BlogPage = ({ data }) => {
  const faqs = data?.allSanityFaq?.edges
  const featuredArticles = data?.allSanityArticle?.edges
  const releases = data?.allSanityPost?.edges
  console.log(releases)

  return (
    <Layout>
      <Seo title="Support" />

      <PageHeader header="Support" subHeader="Everyone needs a little support on whatever journey they take"/>

      <SectionHeader>
        Check out some of our guides so that you can get started on your first quest!
      </SectionHeader>

      <Articles>
        {featuredArticles.sort(
          (a, b) => a.order - b.order
        ).map(({ node: article }) => (
          <FeaturedArticle to={article.embed}>
            <img src={article.image}/>
            <ItemHeader>{article.title}</ItemHeader>
            <Text>{article.description}</Text>
          </FeaturedArticle>
        ))}
      </Articles>

      <SectionHeader>
        We've released some new tools for your next adventure
      </SectionHeader>

      <Releases>
        {releases.map(({ node: release }) => (
          <Release>
            <ItemHeader>{ release.title }</ItemHeader>
            <Text>{ release.body[0].children[0].text }</Text>
            <Text>{ release.publishedAt }</Text>
          </Release>
        ))}
      </Releases>

      <SectionHeader>
        We get these questions a lot. Perhaps they will help you
        so you can continue on with your tales of adventure.
      </SectionHeader>

      <FAQS>
        {faqs.sort(
          (a, b) => a.order - b.order
        ).map(({ node: faq }) => (
          <FAQ>
            <ItemHeader>{faq.question}</ItemHeader>
            <Text>{faq.answer}</Text>
            {faq.link && <Link to={faq.link}>{faq.linkTitle}</Link>}
          </FAQ>
        ))}
      </FAQS>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    allSanityFaq {
      edges {
        node {
          id
          order
          linkTitle
          link
          question
          answer
        }
      }
    }
    allSanityArticle(filter: {featured: {eq: true}}) {
      edges {
        node {
          order
          embed
          description
          title
          image
          featured
        }
      }
    }
    allSanityPost(filter: {categories: {elemMatch: {title: {eq: "Release"}}}}) {
      edges {
        node {
          title
          publishedAt
          body {
            style
            list
            children {
              marks
              text
            }
          }
        }
      }
    }
  }
`