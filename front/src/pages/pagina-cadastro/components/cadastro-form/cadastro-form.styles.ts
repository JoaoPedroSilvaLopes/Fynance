import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterMessage = styled.div`
  color: ${(props) => props.theme.colors.primaryDark};
  font-size: 1rem;
  vertical-align: middle;
`;
