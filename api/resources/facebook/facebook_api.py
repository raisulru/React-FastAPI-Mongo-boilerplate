import requests
from typing import List
from fastapi import APIRouter
from typing import Optional
from facebookads.api import FacebookAdsApi
from facebookads.adobjects.targetingsearch import TargetingSearch
from .enums import facebook_click_to_action

# my_app_id = '<APP_ID>'
# my_app_secret = '<APP_SECRET>'
# my_access_token = '<ACCESS_TOKEN>'
# proxies = {'http': '<HTTP_PROXY>', 'https': '<HTTPS_PROXY>'}
# FacebookAdsApi.init(my_app_id, my_app_secret, my_access_token, proxies)


facebook_router = APIRouter()
facebook_base_url = 'https://graph.facebook.com/v8.0'

@facebook_router.get("/adaccounts")
async def get_facebook_ad_accounts(access_token: str, fields: str):
    url = '{}/me/adaccounts?access_token={}&fields={}'.format(
        facebook_base_url, 
        access_token, 
        fields
    )
    response = requests.get(url)
    return response.json()


@facebook_router.post("/campaigns")
async def get_facebook_campaigns(access_token: str, ads_account_list: List[str], fields: str):
    response = []
    for ads_account_id in ads_account_list:
        url = '{}/{}/campaigns?access_token={}&&fields={}'.format(
            facebook_base_url, 
            ads_account_id, 
            access_token, 
            fields
        )
        res = requests.get(url)
        if res.status_code == 200:
            response += res.json()['data']
        else:
            response += []
    return response


@facebook_router.get("/pages")
async def get_facebook_pages(userID: str, access_token: str, fields: str=None):
    try:
        url = '{}/{}/accounts?access_token={}&fields={}'.format(
            facebook_base_url, 
            userID, 
            access_token, 
            fields
        )
        response = requests.get(url)
        if response.status_code==200:
            return response.json()
        print(response.json())
        return {'data': []}
    except Exception as e:
        return {'error': str(e)}


@facebook_router.get("/cta")
async def get_facebook_click_to_action_enum():
    
    return {'data': facebook_click_to_action}


@facebook_router.get("/location/search")
async def search_location(access_token: str, search: str):
    url = '{}/search?type=adgeolocation&access_token={}&q={}'.format(
        facebook_base_url, 
        access_token, 
        search
    )
    response = requests.get(url)
    return response.json()


@facebook_router.get("/audience-size")
async def target_audience_size(adaccount_id: str, access_token: str, specification: str):
    url = '{}/{}/reachestimate?access_token={}&targeting_spec={}'.format(
        facebook_base_url, 
        adaccount_id, 
        access_token, 
        specification
    )
    response = requests.get(url)
    return response.json()


@facebook_router.get("/targeting-category/browse/all")
async def browse_targeting_category(access_token: str):
    url = '{}/search?type=adTargetingCategory&access_token={}'.format(
        facebook_base_url,
        access_token,
    )
    response = requests.get(url)
    return response.json()


@facebook_router.get("/targeting-category/browse")
async def browse_targeting_category_with_class(access_token: str, class_type: str):
    url = '{}/search?type=adTargetingCategory&access_token={}&class={}'.format(
        facebook_base_url,
        access_token,
        class_type
    )
    response = requests.get(url)
    return response.json()


@facebook_router.get("/targeting-category/search")
async def search_targeting_category(access_token: str, class_type: str, search: str):
    url = '{}/search?type={}&access_token={}&q={}'.format(
        facebook_base_url,
        class_type,
        access_token,
        search
    )
    response = requests.get(url)
    return response.json()


@facebook_router.get("/custom-audience")
async def custom_audience(access_token: str, adaccount: str, fields: str):
    url = '{}/{}/customaudiences?fields={}&access_token={}&limit=1000'.format(
        facebook_base_url,
        adaccount,
        fields,
        access_token
    )
    response = requests.get(url)
    return response.json()
