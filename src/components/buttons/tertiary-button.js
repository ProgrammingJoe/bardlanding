import styled from 'styled-components';

const TertiaryButton = styled.button`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.buttons.tertiary.color};
  background-color: ${({ theme }) => theme.colors.buttons.tertiary.background};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.buttons.tertiary.background};
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;

  & svg {
    color: ${({ theme }) => theme.colors.buttons.tertiary.icon};
    margin-right: 0.7rem;
    height: 16px;
    width: 16px;
    vertical-align: bottom;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.buttons.tertiary.background}};
  }

  &:focus,
  &:active {
    border: solid 1px ${({ theme }) =>
      theme.colors.buttons.tertiary.background}};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttons.tertiary.disabled};
    border: solid 1px ${({ theme }) => theme.colors.buttons.tertiary.disabled};
    color: ${({ theme }) => theme.colors.buttons.tertiary.color};
  }
`;

export default TertiaryButton;
