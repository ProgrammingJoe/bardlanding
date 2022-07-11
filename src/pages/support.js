import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { ItemHeader, Text, SectionHeader, SubText } from "../components/typography"
import { Link } from "gatsby"
import PageHeader from "../components/page-header"
import { Section } from "../components/simple"
 
const FAQ = styled.div`
  padding: 24px 0;
`

const FeaturedArticle = styled(Link)`
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 6px;

  img {
    max-width: 100%;
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

const BlogPage = ({ data }) => {
  const faqs = data?.allSanityFaq?.edges
  const featuredArticles = data?.allSanityArticle?.edges

  return (
    <Layout>
      <Seo title="Support" />

      <PageHeader header="Support" subHeader="Everyone needs a little support on whatever journey they take"/>

      {/* <Section>
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
      </Section> */}

      <Section>
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
              {faq.link && <SubText margin="12px 0 0 0"><Link to={`/${faq.link}`}>{faq.linkTitle}</Link></SubText>}
            </FAQ>
          ))}
        </FAQS>
      </Section>
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
  }
`