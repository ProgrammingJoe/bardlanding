import React from 'react'
import styled from 'styled-components';
import { SectionHeader, Text } from './typography';
import { Link } from "gatsby"
import { useAuth0 } from '@auth0/auth0-react';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Options = styled.div`
  display: flex;
  gap: 12px;
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
      {isAuthenticated ? <p>Hi Joe</p> : <button onClick={() => loginWithRedirect()}>login</button>}
    </Options>
  </Wrapper>)
}

export default Navbar;