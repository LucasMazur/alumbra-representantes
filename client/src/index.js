import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Representantes from './components/Representantes';
import CreateRepresentante from './components/Create-representante'
import Representante from './components/Representante'

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Representantes" component={Representantes} />
        <Route path="/Create-representante" component={CreateRepresentante} />
        <Route path="/Representante/:id" component={Representante} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);