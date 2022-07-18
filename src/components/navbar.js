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
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (location?.pathname === '/menu') return <div/>

  return (<Wrapper>
    <Link to="/">
      <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-ydavamrkycn/Royal-Orange-Logo.png" alt="Bard Logo"/>
    </Link>

    <Options>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/support">Support</Link>
      {isAuthenticated ? <a href="https://app.bard.social/">Login</a> : <PrimaryButton onClick={() => loginWithRedirect()}>Login</PrimaryButton>}
    </Options>

    <Link to="/menu" className="mobile-menu"><Menu/></Link>
  </Wrapper>)
}

export default Navbar;