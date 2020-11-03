import requests
import uuid
from typing import Optional, Set, List
from fastapi import APIRouter, Depends, Form, Query
from resources.models.facebook import FacebookUser, FacebookAdAccountlist
from . import db

facebook_user_collection = db['facebook_user']
facebook_ad_accounts_collection = db['facebook_user_ad_accounts']

facebook_router = APIRouter()

@facebook_router.get("/adaccounts")
async def get_facebook_ad_accounts(access_token: str, fields: str):
    url = 'https://graph.facebook.com/v8.0/me/adaccounts?access_token={}&fields={}'.format(access_token, fields)
    response = requests.get(url)
    return response.json()


@facebook_router.post("/campaigns")
async def get_facebook_campaigns(access_token: str, ads_account_list: List[str], fields: str):
    response = []
    for ads_account_id in ads_account_list:
        url = 'https://graph.facebook.com/v8.0/{}/campaigns?access_token={}&&fields={}'.format(ads_account_id, access_token, fields)
        res = requests.get(url)
        if res.status_code == 200:
            response += res.json()['data']
        else:
            response += []
    return response


@facebook_router.post("/save-user")
async def create_facebook_user(user: FacebookUser):
    created_user = facebook_user_collection.insert_one(user.dict(by_alias=True))
    return user


@facebook_router.post("/save-adaccounts")
async def create_facebook_adaccounts(ad_accounts: FacebookAdAccountlist):
    ad_account_list = []
    for item in ad_accounts.ads_account_list:
        ad_account_list.append(item.dict(by_alias=True))
    created_ad_accounts = facebook_ad_accounts_collection.insert_many(ad_account_list)
    return ad_accounts


@facebook_router.get("/pages")
async def get_facebook_pages(userID: str, access_token: str, fields: str):
    try:
        url = 'https://graph.facebook.com/v8.0/{}/accounts?access_token={}&fields={}'.format(userID, access_token, fields)
        response = requests.get(url)
        return response.json()
    except Exception as e:
        return {'error': str(e)}
