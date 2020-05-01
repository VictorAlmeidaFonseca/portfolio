import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Menu = () => {
  return(
    <nav className="header__menu">
      <ul className="header__menu__list">
        <li className="list__iten"><Link to="/"> About Me </Link></li>
        <li className="list__iten"><Link to="/skills"> Skills </Link></li>
        <li className="list__iten"><Link to="/projects"> Projects </Link></li>
      </ul>
    </nav>
  )
}

export default Menu;