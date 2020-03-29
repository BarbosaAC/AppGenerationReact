import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';

class App extends Component {
  
  render(){
    return <>
      <Router >
        <Switch>
          <Route path='/SignIn'>
          <SignIn /> 
          </Route>
          <Route path='/'>
          <LandingPage/>
          </Route>
        </Switch>
      </Router>
    </>
    }
  }
  
  export default App;

