import React from 'react'
import styled from 'styled-components';
import { SectionHeader, Text } from './typography';

const Wrapper = styled.div``

const StoryPart = ({ story }) => (
  <Wrapper>
    { story.title && <SectionHeader>{story.title}</SectionHeader>}
    <Text>{ story.description }</Text>
  </Wrapper>
)

export default StoryPart;