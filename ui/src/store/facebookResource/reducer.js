import produce from 'immer';
import _ from 'lodash';
import * as types from './types';

const initialState = {
  connected: false,
  locations: [
    
  ],
  campaign: {
    ad_account: {},
    page: {},
    campaign: '',
    body_text: '',
    heading: '',
    cta: ''
  },
  user: {
    accessToken: null,
    data_access_expiration_time: 0,
    email: null,
    expiresIn: 0,
    graphDomain: null,
    id: null,
    name: null,
    signedRequest: null,
    userID: null
  },
  adAccounts: [],
  campaignList: [],
  facebookPages: [],
  CTA: []
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
      case types.SAVE_FACEBOOK_USER:
        draft.user = payload.data
        draft.connected = true
        break;
      case types.GET_FACEBOOK_PAGES_SUCCESS:
        const initialLeadSync = payload.data.map((page) => {
          page.lead_sync = false;
          return page;
        })
        draft.facebookPages = initialLeadSync
        break;
      case types.SAVE_FACEBOOK_PAGES_SETTINGS_SUCCESS:
        draft.facebookPages = payload.page_list
        break;
      case types.GET_FACEBOOK_CAMPAIGN_LIST_SUCCESS:
        draft.campaignList = payload
        break
      case types.GET_FACEBOOK_CAMPAIGN_LIST_SUCCESS:
          draft.campaignList = payload
          break
      case types.SEARCH_FACEBOOK_LOCATION_SUCCESS:
        draft.locations = payload.data
        break
      default:
        return state;
    }
  });
};
