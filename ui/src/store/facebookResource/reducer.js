import produce from 'immer';
import _ from 'lodash';
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
  campaigns: [],
  adAccounts: [],
  campaignList: []
};

export const facebook = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.CREATE_CAMPAIGN_SUCCESS:
        draft.campaign = payload
        break;
      case types.GET_FACEBOOK_AD_ACCOUNTS_SUCCESS:
        const modifiedAdAccounts = _.map(payload.data, (account) => {
          account.connected = false
          account.auto_track = false
          return account
        })
        draft.adAccounts = modifiedAdAccounts
        break;
      case type.GET_CAMPAIGN_LIST_SUCCESS:
        draft.campaigns = payload.data
        break
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
