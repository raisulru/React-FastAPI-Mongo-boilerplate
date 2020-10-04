import produce from 'immer';
import * as types from './types';

const initialState = {
  campaign: {
    account: null,
    page: null,
    title: null,
    body: null
  },
};

export const facebook = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.CREATE_CAMPAIGN_SUCCESS:
        draft.campaign = payload
        break;
      case types.GET_CAMPAIGN_LIST_SUCCESS:
        draft.campaignList = payload
        break
      default:
        return state;
    }
  });
};
