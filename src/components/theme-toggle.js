import React, { useEffect } from 'react'
import Moon from '../images/svgs/moon'
import MoonSolid from '../images/svgs/moon-solid'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  svg {
    width: 30px;
    height: 30px;
    padding: 6px;
    border-radius: 15px;
  }
`

const ThemeToggle = ({ setTheme, currentTheme }) => {
  const isDarkMode = currentTheme === 'dark'

  return (
    <Wrapper>
      <button onClick={setTheme}>
        {isDarkMode ? <MoonSolid/> : <Moon/>}
      </button>
    </Wrapper>
  )
}

export default ThemeToggle