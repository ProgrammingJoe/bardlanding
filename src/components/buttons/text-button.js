import styled from 'styled-components';

const TextButton = styled.button`
  color: ${({ theme }) => theme.colors.bodyText};
  font-weight: 500;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : 'auto')};
`;

export default TextButton;
