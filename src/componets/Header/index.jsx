import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
    return(
        <header className="header">
             <div className="menu">
                 <ul className="menu_main">
                    <li className="iten"><Link to="/"> About Me </Link></li>
                    <li className="iten"><Link to="/skills"> Skills </Link></li>
                    <li className="iten"><Link to="/projects"> Projects </Link></li>
                 </ul>
             </div>
            
            <div className="tooglebox">
                <FiSun />
                 <div className="toogle">
                     <input type="checkbox" name="theme" id="switch"/>
                      <label htmlFor="switch">Toogle</label>
                </div>
                <FiMoon />
            </div>           
        </header>
    )
}

export default Header;