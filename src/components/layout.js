import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import darkTheme from '../themes/dark'
import lightTheme from '../themes/light'
import cozyTheme from '../themes/cozy'
import ThemeToggle from './theme-toggle'
import BackgroundParticles from './particles/background'
import "./layout.css"
import Stars from './particles/stars'
import Fire from './particles/fire'

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

const DARK_MODE = 'dark'
const LIGHT_MODE = 'light'
const COZY_MODE = 'cozy'

const themeMap = {
  [DARK_MODE]: darkTheme,
  [LIGHT_MODE]: lightTheme,
  [COZY_MODE]: cozyTheme
}

const Layout = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(DARK_MODE)
  const storedTheme = localStorage.getItem('Theme');
  const isThemeValid = storedTheme in themeMap
  const theme = isThemeValid ? themeMap[storedTheme] : 'dark'

  const setTheme = () => {
    const isDarkMode = currentTheme === 'dark'
    const nextValue = isDarkMode ? LIGHT_MODE : DARK_MODE

    localStorage.setItem('Theme', nextValue)
    setCurrentTheme(nextValue)
  }

  const isDarkMode = currentTheme === 'dark'
  const particles = isDarkMode ? Stars : Fire
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
        <ThemeToggle setTheme={setTheme} currentTheme={currentTheme}/>
        <BackgroundParticles particles={particles}/>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
