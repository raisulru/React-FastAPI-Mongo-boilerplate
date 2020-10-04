 
import * as types from './types';


export const createCampaign = (payload) => ({
  type: types.CREATE_CAMPAIGN,
  payload: {
    path: `/campaigns`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'Campaign created successfully',
    errorMessage: 'Campaign not created',
  },
});

export const updateCampaign = (campaignID, payload) => ({
  type: types.UPDATE_CAMPAIGN,
  payload: {
    path: `/campaigns/${campaignID}`,
    method: 'PUT',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'Campaign Updated successfuly !',
    errorMessage: 'Campaign not updated !',
  },
});

export const getCampaigns = () => ({
  type: types.GET_CAMPAIGN_LIST,
  payload: {
    path: `/categories`,
    method: 'GET',
  },
  meta: {
    api: true,
    errorMessage: 'Campaigns not found',
  },
});