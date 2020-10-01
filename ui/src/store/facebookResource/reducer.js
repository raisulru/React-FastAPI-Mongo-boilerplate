import {GET_DEMO_LIST} from './type'

export const demo = function(state = [], action) {
    switch (action.type) {
      case GET_DEMO_LIST:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }