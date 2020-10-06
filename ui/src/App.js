import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { CommonRouter, FacebookRouter } from './router'


function App() {
  return (
    <Router className='App'>
      {/* <Redirect to="/ads/onboarding" /> */}
      <Route path='/ads' component={CommonRouter} />
      <Route path='/ads/facebook' component={FacebookRouter} />
    </Router>
  );
}

export default App;
