import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { CommonRouter, FacebookRouter } from './router'
import {Header, Footer} from './container/common'


function App() {
  return (
    <>
    <Header/>
      <Router className='App'>
        <Redirect to="/ads/onboarding" />
        <Route path='/ads' component={CommonRouter} />
        <Route path='/ads/facebook' component={FacebookRouter} />
      </Router>
    <Footer/>
    </>
  );
}

export default App;
