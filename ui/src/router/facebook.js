import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    FacebookLeadSync,
    FacebookPixel,
    FacebookConnect,
    FacebookAdSet,
    FacebookAds
} from '../container/facebook'


const FacebookRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/connect`} component={FacebookConnect} />
      <Route path={`${url}/lead-sync`} component={FacebookLeadSync} />
      <Route path={`${url}/pixel`} component={FacebookPixel} />
      <Route path={`${url}/adset`} component={FacebookAdSet} />
      <Route path={`${url}/ads-list`} component={FacebookAds} />
    </Switch>
  );
};

export default FacebookRouter;