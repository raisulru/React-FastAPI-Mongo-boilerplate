import produce from 'immer';
import * as types from './types';

const initialState = {
  userInfo: {
    preferred_username: null,
    email: null,
    token: null
  },
};

export const authInfo = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.SAVE_USER_INFO:
        draft.userInfo = payload.idTokenParsed
        draft.userInfo.token = payload.token
        break;
      default:
        return state;
    }
  });
};
