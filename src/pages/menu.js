import * as React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  text-align: center;

  a {
    border-bottom: 1px solid #666936;
    padding: 12px 0;
  }
`

const MenuPage = () => (
  <Layout>
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/support">Support</Link>
    </Wrapper>
  </Layout>
)

export default MenuPage
