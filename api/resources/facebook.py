import requests
from typing import Optional
from fastapi import APIRouter, Depends, Form, Query

facebook_router = APIRouter()

@facebook_router.get("/pages")
async def facebook_pages(access_token: str = None, user_id: int = None):
    url = 'https://graph.facebook.com/{}/accounts?access_token={}'.format(user_id, access_token)
    response = requests.get(url)
    return {
    "data": [
        {
            "name": "Facebook Page 1",
            "access_token": "access token one",
            "id": "123"
        },
        {
            "name": "Facebook Page 2",
            "access_token": "access token two",
            "id": "1234"
        },
        {
            "name": "Facebook Page 3",
            "access_token": "access token three",
            "id": "12345"
        }]
    }
