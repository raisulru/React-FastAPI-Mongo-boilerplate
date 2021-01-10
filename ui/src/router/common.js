import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    LandingPage,
    DashBoard,
    OnBoardingProcess,
    DisconnectAds
} from '../container/common';

const CommonRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/dashboard`} component={DashBoard} />
      <Route path={`${url}/onboarding`} component={LandingPage} />
      <Route path={`${url}/onboarding-process`} component={OnBoardingProcess} />
      <Route path={`${url}/disconnect-ad-account`} component={DisconnectAds} />
    </Switch>
  );
};

export default CommonRouter;