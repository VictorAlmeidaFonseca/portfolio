import React from 'react';
import Menu from './Menu';
import Toogle from './Toogle'
import Description from './Description';

const NavBarMain = () => {
  return(
    <div className="header__topbar">
      <div className="header__topbar__nav">
        <Menu />
        <Toogle />
      </div>
      <div className="header__topbar__content">
       <Description />
      </div>
    </div>
   )
}

export default NavBarMain;
