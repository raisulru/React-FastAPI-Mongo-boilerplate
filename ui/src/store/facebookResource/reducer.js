import produce from 'immer';
// import _ from 'lodash';
import * as types from './types';

const initialState = {
  connected: false,
  user: {
    accessToken: null,
    data_access_expiration_time: 0,
    email: null,
    expiresIn: 0,
    graphDomain: null,
    id: null,
    name: null,
    picture: {
      height: 50,
      is_silhouette: false,
      url: null,
      width: 50
    },
    signedRequest: null,
    userID: null
  },
  campaign: {
    account: null,
    page: null,
    title: null,
    body: null
  },
  facebookPages: [],
  campaignList: []
};

export const facebook = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.CREATE_CAMPAIGN_SUCCESS:
        draft.campaign = payload
        break;
      case types.GET_FACEBOOK_PAGES_SUCCESS:
        draft.facebookPages = payload
        break;
      case types.SAVE_FACEBOOK_USER:
        draft.user = payload.data
        draft.connected = true
        break;
      case types.GET_CAMPAIGN_LIST_SUCCESS:
        draft.campaignList = payload
        break
      default:
        return state;
    }
  });
};
