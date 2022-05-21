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

  a:first-of-type {
    font-family: "Pentacle";
    font-size: 120px;
  }
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (<Wrapper>
    <Link to="/">Bard</Link>

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
      <Text>Coming Summer 2022</Text>
    )
    }
  </Wrapper>)
}

export default Navbar;