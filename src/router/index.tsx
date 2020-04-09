import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../screens/about';
import Home from '../screens/home';
import NotFound from '../screens/not-found';

const AppRouter: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
