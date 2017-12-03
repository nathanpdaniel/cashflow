import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Container from './containers/Container';
import App from './containers/App';
import Dashboard from '../src/containers/Dashboard';

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="" component={App}>
        <Route path="dashboard" component={Dashboard} />
        <IndexRedirect to="/dashboard" />
      </Route>
    </Route>
  )
}

export default makeMainRoutes;