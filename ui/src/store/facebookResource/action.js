 
import * as types from './types';


export const createFacebookAds = (payload) => ({
  type: types.CREATE_CAMPAIGN,
  payload: {
    path: `/facebook/campaign/create`,
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
    path: `/facebook/campaigns/${campaignID}`,
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

export const getFacebookPages = (userID, accessToken) => ({
  type: types.GET_FACEBOOK_PAGES,
  payload: {
    path: `/facebook/pages?userID=${userID}&access_token=${accessToken}&fields=id,name,about,category,access_token,tasks`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook pages not found",
  },
});

export const saveFacebookPagesSettings = (data) => ({
  type: types.SAVE_FACEBOOK_PAGES_SETTINGS,
  payload: {
    path: `/facebook/pages/settings`,
    method: 'POST',
    data: data
  },
  meta: {
    api: true,
    errorMessage: "Facebook page saved successfully",
  },
});

export const getFacebookCallToActionEnums = () => ({
  type: types.GET_FACEBOOK_CTA,
  payload: {
    path: `/facebook/cta`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook cta not found",
  },
});

export const searchFacebookLocation = (access_token, search) => ({
  type: types.SEARCH_FACEBOOK_LOCATION,
  payload: {
    path: `/facebook/location/search?access_token=${access_token}&search=${search}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook pages not found",
  },
});

export const getEstimatedAudienceSize = (access_token, adaccount_id, specification) => ({
  type: types.GET_AUDIENCE_SIZE,
  payload: {
    path: `/facebook/audience-size?access_token=${access_token}&adaccount_id=${adaccount_id}&specification=${specification}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


// Audience targeting api


export const getFacebookCustomAudience = (access_token, adAccount) => ({
  type: types.GET_CUSTOM_AUDIENCE,
  payload: {
    path: `/facebook/custom-audience?access_token=${access_token}&adaccount=${adAccount}&fields=name`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Custom Audience not found",
  },
});


export const getAllTargetCategory = (access_token) => ({
  type: types.GET_ALL_TARGET_CATEGORY,
  payload: {
    path: `/facebook/targetting-category/browse/all?access_token=${access_token}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseBehaviour = (access_token) => ({
  type: types.BROWSE_BEHAVIOUR,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=behaviors`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseInterest = (access_token) => ({
  type: types.BROWSE_INTEREST,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=interests`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchInterest = (access_token, keyword) => ({
  type: types.SEARCH_INTEREST,
  payload: {
    path: `/facebook/targetting-category/search?access_token=${access_token}&class_type=adinterest&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchEducationSchool = (access_token, keyword) => ({
  type: types.SEARCH_SHCOOL,
  payload: {
    path: `/facebook/targetting-category/search?access_token=${access_token}&class_type=adeducationschool&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchEducationMajor = (access_token, keyword) => ({
  type: types.SEARCH_EDUCATION_MAJOR,
  payload: {
    path: `/facebook/targetting-category/search?access_token=${access_token}&class_type=adeducationmajor&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchWorkEmployer = (access_token, keyword) => ({
  type: types.SEARCH_WORK_EMPLOYER,
  payload: {
    path: `/facebook/targetting-category/search?access_token=${access_token}&class_type=adworkemployer&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchJobTitle = (access_token, keyword) => ({
  type: types.SEARCH_JOB_TITLE,
  payload: {
    path: `/facebook/targetting-category/search?access_token=${access_token}&class_type=adworkposition&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseDemographics = (access_token) => ({
  type: types.BROWSE_DEMOGRAPHICS,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=demographics`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseLifeEvents = (access_token) => ({
  type: types.BROWSE_LIFE_EVENTS,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=life_events`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseIndustries = (access_token) => ({
  type: types.BROWSE_INDUSTRIES,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=industries`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseIncome = (access_token) => ({
  type: types.BROWSE_INCOME,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=income`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseFamilyStatus = (access_token) => ({
  type: types.BROWSE_FAMILY_STATUS,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=family_statuses`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseUserDevice = (access_token) => ({
  type: types.BROWSE_USER_DEVICE,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=user_device`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});



export const browseUserOS = (access_token) => ({
  type: types.BROWSE_OS,
  payload: {
    path: `/facebook/targetting-category/browse?access_token=${access_token}&class_type=user_os`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});
