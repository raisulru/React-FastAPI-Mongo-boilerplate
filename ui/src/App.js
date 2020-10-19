import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { CommonRouter, FacebookRouter } from './router'
import { Header, Footer } from './container/common'
import keycloak from './utils/keycloak'


function App() {

  keycloak.init({
    onLoad: 'login-required',
    promiseType: 'native'
  }).then(function(authenticated) {
      console.log(authenticated ? 'authenticated' : 'not authenticated');
  }).catch(function() {
      console.log('failed to initialize');
  });

  return (
    <>
      <Header/>
        <Router className='App'>
          <Route exact path="/">
            <Redirect to="/ads/onboarding" />
          </Route>
          <Route path='/ads' component={CommonRouter} />
          <Route path='/ads/facebook' component={FacebookRouter} />
        </Router>
      <Footer/>
    </>
  );
}

export default App;
