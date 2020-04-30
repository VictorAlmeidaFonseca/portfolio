import React from 'react';
import Routes from './routers'
import Header from './componets/Header'
import Description from './componets/Description'

const App = () => {
  return (
    <div className="main">
    <Header />
    <Description 
      name="Victor Fonseca"
      job="Software Developer" />
    <Routes />
    </div>
    
  );
}

export default App;
