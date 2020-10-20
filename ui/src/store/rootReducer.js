import { combineReducers } from 'redux';
import { facebook } from './facebookResource'
import { authInfo } from './auth'

const rootReducer = combineReducers({
  facebook,
  authInfo
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return rootReducer(state, action);
};