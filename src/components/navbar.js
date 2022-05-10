import React from 'react'
import styled from 'styled-components';
import { SectionHeader, Text } from './typography';
import { Link } from "gatsby"
import { useAuth0 } from '@auth0/auth0-react';
import PrimaryButton from "./buttons/primary-button";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (<Wrapper>
    <Link to="/">logo</Link>

    <Options>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/creators">Creators</Link>
      <Link to="/support">Support</Link>
      {isAuthenticated ? <p>Hi Joe</p> : <PrimaryButton onClick={() => loginWithRedirect()}>login</PrimaryButton>}
    </Options>
  </Wrapper>)
}

export default Navbar;