import React from 'react'
import styled from 'styled-components';
import { Text } from './typography';
import { Link } from "gatsby"
import { useAuth0 } from '@auth0/auth0-react';
import PrimaryButton from "./buttons/primary-button";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
  align-items: center;

  img {
    height: 4rem;
  }
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (<Wrapper>
    <Link to="/">
      <img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-ydavamrkycn/Royal-Orange-Logo.png" alt="Bard Logo"/>
    </Link>

    {!process.env.GATSBY_PRE_LAUNCH ? (
      <Options>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/creators">Creators</Link>
        <Link to="/support">Support</Link>
        {isAuthenticated ? <p>Hi Joe</p> : <PrimaryButton onClick={() => loginWithRedirect()}>login</PrimaryButton>}
      </Options>
    ) : (
      <Options>
        <Text>Coming Summer 2022</Text>
      </Options>
    )
    }
  </Wrapper>)
}

export default Navbar;