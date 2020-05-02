import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home  from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>                
        <Route  path='/about' component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </BrowserRouter>
  )
};