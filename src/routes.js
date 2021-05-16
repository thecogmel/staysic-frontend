import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import Schedule from './pages/Schedule';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/members" exact component={Members} />
    <Route path="/schedule" exact component={Schedule} />
  </Switch>
);

export default Routes;
