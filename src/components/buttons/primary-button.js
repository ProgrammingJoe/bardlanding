import styled from 'styled-components';

const PrimaryButton = styled.button`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.buttons.primary.color};
  background-color: ${({ theme }) => theme.colors.buttons.primary.background};
  border: solid 1px ${({ theme }) => theme.colors.buttons.primary.background};
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  line-height: 20px;
  display: flex;
  align-items: center;

  & svg, i {
    color: ${({ theme }) => theme.colors.buttons.primary.icon};
    margin-right: 0.7rem;
    height: 16px;
    width: 16px;
    vertical-align: bottom;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.buttons.primary.background}};
  }

  &:focus,
  &:active {
    border: solid 1px ${({ theme }) =>
      theme.colors.buttons.primary.background}};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttons.primary.disabled};
    border: solid 1px ${({ theme }) => theme.colors.buttons.primary.disabled};
    color: ${({ theme }) => theme.colors.buttons.primary.color};
  }
`;

export default PrimaryButton;
