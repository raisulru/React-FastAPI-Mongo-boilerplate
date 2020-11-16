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


export const clearState = () => ({
  type: 'RESET_APP',
  meta: {
    api: false,
    successMessage: 'Successfully State Clear',
    errorMessage: "State not clear",
  },
});