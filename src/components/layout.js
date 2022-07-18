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
import Montserrat from './../fonts/Montserrat.ttf';
import "./layout.css"
import { useLocation } from '@reach/router';


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
    font-family: "Montserrat";
    src: url(${Montserrat}) format('truetype');
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.body};

    picture img {
      margin-bottom: 0px;
    }

    img {
      pointer-events: none;
      font-size: 0px;
      line-height: 0px;
      display: block;
      margin-bottom: 0px;
    }

    p, h1, h2, h3, h4, h5, picture {
      margin: 0px;
      margin-bottom: 0px;
    }

    p, h2, h4, h5, input, button, a {
      font-family: "Montserrat";
    }

    h1, h3 {
      font-family: "Hanesy";
    }

    a {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.highlight};
      text-decoration: none;

      p, h1, h2, h3, h4, h5 {
        color: ${({ theme }) => theme.colors.bodyText};
        font-weight: 400;
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
  const location = useLocation()

  return (
    <Auth0Provider
      domain="dev-sep7172g.us.auth0.com"
      clientId="BW6LuRzhBMaWLWLOfsmPWs0ATBkeuuN2"
      cacheLocation="localstorage"
      useRefreshTokens={true}
      redirectUri="https://app.bard.social/"
      audience="bard-api"
      scope="read:current_user|read:email|email"
    >
      <ThemeProvider theme={theme}>
        <div
          style={{
            margin: `0 auto 40px auto`,
            maxWidth: 1020,
            padding: location?.pathname === '/menu' ? '0' : `0 1.0875rem 1.45rem`,
          }}
        >
          <GlobalStyle/>
          <Navbar/>
          <main>{children}</main>
        </div>
        <Footer/>
      </ThemeProvider>
    </Auth0Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
