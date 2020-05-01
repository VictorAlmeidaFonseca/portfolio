import React, { Fragment } from 'react';
import Header from '../../componets/Header'

const Home = () => {
  return(
   <Fragment>
   <Header />
   <div class="about-me">
    <div class="about-me__header">About Me</div>
      <div class="about-me__text">
        <p>I have been working with IT since 2014. I had my first step working with infrastructure,
           when I built up knowledge about <strong>Linux</strong> and network.  Since 2018, I have 
           been focusing my study and work on development handle with stack: <strong> JavaScript</strong>, 
           <strong> TypeScript</strong>, <strong>NodeJS</strong> and <strong> ReactJS.</strong></p>
        <p> I am convinced I want to keep being a good professional, then I need to strengthen focus 
            and willingness to learn more and more. Besides that, to keep myself humble and have in 
            mind I will never know everything at all, but if I work hard and do my best,
            I can accomplish whatever I want. </p>             
      </div>
    </div>
  
   </Fragment> 
  )
}
export default Home;
