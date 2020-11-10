import requests
import uuid
from fastapi import APIRouter
from .models import (
    FacebookUser, 
    FacebookAdAccountlist, 
    FacebookPages, 
    CreateCampaign
)
from resources import db

facebook_user_collection = db['facebook_user']
facebook_ad_accounts_collection = db['facebook_user_ad_accounts']
facebook_pages = db['facebook_pages']
facebook_campaign = db['facebook_campaign']

facebook_internal_router = APIRouter()


@facebook_internal_router.post("/save-user")
async def create_facebook_user(user: FacebookUser):
    created_user = facebook_user_collection.insert_one(user.dict(by_alias=True))
    return user


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
