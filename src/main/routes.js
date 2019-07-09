import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/home'
import Search from '../pages/search'

export default () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>