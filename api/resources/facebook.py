import requests
from typing import Optional
from fastapi import APIRouter, Depends, Form, Query

facebook_router = APIRouter()

@facebook_router.get("/adaccounts")
async def facebook_pages(access_token: str = None):
    url = 'https://graph.facebook.com/v8.0/me/adaccounts?access_token={}'.format(access_token)
    response = requests.get(url)
    return {
        "data": [
            {
                "account_id": "336523120419968",
                "id": "act_336523120419968"
            },
            {
                "account_id": "336523120419967",
                "id": "act_336523120419967"
            }
        ],
        "paging": {
            "cursors": {
                "before": "MjM4NDI5NDQ3MzAyMDAxNjQZD",
                "after": "MjM4NDI5NDQ3MzAyMDAxNjQZD"
            }
        }
    }
