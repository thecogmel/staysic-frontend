import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/members" exact component={Members} />
  </Switch>
);

export default Routes;
