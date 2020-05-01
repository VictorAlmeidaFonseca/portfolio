import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const activeStyle= {
  fontWeight: "bold",
  color: "red"
}

const Menu = () => {
  return(
    <nav className="header__menu">
      <ul className="header__menu__list">
        <li className="list__iten"><NavLink to="/" activeStyle={activeStyle}> About Me </NavLink></li>
        <li className="list__iten"><NavLink to="/skills" activeStyle={activeStyle}> Skills </NavLink></li>
        <li className="list__iten"><NavLink to="/projects" activeStyle={activeStyle}> Projects </NavLink></li>
      </ul>
    </nav>
  )
}

export default Menu;