import styled from 'styled-components'

export const Header = styled.h1`
  font-size: 102px;
  margin-bottom: 3rem;
  font-family: "Hanesy";
  font-weight: 600;
`

export const PageSubHeader = styled.h2`
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtext};
`

export const SectionHeader = styled.h3`
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
`

export const ItemHeader = styled.h4`
  font-size: 28px;
  margin-bottom: 4px;
  font-family: "Hanesy";
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
  font-size: 28px;
  line-height: 40px;
`

export const SectionText = styled.h4`
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  font-weight: 600;
`

export const SubText = styled.p`
  font-size: 20px;
`
