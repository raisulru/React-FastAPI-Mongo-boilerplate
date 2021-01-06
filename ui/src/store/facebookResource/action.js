import axios from 'axios';
import * as types from './types';
import { apiBaseURL } from '../../settings'

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

// Facebook user connection related actions
export const saveFacebookUser = (payload) => ({
  type: types.SAVE_FACEBOOK_USER,
  payload: {
    path: `/facebook/users`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'User connected successfully',
    errorMessage: "User coudn't connect",
  },
});

export const getFacebookUser = (roboketUserName) => ({
  type: types.GET_FACEBOOK_USER,
  payload: {
    path: `/facebook/users/${roboketUserName}`,
    method: 'GET'
  },
  meta: {
    api: true,
    successMessage: 'User get successfully',
    errorMessage: "User Not Found",
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

export const updateAdAccountConnection = (payload) => ({
  type: types.UPDATE_AD_ACCOUNT_CONNECTION,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "User coudn't connect",
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
    path: `/facebook/campaigns?access_token=${accessToken}&fields=id,name,account_id,insights,objective,created_time,status,start_time`,
    method: 'POST',
    data: adsAccountIdList
  },
  meta: {
    api: true,
    errorMessage: "Facebook ad accounts list not found",
  },
});

export const updateFacebookCampaign = (accessToken, campaignId, data) => ({
  type: types.UPDATE_FACEBOOK_CAMPAIGN,
  payload: {
    path: `/facebook/update/campaign/${campaignId}?access_token=${accessToken}`,
    method: 'POST',
    data: data
  },
  meta: {
    api: true,
    id: campaignId,
    data: data,
    errorMessage: "Campaign Update Failed",
  },
});

export const getFacebookPages = (userID, accessToken) => ({
  type: types.GET_FACEBOOK_PAGES,
  payload: {
    path: `/facebook/pages?userID=${userID}&access_token=${accessToken}&fields=id,name,about,category,access_token,tasks,picture`,
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

export const getAdSet = (access_token, campaignID) => ({
  type: types.GET_AD_SET,
  payload: {
    path: `/facebook/ad-set?access_token=${access_token}&campaign_id=${campaignID}&fields=name,start_time,end_time,daily_budget,lifetime_budget,status`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Ad set not found",
  },
});


// Audience targeting actions

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

export const saveTargetingAudience = (payload) => ({
  type: types.SAVE_TARGETING_AUDIENCE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Audience not saved",
  },
});

export const getFacebookCustomAudience = (access_token, adAccount) => ({
  type: types.GET_CUSTOM_AUDIENCE,
  payload: {
    path: `/facebook/custom-audience?access_token=${access_token}&adaccount=${adAccount}&fields=name,subtype`,
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
    path: `/facebook/targeting-category/browse/all?access_token=${access_token}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseBehaviour = (access_token, keyword='') => {
  if (keyword) {
    return ({
      type: types.BROWSE_BEHAVIOUR_SUCCESS,
      meta: {
        api: false,
        keyword: keyword,
      },
    })
  } else {
    return ({
      type: types.BROWSE_BEHAVIOUR,
      payload: {
        path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=behaviors`,
        method: 'GET'
      },
      meta: {
        api: true,
        errorMessage: "Facebook Audience size not found",
        keyword: keyword,
      },
    })
  }
};


export const browseInterest = (access_token) => ({
  type: types.BROWSE_INTEREST,
  payload: {
    path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=interests`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchInterest = (access_token, keyword = '') => ({
  type: types.SEARCH_INTEREST,
  payload: {
    path: `/facebook/targeting-category/search?access_token=${access_token}&class_type=adinterest&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchEducationSchool = (access_token, keyword = '') => ({
  type: types.SEARCH_SHCOOL,
  payload: {
    path: `/facebook/targeting-category/search?access_token=${access_token}&class_type=adeducationschool&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchEducationMajor = (access_token, keyword = '') => ({
  type: types.SEARCH_EDUCATION_MAJOR,
  payload: {
    path: `/facebook/targeting-category/search?access_token=${access_token}&class_type=adeducationmajor&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchWorkEmployer = (access_token, keyword = '') => ({
  type: types.SEARCH_WORK_EMPLOYER,
  payload: {
    path: `/facebook/targeting-category/search?access_token=${access_token}&class_type=adworkemployer&search=${keyword}`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const searchJobTitle = (access_token, keyword = '') => ({
  type: types.SEARCH_JOB_TITLE,
  payload: {
    path: `/facebook/targeting-category/search?access_token=${access_token}&class_type=adworkposition&search=${keyword}`,
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
    path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=demographics`,
    method: 'GET'
  },
  meta: {
    api: true,
    errorMessage: "Facebook Audience size not found",
  },
});


export const browseLifeEvents = (access_token, keyword = '') => {
  if (keyword) {
    return ({
      type: types.BROWSE_LIFE_EVENTS_SUCCESS,
      meta: {
        api: false,
        keyword: keyword,
      },
    })
  } else {
    return ({
      type: types.BROWSE_LIFE_EVENTS,
      payload: {
        path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=life_events`,
        method: 'GET'
      },
      meta: {
        api: true,
        errorMessage: "Facebook Audience size not found",
        keyword: keyword,
      },
    })
  }
};


export const browseIndustries = (access_token, keyword='') => {
  if (keyword) {
    return ({
      type: types.BROWSE_INDUSTRIES_SUCCESS,
      meta: {
        api: false,
        keyword: keyword,
      },
    })
  } else {
    return ({
      type: types.BROWSE_INDUSTRIES,
      payload: {
        path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=industries`,
        method: 'GET'
      },
      meta: {
        api: true,
        errorMessage: "Facebook Audience size not found",
        keyword: keyword,
      },
    })
  }
};


export const browseIncome = (access_token, keyword='') => {
  if (keyword) {
    return ({
      type: types.BROWSE_INCOME_SUCCESS,
      meta: {
        api: false,
        keyword: keyword,
      },
    })
  } else {
    return ({
      type: types.BROWSE_INCOME,
      payload: {
        path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=income`,
        method: 'GET'
      },
      meta: {
        api: true,
        errorMessage: "Facebook Audience size not found",
        keyword: keyword,
      },
    })
  }
};


export const browseFamilyStatus = (access_token, keyword='') => {
  if (keyword) {
    return ({
      type: types.BROWSE_FAMILY_STATUS_SUCCESS,
      meta: {
        api: false,
        keyword: keyword,
      },
    })
  } else {
    return ({
      type: types.BROWSE_FAMILY_STATUS,
      payload: {
        path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=family_statuses`,
        method: 'GET'
      },
      meta: {
        api: true,
        errorMessage: "Facebook Audience size not found",
        keyword: keyword,
      },
    })
  }
};


export const browseUserDevice = (access_token, keyword='') => {
  if (keyword) {
    return ({
      type: types.BROWSE_USER_DEVICE_SUCCESS,
      meta: {
        api: false,
        keyword: keyword,
      },
    })
  } else {
    return ({
      type: types.BROWSE_USER_DEVICE,
      payload: {
        path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=user_device`,
        method: 'GET'
      },
      meta: {
        api: true,
        errorMessage: "Facebook Audience size not found",
        keyword: keyword,
      },
    })
  }
};


export const browseUserOS = (access_token, keyword='') => {
  if (keyword) {
    return ({
      type: types.BROWSE_OS_SUCCESS,
      meta: {
        api: false,
        keyword: keyword,
      },
    })
  } else {
    return ({
      type: types.BROWSE_OS,
      payload: {
        path: `/facebook/targeting-category/browse?access_token=${access_token}&class_type=user_os`,
        method: 'GET'
      },
      meta: {
        api: true,
        errorMessage: "Facebook Audience size not found",
        keyword: keyword,
      },
    })
  }
};

// Campaign related actions

export const saveFacebookCampaign = (payload) => ({
  type: types.SAVE_FACEBOOK_CAMPAIGN,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Campaign not saved",
  },
});

export const addCustomAudience = (payload) => ({
  type: types.SAVE_CUSTOM_AUDIENCE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Custom Audience not saved",
  },
});

export const addExcludeCustomAudience = (payload) => ({
  type: types.SAVE_EXCLUDED_CUSTOM_AUDIENCE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Custome audience not excluded",
  },
});

export const removeSelectedAudience = (payload) => ({
  type: types.REMOVE_SELECTED_AUDIENCE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Audience not removed",
  },
});

export const removeExcludedAudience = (payload) => ({
  type: types.REMOVE_EXCLUDED_AUDIENCE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Audience not removed",
  },
});

export const controllPersonalAttModal = (payload) => ({
  type: types.SHOW_PERSONAL_ATT_MODAL,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Modal not updated",
  },
});

export const addPersonalAtt = (payload) => ({
  type: types.ADD_PERSONAL_ATTRIBUTE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Personal attribute not added",
  },
});

export const removePersonalAtt = (payload) => ({
  type: types.REMOVE_PERSONAL_ATTRIBUTE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Personal attribute not removed",
  },
});

export const addNarrowCard = (payload) => ({
  type: types.ADD_CARD,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Card not added",
  },
});

export const removeNarrowCard = (payload) => ({
  type: types.REMOVE_CARD,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Card not removed",
  },
});

export const AddOthersTargeting = (payload) => ({
  type: types.ADD_OTHERS_TARGETING_PARAM,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Others targeting not Added",
  },
});

export const addBudgetAndSchedule = (payload) => ({
  type: types.ADD_BUDGET_AND_SCHEDULE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Budget And Schedule Not Added",
  },
});

export const uploadAdsImage = (data, access_token, adAccount) => ({
  type: types.UPLOAD_ADS_IMAGE,
  payload: {
    path: `/facebook/ads/image-upload?access_token=${access_token}&ad_account=${adAccount}`,
    method: 'POST',
    data: data
  },
  meta: {
    api: true,
    file: true,
    successMessage: "Image Uploaded Successfully",
    errorMessage: "Facebook page saved successfully",
  },
});

export const removeAdsImage = () => ({
  type: types.REMOVE_ADS_IMAGE_SUCCESS,
  payload: {},
  meta: {
    api: false,
    errorMessage: "Image Not Removed",
  },
});

export const updateImageFromCreative = (payload) => ({
  type: types.UPDATE_IMAGE_FROM_CREATIVE,
  payload: payload,
  meta: {
    api: false,
    errorMessage: "Image Not Updated",
  },
});

export const deleteMessages = () => ({
  type: types.DELETE_MESSAGE,
  meta: {
    api: false,
    errorMessage: "Messae Not Deleted",
  },
});

export const modalInitialEvent = () => ({
  type: types.DELETE_MESSAGE,
  meta: {
    api: false,
    errorMessage: "Messae Not Deleted",
  },
});

export const publishAd = (payload, access_token, adAccount) => ({
  type: types.PUBLISH_AD,
  payload: {
    path: `/facebook/ads/publish?access_token=${access_token}&ad_account=${adAccount}`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'Published successfully',
    errorMessage: "Published Faild",
  },
});
