import requests
from typing import Optional
from fastapi import APIRouter, Depends, Form, Query

facebook_router = APIRouter()

@facebook_router.get("/pages")
async def facebook_pages(access_token: str = None, user_id: int = None):
    url = 'https://graph.facebook.com/{}/accounts?access_token={}'.format(user_id, access_token)
    response = requests.get(url)
    return response.json()
