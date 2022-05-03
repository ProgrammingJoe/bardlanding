import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import theme from '../themes/brand'

import "./layout.css"


const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text} !important;
    background: ${({ theme }) => theme.gradient};
    min-height: 100vh;
  }

  input {
    all: unset;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <GlobalStyle theme={theme} />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
