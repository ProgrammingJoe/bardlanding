import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ListItem, Text } from "./typography"
import { useLocation } from "@reach/router"

const Wrapper = styled.div`
  padding: 42px 20px 60px 20px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-top: ${({ theme }) => `1px solid ${theme.colors.card.border}`};
  margin-top: 40px;
`

const Content = styled.div`
  max-width: 1020px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;

  img {
    width: 120px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 18px;
  }

  @media (max-width: 650px) {
    > div:first-of-type {
      display: none;
    }
  }
`

const Section = styled.p`
  margin-bottom: 12px;
  font-weight: 500;
`

const Footer = () => {
  const location = useLocation()

  if (location?.pathname === "/menu") return <div />

  return (
    <Wrapper>
      <Content>
        <div>
          <img
            src="https://bard-social.s3.us-west-2.amazonaws.com/company/Royal-Orange-Logo.png"
            alt="Bard logo"
          />
        </div>
        <div>
          <Section>Product</Section>
          <Link to="/support">Support</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div>
          <Section>Company</Section>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Section>Contact</Section>
          <a
            href="https://bsky.app/profile/joeatbard.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bsky
          </a>
          <a
            href="https://www.youtube.com/@joeatbard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <a
            href="mailto:hello@bard.art"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
        <div>
          <Section>Legal</Section>
          <a
            href="https://www.termsfeed.com/live/a4effae6-987a-4143-b04e-8861ac051e56"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions
          </a>
          <a
            href="https://www.termsfeed.com/live/5a2c488d-4fd6-477a-8110-85aa653b9f49"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </Content>
    </Wrapper>
  )
}

export default Footer
