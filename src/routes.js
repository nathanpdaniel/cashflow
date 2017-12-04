import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Container from './containers/Container';
import App from './containers/App';
import Dashboard from '../src/containers/Dashboard';
import Suppliers from '../src/containers/Suppliers/List';
import Supplier from '../src/containers/Suppliers';
import Customers from '../src/containers/Customers/List';
import Customer from '../src/containers/Customers';
import Pay from '../src/containers/Customers/Pay';

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="" component={App}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="supplier" component={Supplier} />
        <Route path="suppliers" component={Suppliers} />
        <Route path="customers" component={Customers} />
        <Route path="customer" component={Customer} />
        <Route path="customer/pay" component={Pay} />
        <IndexRedirect to="/dashboard" />
      </Route>
    </Route>
  )
}

export default makeMainRoutes;