import requests
import uuid
from typing import Optional
from fastapi import APIRouter, Depends, Form, Query
from resources.models.facebook import FacebookUser, FacebookAdAccountlist
from . import db

facebook_user_collection = db['facebook_user']
facebook_ad_accounts_collection = db['facebook_user_ad_accounts']

facebook_router = APIRouter()

@facebook_router.get("/adaccounts")
async def get_facebook_ad_accounts(access_token: str = None):
    url = 'https://graph.facebook.com/v8.0/me/adaccounts?access_token={}'.format(access_token)
    response = requests.get(url)
    return response.json()


@facebook_router.get("/campaigns")
async def get_facebook_campaigns(access_token: str, campaign_id: str):
    url = 'https://graph.facebook.com/v8.0/{}/campaigns?access_token={}&&fields=id,name'.format(campaign_id, access_token)
    response = requests.get(url)
    return response.json()


@facebook_router.post("/save-user")
async def create_facebook_user(user: FacebookUser):
    created_user = facebook_user_collection.insert_one(user.dict(by_alias=True))
    return user


@facebook_router.post("/save-adaccounts")
async def create_facebook_adaccounts(add_account: FacebookAdAccountlist):
    print(add_account, '######################')
    created_ad_accounts = facebook_ad_accounts_collection.insert_many(ad_account.dict(by_alias=True))
    return add_account
