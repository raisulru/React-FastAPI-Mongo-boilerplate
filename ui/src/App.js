import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import { useAlert } from 'react-alert';
import './App.css';
import { Header, Footer, DisconnectAds } from './container/common';
import keycloak from './utils/keycloak';
import { saveAuthUser } from './store/auth';
import { getFacebookUser } from './store/facebookResource';
import { AlertTemplate } from './utils/allertMessages';
import InvalidPage from './utils/invalidPage';
import routes from './router'

function AppRouter() {
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

  console.log(routes);
  return (
    authenticated ? 
    <>
        <Router className='App'>
          <Header/>
          <Switch>
            <Route exact path="/ads">
              {facebook.connected ? <Redirect to="/ads/dashboard" />:<Redirect to="/ads/onboarding" />}
            </Route>

            {
              routes.map((route, index) => 
                <Route key={index} exact={route.exact} path={route.path} component={route.component} />
                )
            }
            <Route exact={true} path={"/ads/disconnect-ad-account"} component={DisconnectAds} />
            <Route component={InvalidPage} />
          </Switch>
          <Footer/>
        </Router>
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
