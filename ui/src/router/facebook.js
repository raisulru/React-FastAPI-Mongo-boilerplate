import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    CreateFacebookContent,
    FacebookAudienceTargeting,
    FacebookBillAndSchedule,
    FacebookPublish
} from '../container/facebook'


const FacebookRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/create-content`} component={CreateFacebookContent} />
      <Route path={`${url}/target-audience`} component={FacebookAudienceTargeting} />
      <Route path={`${url}/billing`} component={FacebookBillAndSchedule} />
      <Route path={`${url}/publish`} component={FacebookPublish} />
    </Switch>
  );
};

export default FacebookRouter;