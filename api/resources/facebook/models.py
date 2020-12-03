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
    id: str
    account_id: str
    user_id: str
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


class AdAccount(BaseModel):
    name: str
    account_id: str
    auto_track: bool
    connected: bool


class Page(BaseModel):
    access_token: str
    category: str
    id: str
    lead_sync: bool
    name: str
    tasks: List[str]


class CTA(BaseModel):
    name: str
    value: str


class CreateCampaign(BaseModel):
    uuid: str = str(uuid.uuid4())
    ad_account: AdAccount
    page: Page
    campaign: str
    body_text: str
    heading: str
    cta: CTA


class Campaign(BaseModel):
    name: str
    objective: str
    status: str
    special_ad_categories: str


class AdsSet(BaseModel):
    name: str
    optimization_goal: str
    billing_event: str
    daily_budget: Optional[float]
    lifetime_budget: Optional[float]
    targeting: dict
    status: str
    bid_amount: float
    start_time: str
    end_time: str


class LinkData(BaseModel):
    image_hash: Optional[str]
    link: Optional[str]
    message: Optional[str]
    call_to_action: Optional[dict]
    video_id: Optional[str]
    image_url: Optional[str]


class ObjectStorySpec(BaseModel):
    link_data: LinkData
    page_id: str


class AdsCreative(BaseModel):
    name: str
    object_story_spec: ObjectStorySpec


class AdsPayload(BaseModel):
    campaign: Campaign
    ads_set: AdsSet
    ads_creative: AdsCreative
