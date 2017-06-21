import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Login from './login/login';
import Home from './home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;