import * as types from './types';


export const saveAuthUser = (payload) => ({
  type: types.SAVE_USER_INFO,
  payload: payload,
  meta: {
    api: false,
    successMessage: 'User connected successfully',
    errorMessage: "User coudn't connect",
  },
});