from typing import Optional
from fastapi import APIRouter, Depends, Form, Query

facebook_router = APIRouter()

@facebook_router.get("/pages")
async def facebook_pages():
    
    return {"msg": "Hello Facebook"}