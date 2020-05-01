import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Toogle = () => {
  return(
   <div className="tooglebox">
     <FiSun />
       <div className="toogle">
         <input type="checkbox" name="theme" id="switch"/>
         <label htmlFor="switch">Toogle</label>
       </div>
      <FiMoon />
   </div>
  )
}

export default Toogle; 
