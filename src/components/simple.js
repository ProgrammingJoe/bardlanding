import styled from "styled-components"

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap ? gap : '12px'};
  align-items: center;
`

export const FlexRowSpace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ? gap : '12px'};
  align-items: left;
`

export const Section = styled.div`
  padding: 5rem 0;

  @media (max-width: 800px) {
    padding: 3rem 0;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-transform: uppercase;
  align-items: flex-start;

  span {
    background-color: ${({ theme }) => theme.colors.tag};
    padding: 2px 8px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.invertText};
    font-size: 12px;
    font-weight: 600;
  }
`

export const TextIndent = styled.div`
  position: relative;
  padding: 0 24px;

  @media (max-width: 1000px) {
    padding: 0 12px;
  }
`
