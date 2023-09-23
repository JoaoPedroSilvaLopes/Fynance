import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import * as S from './nav-bar.styles';

export const NavBar: React.FC = () => {
  return (
    <S.NavBarWrapper>
      {/* <S.ContainerrWrapper>
        <S.NavBarBrandWrapper href="/">React-Bootstrap</S.NavBarBrandWrapper>
        <Navbar.Collapse id="basic-navbar-nav">
          <div>Home Page</div>
        </Navbar.Collapse>
      </S.ContainerrWrapper> */}
    </S.NavBarWrapper>
  );
};

export default NavBar;
