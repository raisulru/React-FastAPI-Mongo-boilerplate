import { combineReducers } from 'redux';
import { facebook, facebookSearch } from './facebookResource'
import { authInfo } from './auth'

const rootReducer = combineReducers({
  facebook,
  facebookSearch,
  authInfo
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return rootReducer(state, action);
};