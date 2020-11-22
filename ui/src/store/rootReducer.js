import { combineReducers } from 'redux';
import { facebook, facebookSearch, facebookCampaign } from './facebookResource'
import { authInfo } from './auth'

const rootReducer = combineReducers({
  facebook,
  facebookSearch,
  authInfo,
  facebookCampaign
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    alert('reset App ?')
    state = undefined;
  }
  return rootReducer(state, action);
};