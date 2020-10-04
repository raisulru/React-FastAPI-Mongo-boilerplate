import { combineReducers } from 'redux';
import { facebook } from './facebookResource'

const rootReducer = combineReducers({
  facebook
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return rootReducer(state, action);
};