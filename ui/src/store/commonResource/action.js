 
import * as types from './types';


export const createFacebookUser = (payload) => ({
  type: types.CREATE_FACEBOOK_USER,
  payload: {
    path: `/campaigns`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'User connected successfully',
    errorMessage: "User coudn't connect",
  },
});




// export const getFacebookUser = (userID) => ({
//   type: types.GET_CAMPAIGN_LIST,
//   payload: {
//     path: `/categories`,
//     method: 'GET',
//   },
//   meta: {
//     api: true,
//     errorMessage: 'Campaigns not found',
//   },
// });