import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from '../src/containers/Dashboard/index';
import {Route, Switch} from 'react-router-dom';


class App extends Component {
    state = {

   }
  render() {
    return (
      <Router>
          <div>
            <Switch>
                <Route exact path="/" render={Dashboard}/>
            </Switch>  
          </div>  
      </Router>
    );
  }
}

export default App;
