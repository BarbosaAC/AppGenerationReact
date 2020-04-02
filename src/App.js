import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/SignIn/SignIn';
import AboutUser from './components/SignIn/AboutUser'

class App extends Component {
  
  render(){
    return <>
      <Router>
        <Switch>
          <Route path='/SignIn'>
          <SignIn /> 
          </Route>
          <Route path='/AboutUser'>
          <AboutUser /> 
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

