import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Toogle = () => {
  return(
   <div className="header__tooglebox">
     <FiSun />
       <div className="tooglebox__toogle">
         <input type="checkbox" name="theme" id="switch"/>
         <label htmlFor="switch">Toogle</label>
       </div>
      <FiMoon />
   </div>
  )
}

export default Toogle; 
