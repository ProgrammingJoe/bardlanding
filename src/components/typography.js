import styled from 'styled-components'

export const Header = styled.h1`
  font-size: 102px;
  margin-bottom: 3rem;
  font-family: "Hanesy";
  font-weight: 600;
  letter-spacing: 1.5px;

  @media (max-width: 1000px) {
    font-size: 90px;
  }

  @media (max-width: 800px) {
    font-size: 60px;
  }
`

export const PageSubHeader = styled.h2`
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtext};

  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 40px;
  }
`

export const SectionHeader = styled.h3`
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 40px;
  font-weight: 500;

  @media (max-width: 1000px) {
    font-size: 36px;
    line-height: 52px;
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }

`

export const ItemHeader = styled.h4`
  font-size: 28px;
  margin-bottom: 4px;
  font-family: "Hanesy";
  letter-spacing: 1.2px;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`

export const ItemSubHeader = styled.h5`
  font-size: 24px;
  margin: ${({ margin }) => margin ? margin : "0px"};

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`

// Headers ^, Text v

export const ListItem = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`

export const Text = styled.p`
  font-size: 28px;
  line-height: 40px;

  @media (max-width: 1000px) {
    font-size: 22px;
    line-height: 30px;
  }
`

export const SectionText = styled.h4`
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  font-weight: 500;

  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 40px;
  }
`

export const SubText = styled.p`
  font-size: 20px;
  margin: ${({ margin }) => margin ? margin : '0px'};

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`
