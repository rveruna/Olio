import React from 'react';
import { Nav, NavLink, NavLogo, NavMenu } from '../styles/Header';
import { Switch } from 'react-router-dom';

const Header = () => {
  return (
    <Nav>
      <NavLink to='/'>
        <NavLogo
          src='https://olioex.com/wp-content/uploads/2019/08/logo_olio_white.png'
          alt='logo'
        />
      </NavLink>
      <Switch>
        <NavMenu>
          <NavLink activeStyle to='/' exact>
            Home
          </NavLink>
        </NavMenu>
      </Switch>
    </Nav>
  );
};

export default Header;
