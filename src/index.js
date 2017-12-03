import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import makeRoutes from './routes';
import Container from './containers/Container';
import reducers from './reducers';



const history = browserHistory;
const store = createStore(reducers, applyMiddleware(thunk));
const routes = makeRoutes();

render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
      <Container history={history} routes={routes} />
    </Router>
  </Provider>,
  document.getElementById('root')
);