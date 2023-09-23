import { NavBar } from './nav-bar';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled, { css } from 'styled-components';

export const NavBarWrapper = styled.div`
  ${({ theme }) => css`
    height: 5rem;
    background-color: ${theme.colors.primary};
  `}
`;

export const NavBarBrandWrapper = styled(Navbar.Brand)`
  /* ${({ theme }) => css`
    color: ${theme.colors.background}
  `} */
`;

export const ContainerrWrapper = styled(Container)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;
