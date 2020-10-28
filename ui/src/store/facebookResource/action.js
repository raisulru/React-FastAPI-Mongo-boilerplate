 
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
    api: false,
    errorMessage: 'Campaigns not found',
  },
});

export const saveFacebookUser = (payload) => ({
  type: types.SAVE_FACEBOOK_USER,
  payload: {
    path: `/facebook/save-user`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'User connected successfully',
    errorMessage: "User coudn't connect",
  },
});

export const getFacebookAdAccounts = (accessToken) => ({
  type: types.GET_FACEBOOK_AD_ACCOUNTS,
  payload: {
    path: `/facebook/adaccounts?access_token=${accessToken}&fields=name,insights,account_id`,
    method: 'GET',
  },
  meta: {
    api: true,
    errorMessage: "Facebook ad accounts list not found",
  },
});

export const saveFacebookAdsAccount = (payload) => ({
  type: types.SAVE_FACEBOOK_AD_ACCOUNT,
  payload: {
    path: `/facebook/save-adaccounts`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'Facebook ad account created successfully',
    errorMessage: 'Facebook ad account not created',
  },
})

export const getFacebookCampaigns = (accessToken, adsAccountIdList) => ({
  type: types.GET_FACEBOOK_CAMPAIGN_LIST,
  payload: {
    path: `/facebook/campaigns?access_token=${accessToken}&fields=id,name,account_id,insights,objective`,
    method: 'POST',
    data: adsAccountIdList
  },
  meta: {
    api: true,
    errorMessage: "Facebook ad accounts list not found",
  },
});