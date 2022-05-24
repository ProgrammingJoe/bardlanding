import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import theme from '../themes/brand'
import Navbar from "./navbar";
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';
import Footer from "./footer";
import Hanesy from './../fonts/HanesyNL-Regular.otf';
import Pentacle from './../fonts/Pentacle-Gothic.otf';
import Avenir from './../fonts/AvenirLTProBook.otf';
import "./layout.css"


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Hanesy";
    src: url(${Hanesy}) format('opentype');
  }

  @font-face {
    font-family: "Pentacle";
    src: url(${Pentacle}) format('opentype');
  }

  @font-face {
    font-family: "Avenir";
    src: url(${Avenir}) format('opentype');
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.body};

    picture img {
      margin-bottom: 0px;
    }

    p, h1, h2, h3, h4, h5, picture {
      margin: 0px;
      margin-bottom: 0px;
    }

    p, h2, h4, h5, input, button {
      font-family: "Avenir";
    }

    h1, h3 {
      font-family: "Hanesy";
    }

    a {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.highlight};
      text-decoration: none;

      p, h1, h2, h3, h4, h5 {
        color: ${({ theme }) => theme.colors.bodyText};
        font-weight: 500;
      }
    }
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`

const Layout = ({ children }) => {

  return (
    <Auth0Provider
      domain="dev-sep7172g.us.auth0.com"
      clientId="BW6LuRzhBMaWLWLOfsmPWs0ATBkeuuN2"
      redirectUri={"/"}
      audience="bard-api"
      scope=""
    >
      <ThemeProvider theme={theme}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1020,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <GlobalStyle/>
          <Navbar/>
          <main>{children}</main>
        </div>
        {!process.env.GATSBY_PRE_LAUNCH && <Footer/>}
      </ThemeProvider>
    </Auth0Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
