import os
import shutil
import requests
from typing import List
from fastapi import APIRouter, File, UploadFile, HTTPException
from typing import Optional
from facebookads.api import FacebookAdsApi
from facebookads.adobjects.targetingsearch import TargetingSearch
from .enums import facebook_click_to_action, supported_extentions
from resources.utilities.utils import remove_file_from_directory
from .models import AdsPayload

# my_app_id = '<APP_ID>'
# my_app_secret = '<APP_SECRET>'
# my_access_token = '<ACCESS_TOKEN>'
# proxies = {'http': '<HTTP_PROXY>', 'https': '<HTTPS_PROXY>'}
# FacebookAdsApi.init(my_app_id, my_app_secret, my_access_token, proxies)


facebook_router = APIRouter()
facebook_base_url = 'https://graph.facebook.com/v9.0'

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


@facebook_router.post("/ads/image-upload")
async def create_upload_file(ad_account: str, access_token: str, file: UploadFile = File(...)):
    directory = 'media'

    try:
        os.mkdir(directory)
    except FileExistsError:
        pass

    filename, file_extension = os.path.splitext(file.filename)
    if file_extension.lower() not in supported_extentions:
        raise HTTPException(status_code=400, detail="File Format Not Supported")

    url = '{}/{}/adimages?access_token={}'.format(facebook_base_url, ad_account, access_token)
    image_name = "{}{}".format(ad_account, file_extension)
    image_path = "{}/{}".format(directory, image_name)

    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    payload = {'filename': open(image_path, 'rb')}
    response = requests.post(url=url, files=payload)
    
    if directory:
        remove_file_from_directory(directory)

    if response.status_code == 200:
        response = {
            'images': response.json()['images'][image_name]
        }
        return response
    raise HTTPException(status_code=400, detail=str(response.json()))


@facebook_router.post("/ads/publish")
async def publish_ads(access_token: str, ad_account: str, ads_payload: AdsPayload):
    campaign_url = '{}/{}/campaigns?access_token={}'.format(
        facebook_base_url, 
        ad_account, 
        access_token
    )
    ads_set_url = '{}/{}/adsets?access_token={}'.format(
        facebook_base_url, 
        ad_account, 
        access_token
    )
    ads_creative_url = '{}/{}/adcreatives?access_token={}'.format(
        facebook_base_url, 
        ad_account, 
        access_token
    )
    ads_url = '{}/{}/ads?access_token={}'.format(
        facebook_base_url, 
        ad_account, 
        access_token
    )
    campaign = ads_payload.campaign
    ad_set = ads_payload.ads_set
    ad_creative = ads_payload.ads_creative
    
    campaign_res = requests.post(url=campaign_url, data=campaign.__dict__)
    print(campaign_res.json())

    ad = {
        "name": 'Test Name',
        "adset_id": 'ad_set_id',
        "creative": {
            "creative_id": "120330000221295100"
        },
        "status": "ACTIVE"
    }
    # campaign = campaign
    # campaign = requests.post(AdsPayload.campaign)
    return campaign_res.json()