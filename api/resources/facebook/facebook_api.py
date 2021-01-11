import os
import json
import shutil
import requests
from typing import List
from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse

from typing import Optional
from fastapi.encoders import jsonable_encoder

from facebookads.api import FacebookAdsApi
from facebookads.adobjects.targetingsearch import TargetingSearch
from .enums import facebook_click_to_action, supported_extentions
from resources.utilities.utils import remove_file_from_directory
from .models import AdsPayload, Campaign
from resources import facebook_base_url, db
# my_app_id = '<APP_ID>'
# my_app_secret = '<APP_SECRET>'
# my_access_token = '<ACCESS_TOKEN>'
# proxies = {'http': '<HTTP_PROXY>', 'https': '<HTTPS_PROXY>'}
# FacebookAdsApi.init(my_app_id, my_app_secret, my_access_token, proxies)

facebook_ad = db['facebook_ad']

facebook_router = APIRouter()

@facebook_router.get("/adaccounts")
async def get_facebook_ad_accounts(access_token: str, fields: str):
    url = '{}/me/adaccounts?access_token={}&fields={}'.format(
        facebook_base_url, 
        access_token, 
        fields
    )
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())


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
    url = '{}/{}/accounts?access_token={}&fields={}'.format(
        facebook_base_url, 
        userID, 
        access_token, 
        fields
    )
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())
        


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
    return JSONResponse(status_code=response.status_code, content=response.json())

@facebook_router.get("/audience-size")
async def target_audience_size(adaccount_id: str, access_token: str, specification: str):
    url = '{}/{}/reachestimate?access_token={}&targeting_spec={}'.format(
        facebook_base_url, 
        adaccount_id, 
        access_token, 
        specification
    )
    print(specification)
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())


@facebook_router.get("/targeting-category/browse/all")
async def browse_targeting_category(access_token: str):
    url = '{}/search?type=adTargetingCategory&access_token={}'.format(
        facebook_base_url,
        access_token,
    )
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())


@facebook_router.get("/targeting-category/browse")
async def browse_targeting_category_with_class(access_token: str, class_type: str):
    url = '{}/search?type=adTargetingCategory&access_token={}&class={}'.format(
        facebook_base_url,
        access_token,
        class_type
    )
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())


@facebook_router.get("/targeting-category/search")
async def search_targeting_category(access_token: str, class_type: str, search: str):
    url = '{}/search?type={}&access_token={}&q={}'.format(
        facebook_base_url,
        class_type,
        access_token,
        search
    )
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())


@facebook_router.get("/custom-audience")
async def custom_audience(access_token: str, adaccount: str, fields: str):
    url = '{}/{}/customaudiences?fields={}&access_token={}&limit=1000'.format(
        facebook_base_url,
        adaccount,
        fields,
        access_token
    )
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())


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
    return JSONResponse(status_code=response.status_code, content=response.json())


@facebook_router.post("/ads/publish")
async def publish_ads(
    access_token: str, 
    ad_account: str, 
    targeting: dict, 
    ads_payload: AdsPayload):

    if not ads_payload.creative_id and not ads_payload.ads_creative:
        return JSONResponse(status_code=400, content={'msg': "You Must give creative information!"})
    
    campaign = ads_payload.campaign
    ad_set = ads_payload.ads_set
    ad_creative = ads_payload.ads_creative
    creative_id = ads_payload.creative_id

    ad_set_with_targeting = ad_set.__dict__
    ad_set_with_targeting['targeting'] = targeting
    campaign_payload = {
        "campaign": campaign.__dict__,
        "ad_set": ad_set_with_targeting,
        "ad_creative": ad_creative.__dict__ if ad_creative else None,
        "creative_id": creative_id if creative_id else None
    }
    
    facebook_ad.insert_one(campaign_payload)
    
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

    if not creative_id and ad_creative:
        ad_creative_payload = {
            'name': campaign.name,
            'object_story_spec': str({
                "page_id": ad_creative.page_id,
                "link_data": {
                    "image_hash": ad_creative.image_hash,
                    "message": ad_creative.body_text,
                    "link": ad_creative.image_url
                }
            })
        }
        ad_creative_res = requests.post(url=ads_creative_url, data=ad_creative_payload)
        if ad_creative_res.status_code != 200:
            return JSONResponse(status_code=ad_creative_res.status_code, content=ad_creative_res.json())
        creative_id = ad_creative_res.json()['id']
        
    
    campaign_res = requests.post(url=campaign_url, data=campaign.__dict__)
    if campaign_res.status_code != 200:
        return JSONResponse(status_code=campaign_res.status_code, content=campaign_res.json())

    ad_set.campaign_id = campaign_res.json()['id']
    ad_set.targeting = str(targeting)
    adset_res = requests.post(url=ads_set_url, data=ad_set.__dict__)
    if adset_res.status_code != 200:
        return JSONResponse(status_code=adset_res.status_code, content=adset_res.json())

    ad = {
        "name": 'Test Name',
        "adset_id": adset_res.json()['id'],
        "creative": str({"creative_id": creative_id}),
        "status": "ACTIVE"
    }
    ad_res = requests.post(url=ads_url, data=ad)
    
    return JSONResponse(status_code=ad_res.status_code, content=ad_res.json())


@facebook_router.post("/update/campaign/{campaign_id}")
async def update_campaign(campaign_id: str, access_token: str, campaign: Campaign):
    url = '{}/{}?access_token={}'.format(
        facebook_base_url,
        campaign_id,
        access_token
    )
    response = requests.post(url, json=campaign.dict())
    return JSONResponse(status_code=response.status_code, content=response.json())


@facebook_router.get("/ad-set")
async def update_campaign(campaign_id: str, access_token: str, fields: str):
    url = '{}/{}/adsets?access_token={}&fields={}'.format(
        facebook_base_url,
        campaign_id,
        access_token,
        fields
    )
    response = requests.get(url)
    return JSONResponse(status_code=response.status_code, content=response.json())
