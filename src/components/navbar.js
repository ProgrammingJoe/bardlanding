import React from 'react'
import styled from 'styled-components';
import { Link } from "gatsby"
import { useAuth0 } from '@auth0/auth0-react';
import PrimaryButton from "./buttons/primary-button";
import { Menu } from 'react-feather';
import { useLocation } from '@reach/router';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
  align-items: center;

  img {
    height: 3rem;
  }

  a {
    font-size: 22px;
  }

  .mobile-menu {
    display: none;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 600px) {
    .mobile-menu {
      display: block;
    }
  }
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Navbar = () => {
  const location = useLocation()

  if (location?.pathname === '/menu') return <div/>

  return (<Wrapper>
    <Link to="/">
      <img src="https://bard-social.s3.us-west-2.amazonaws.com/company/Royal-Orange-Logo.png" alt="Bard Logo"/>
    </Link>
    
    <Options>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/support">Support</Link>
      <a
        href="https://app.bard.social/"
        target="_blank"
        rel="noopener noreferrer">
          App
      </a>
    </Options>

    <Link to="/menu" className="mobile-menu"><Menu/></Link>
  </Wrapper>)
}

export default Navbar;