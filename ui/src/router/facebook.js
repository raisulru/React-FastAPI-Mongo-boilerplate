import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    PagesConnect,
    FacebookPixel,
    AdAccountConnect,
    FacebookAdSet,
    FacebookAds
} from '../container/facebook'


const FacebookRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/connect`} component={AdAccountConnect} />
      <Route path={`${url}/lead-sync`} component={PagesConnect} />
      <Route path={`${url}/pixel`} component={FacebookPixel} />
      <Route path={`${url}/adset`} component={FacebookAdSet} />
      <Route path={`${url}/ads-list`} component={FacebookAds} />
    </Switch>
  );
};

export default FacebookRouter;