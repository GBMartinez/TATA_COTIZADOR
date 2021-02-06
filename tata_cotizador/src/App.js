import './App.css';
import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Router basename={'/'} history={createBrowserHistory} >
            <Route render={({ location }) => (
              <div>
                <Route exact path={'/'} render={() => <Redirect to={'/login'} />}></Route>
              <Route exact path='/login' component={ Login } />

              </div>
            )} />

        
      </Router>
    );
  }
}

export default App;
