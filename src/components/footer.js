import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import { ListItem, Text } from './typography';

const Wrapper = styled.div`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-top: ${({ theme }) => `1px solid ${theme.colors.card.border}`};
  margin-top: 40px;
`

const Content = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  margin: auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`

const Section = styled.p`
  margin-bottom: 12px;
`

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          {/* <img/> */}
          <Text></Text>
        </div>
        <div>
          <Section>Product</Section>
          <Link to="/support">Support</Link>
          <Link to="/support">Releases</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/creators">Creators</Link>
        </div>
        <div>
          <Section>Company</Section>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Section>Contact</Section>
          <a href="" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="" target="_blank" rel="noopener noreferrer">Youtube</a>
          <a href="" target="_blank" rel="noopener noreferrer">Tiktok</a>
          <a href="mailto:" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
        <div>
          <Section>Legal</Section>
          <Link to="">Terms of Service</Link>
          <Link to="">Privacy</Link>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
