import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import { useAlert } from 'react-alert';

import './App.css';
import { CommonRouter, FacebookRouter } from './router';
import { Header, Footer } from './container/common';
import keycloak from './utils/keycloak';
import { saveAuthUser } from './store/auth';
import { getFacebookUser } from './store/facebookResource';
import { AlertTemplate } from './utils/allertMessages';


function AppRouter(props) {

  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false)
  const alert = useAlert()
  const { authInfo, facebook } = useSelector((state) => state)

  useEffect(() => {
    keycloak.init({
      onLoad: 'login-required',
      promiseType: 'native'
    }).then(function(authenticated) {
      if(authenticated) {
        setAuthenticated(true)
        console.log('authenticated')
      } else {
        console.log('Not Authenticated')
      }
        dispatch(saveAuthUser(keycloak));
      }).catch(function() {
        alert.error('failed to initialize');
      });
      dispatch(getFacebookUser(authInfo.userInfo.preferred_username))
  }, [dispatch]);

  return (
    authenticated ? 
    <>
        <Router className='App'>
          <Header userInfo={authInfo.userInfo}/>
          <Route exact path="/">
            {facebook.connected ? <Redirect to="/ads/dashboard" />:<Redirect to="/ads/onboarding" />}
          </Route>
          <Route path='/ads' component={CommonRouter} />
          <Route path='/ads/facebook' component={FacebookRouter} />
        </Router>
        <Footer/>
    </>
    : 
    <div className="spinner-border text-success spinner"></div>
  );
}


const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 15000,
  containerStyle: {
    display: 'block',
    textAlign: 'center'
  },
  transition: transitions.FADE,

}

export default function App() {

  return (
    <>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
          <AppRouter/>
      </AlertProvider>
    </>
  );
}
