import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import './App.css';
import { CommonRouter, FacebookRouter } from './router'
import { Header, Footer } from './container/common'
import keycloak from './utils/keycloak'
import { saveAuthUser } from './store/auth'
import {AlertTemplate} from './utils/allertMessages'
import { useAlert } from 'react-alert'


export function App() {

  const dispatch = useDispatch();
  const alert = useAlert()

  useEffect(() => {
    keycloak.init({
      onLoad: 'login-required',
      promiseType: 'native'
    }).then(function(authenticated) {
      if(authenticated) {
        console.log('authenticated')
      } else {
        console.log('Not Authenticated')
      }
        dispatch(saveAuthUser(keycloak));
    }).catch(function() {
        alert.error('failed to initialize');
    });

  }, [dispatch]);

  const { authInfo, facebook } = useSelector((state) => state);
  return (
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
  );
}


const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  containerStyle: {
    display: 'block',
    textAlign: 'center'
  },
  transition: transitions.FADE,

}

export function AppWithAlert() {

  return (
    <>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
          <App/>
      </AlertProvider>
    </>
  );
}
