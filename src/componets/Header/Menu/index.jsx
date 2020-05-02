import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const activeStyle= {
  fontWeight: "bold",
  color: "#BC4361"
}

const Menu = () => {
  return(
    <nav className="header__menu">
      <ul className="header__menu__list">
        <li className="list__iten"><NavLink extac to="/about" activeStyle={activeStyle}> About Me </NavLink></li>
        <li className="list__iten"><NavLink exatc to="/skills" activeStyle={activeStyle}> Skills </NavLink></li>
        <li className="list__iten"><NavLink exatc to="/projects" activeStyle={activeStyle}> Projects </NavLink></li>
        <li className="list__iten"><NavLink exatc to="/resume" activeStyle={activeStyle}> Resume </NavLink></li>
      </ul>
    </nav>
  )
}

export default Menu;