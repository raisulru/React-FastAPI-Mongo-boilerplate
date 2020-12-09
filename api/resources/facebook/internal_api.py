import requests
import uuid
from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

from .models import (
    FacebookUser, 
    FacebookAdAccountlist, 
    FacebookPages, 
    CreateCampaign
)
from resources import db
from . import facebook_base_url, client_id, client_secret

facebook_user_collection = db['facebook_user']
facebook_ad_accounts_collection = db['facebook_user_ad_accounts']
facebook_pages = db['facebook_pages']
facebook_campaign = db['facebook_campaign']

facebook_internal_router = APIRouter()


@facebook_internal_router.post("/users")
async def create_facebook_user(user_payload: FacebookUser):
    long_lived_access_token_url = '{}/oauth/access_token?grant_type=fb_exchange_token&client_id={}&client_secret={}&fb_exchange_token={}'.format(
        facebook_base_url,
        client_id,
        client_secret,
        user_payload.accessToken
    )

    response = requests.get(long_lived_access_token_url)
    if response.status_code != 200:
        return JSONResponse(status_code=response.status_code, content=response.json())
    user_payload.accessToken = response.json()['access_token']

    user_exist = facebook_user_collection.find_one({"roboket_username": user_payload.roboket_username})
    if user_exist:
        user = facebook_user_collection.update_one(
            {"roboket_username": user_payload.roboket_username},
            { "$set": user_payload.dict(by_alias=True) }
        )
    else:
        user = facebook_user_collection.insert_one(user_payload.dict(by_alias=True))
    
    user = facebook_user_collection.find_one({"roboket_username": user_payload.roboket_username})

    if user:
        user = FacebookUser(**user)
        return user
    return JSONResponse(status_code=400, content={'msg': 'User Not Created'})


@facebook_internal_router.get("/users/{roboket_username}")
async def get_facebook_user(roboket_username: str):
    user = facebook_user_collection.find_one({"roboket_username": roboket_username})
    if user:
        user = FacebookUser(**user)
        return user
    return JSONResponse(status_code=404, content={'msg': 'User Not Found'})


@facebook_internal_router.post("/save-adaccounts")
async def create_facebook_adaccounts(ad_accounts: FacebookAdAccountlist):
    ad_account_list = []
    for item in ad_accounts.ads_account_list:
        ad_account_list.append(item.dict(by_alias=True))
    created_ad_accounts = facebook_ad_accounts_collection.insert_many(ad_account_list)
    return ad_accounts

@facebook_internal_router.post("/pages/settings")
async def save_facebook_pages_settings(pages: FacebookPages):
    page_list_with_settings = []
    for item in pages.page_list:
        page_list_with_settings.append(item.dict(by_alias=True))
    page_list_created = facebook_pages.insert_many(page_list_with_settings)
    return pages


@facebook_internal_router.post("/campaign/create")
async def create_campaign(campaign: CreateCampaign):
    created_campaign = facebook_campaign.insert_one(campaign.dict(by_alias=True))
    return campaign
