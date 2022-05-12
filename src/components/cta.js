import React from 'react';
import styled from "styled-components";
import { PageSubHeader, Text } from "./typography";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border: ${({ theme }) => `1px solid ${theme.colors.card.border}`};
  padding: 60px 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    max-width: 400px;
    margin: auto;
  }
`

const CTA = ({ header, subHeader }) => {

  return (
    <Wrapper>
      <PageSubHeader>{header}</PageSubHeader>
      <Text>{subHeader}</Text>
    </Wrapper>
  )
}

export default CTA;
