import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    LandingPage,
    DashBoard,
    OnBoardingProcess
} from '../container/common';

const CommonRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/dashboard`} component={DashBoard} />
      <Route path={`${url}/onboarding`} component={LandingPage} />
      <Route path={`${url}/onboarding-process`} component={OnBoardingProcess} />
    </Switch>
  );
};

export default CommonRouter;