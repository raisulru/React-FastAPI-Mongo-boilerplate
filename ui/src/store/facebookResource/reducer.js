import produce from 'immer';
import _ from 'lodash';
import * as types from './types';

const facebookState = {
  connected: false,
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

export const facebook = (state = facebookState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.CREATE_CAMPAIGN_SUCCESS:
        draft.campaign = payload
        break;
      case types.GET_FACEBOOK_AD_ACCOUNTS_SUCCESS:
        draft.adAccounts = payload.data
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
      default:
        return state;
    }
  });
};


const facebookSearchState = {
  estimatedAudienceSize: {
    users: 0,
    estimate_ready: true
  },
  locations: [],
  targettingCategories: [],
  customAudience: [],
  interests: [],
  behaviours: [],
  schools: [],
  educationMajors: [],
  workEmployers: [],
  jobTitles: [],
  industries: [],
  demographics: [],
  lifeEvents: [],
  income: [],
  familyStatus: [],
  userDevices: [],
  operatingSystems: []
}

export const facebookSearch = (state = facebookSearchState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.GET_AUDIENCE_SIZE_SUCCESS:
        draft.estimatedAudienceSize = payload.data
        break
      case types.SEARCH_FACEBOOK_LOCATION_SUCCESS:
        draft.locations = payload.data
        break
      case types.GET_CUSTOM_AUDIENCE_SUCCESS:
        draft.customAudience = payload.data
        break;
      case types.GET_ALL_TARGET_CATEGORY_SUCCESS:
          draft.targettingCategories = payload.data
          break;
      case types.SEARCH_INTEREST_SUCCESS:
        draft.interests = payload.data
        break;
      case types.BROWSE_BEHAVIOUR_SUCCESS:
        draft.behaviours = payload.data
        break;
      case types.BROWSE_INTEREST_SUCCESS:
        draft.interests = payload.data
        break;
      case types.SEARCH_SHCOOL_SUCCESS:
        draft.schools = payload.data
        break;
      case types.SEARCH_EDUCATION_MAJOR_SUCCESS:
        draft.educationMajors = payload.data
        break;
      case types.SEARCH_WORK_EMPLOYER_SUCCESS:
        draft.workEmployers = payload.data
        break;
      case types.SEARCH_JOB_TITLE_SUCCESS:
        draft.jobTitles = payload.data
        break;
      case types.BROWSE_INDUSTRIES_SUCCESS:
        draft.industries = payload.data
        break;
      case types.BROWSE_DEMOGRAPHICS_SUCCESS:
        draft.demographics = payload.data
        break;
      case types.BROWSE_LIFE_EVENTS_SUCCESS:
        draft.lifeEvents = payload.data
        break;
      case types.BROWSE_INCOME_SUCCESS:
        draft.income = payload.data
        break;
      case types.BROWSE_FAMILY_STATUS_SUCCESS:
        draft.familyStatus = payload.data
        break;
      case types.BROWSE_USER_DEVICE_SUCCESS:
        draft.userDevices = payload.data
        break;
      case types.BROWSE_OS_SUCCESS:
        draft.operatingSystems = payload.data
        break;
      default:
        return state;
    }
  });
};
