import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { CommonRouter, FacebookRouter } from './router'
import { Header, Footer } from './container/common'
import keycloak from './utils/keycloak'
import { saveAuthUser } from './store/auth'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    keycloak.init({
      onLoad: 'login-required',
      promiseType: 'native'
    }).then(function(authenticated) {
        console.log(authenticated ? 'authenticated' : 'not authenticated');
        dispatch(saveAuthUser(keycloak));
    }).catch(function() {
        console.log('failed to initialize');
    });

  }, [dispatch]);

  const { userInfo } = useSelector((state) => state.authInfo);
 
  return (
    <>
        <Router className='App'>
          <Header userInfo={userInfo}/>
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

export default App
