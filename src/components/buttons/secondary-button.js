import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

const SecondaryButton = styled.button`
  color: ${({ theme }) => theme.colors.buttons.secondary.color};
  background-color: ${({ theme }) => theme.colors.buttons.secondary.background};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.buttons.secondary.background};
  padding: ${({ round }) => (round ? '0.6rem' : '0.6rem 1.2rem')};
  line-height: 20px;
  border-radius: ${({ round }) => (round ? '50px' : '4px')};
  height: ${({ round }) => (round ? '38px' : 'auto')};
  width: ${({ round }) => (round ? '38px' : 'auto')};
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.buttons.secondary.icon};
    margin-right: ${({ round }) => (round ? '0px' : '0.7rem')};
    height: 16px;
    width: 16px;
    vertical-align: ${({ round }) => (round ? 'sub' : 'bottom')};
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.buttons.secondary.background}};
  }

  &:focus,
  &:active {
    border: solid 1px ${({ theme }) =>
      theme.colors.buttons.secondary.background}};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttons.secondary.disabled};
    border: solid 1px ${({ theme }) => theme.colors.buttons.secondary.disabled};
    color: ${({ theme }) => theme.colors.buttons.secondary.color};
  }
`;

export const SecondaryDropdown = styled(Dropdown)`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.buttons.secondary.color};
  background-color: ${({ theme }) => theme.colors.buttons.secondary.background};
  border: 1px solid ${({ theme }) => theme.colors.buttons.secondary.background};
  padding: 0.6rem 1.2rem;
  line-height: 20px;
  display: flex;
  align-items: center;

  i.icon {
    color: ${({ theme }) => theme.colors.buttons.secondary.icon};
    height: 20px;
    margin-right: 0px;
    margin-left: 0.4rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.buttons.secondary.icon};
    margin-right: 0.7rem;
    height: 16px;
    width: 16px;
    vertical-align: bottom;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.buttons.secondary.background}};
  }

  &:focus,
  &:active {
    border: solid 1px ${({ theme }) =>
      theme.colors.buttons.secondary.background}};
  }
`;

export default SecondaryButton;
