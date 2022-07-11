import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import { ListItem, Text } from './typography';
import { useLocation } from '@reach/router';

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
  const location = useLocation();

  if (location?.pathname === '/menu') return <div/>

  return (
    <Wrapper>
      <Content>
        <div>
          <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-ydavamrkycn/Royal-Orange-Logo.png" alt="Bard logo"/>
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
          <a href="https://twitter.com/BardSocial" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.pinterest.ca/bardsocial/" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="https://www.youtube.com/channel/UCQTnMwtnL2HovKzywF7jqow" target="_blank" rel="noopener noreferrer">Youtube</a>
          <a href="https://discord.gg/v7EmGDw" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="mailto:hello@bard.social" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
        <div>
          <Section>Legal</Section>
          <Link to="https://www.iubenda.com/terms-and-conditions/98067353">Terms and Conditions</Link>
          <Link to="https://www.iubenda.com/privacy-policy/98067353">Privacy Policy</Link>
          <Link to="https://www.iubenda.com/privacy-policy/98067353/cookie-policy">Cookie Policy</Link>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
