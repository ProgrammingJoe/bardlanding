import styled from 'styled-components'

export const Header = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`

export const PageSubHeader = styled.h2`
  font-size: 36px;
`

export const SectionHeader = styled.h3`
  font-size: 48px;
  margin-bottom: 40px;
`

export const ItemHeader = styled.h4`
  font-size: 28px;
  margin-bottom: 4px;
`

export const ItemSubHeader = styled.h5`
  font-size: 24px;
  margin: ${({ margin }) => margin ? margin : "0px"};
`

// Headers ^, Text v

export const ListItem = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const Text = styled.p`
  font-size: 24px;
  line-height: 28px;
`
