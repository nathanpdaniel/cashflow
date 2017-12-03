import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Container from './containers/Container';
import App from './containers/App';
import Dashboard from '../src/containers/Dashboard';
import dashboardForm from '../src/containers/Dashboard/dashboardForm';

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="" component={App}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="dashboard/dashboardForm" component={dashboardForm} />
        <IndexRedirect to="/dashboard" />
      </Route>
    </Route>
  )
}

export default makeMainRoutes;