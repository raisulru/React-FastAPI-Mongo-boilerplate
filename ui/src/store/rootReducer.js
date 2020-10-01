import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return rootReducer(state, action);
};