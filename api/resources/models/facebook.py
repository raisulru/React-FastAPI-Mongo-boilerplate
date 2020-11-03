import uuid
from uuid import UUID
from typing import Optional, Set, List

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class PictureData(BaseModel):
    height: int
    width: int
    url: str
    is_silhouette: bool


class Picture(BaseModel):
    data: Optional[PictureData] = None


class FacebookUser(BaseModel):
    uuid: str = str(uuid.uuid4())
    name: str
    email: str
    accessToken: str
    graphDomain: str
    userID: str
    image: Optional[Picture] = None


class AdAccounts(BaseModel):
    uuid: str = str(uuid.uuid4())
    name: str
    act_account_id: str
    account_id: str
    userID: str
    auto_track: bool
    connected: bool


class FacebookAdAccountlist(BaseModel):
    ads_account_list: List[AdAccounts]


class PageList(BaseModel):
    uuid: str = str(uuid.uuid4())
    user_id: str
    access_token: str
    category: str
    page_id: str
    lead_sync: bool
    name: str
    tasks: List[str]


class FacebookPages(BaseModel):
    page_list: List[PageList]
