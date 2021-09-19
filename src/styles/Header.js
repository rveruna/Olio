import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #00a69c;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  max-height: 80px;
  cursor: pointer;
  &.active {
    color: #bb4291;
  }
`;

export const NavLogo = styled.img`
  height: 80px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
