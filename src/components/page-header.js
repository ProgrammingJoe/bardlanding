import React from 'react'
import styled from 'styled-components';
import { Header, PageSubHeader } from './typography';

const Wrapper = styled.div`
  padding: 60px 24px 80px 24px;
`

const PageHeader = ({ header, subHeader }) => (
  <Wrapper>
    <Header>{ header }</Header>
    <PageSubHeader>{ subHeader }</PageSubHeader>
  </Wrapper>
)

export default PageHeader;