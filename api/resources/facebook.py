import requests
import uuid
from typing import Optional
from fastapi import APIRouter, Depends, Form, Query
from resources.models.facebook import FacebookUser
from . import db

facebook_user_collection = db['facebook_user']

facebook_router = APIRouter()

@facebook_router.get("/adaccounts")
async def get_facebook_ad_accounts(access_token: str = None):
    url = 'https://graph.facebook.com/v8.0/me/adaccounts?access_token={}'.format(access_token)
    response = requests.get(url)
    return response.json()


@facebook_router.post("/save-adaccounts")
async def create_facebook_adaccounts(user: FacebookUser):
    created_user = facebook_user_collection.insert_one(user.dict(by_alias=True))
    return user
