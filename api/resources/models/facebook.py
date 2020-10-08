import uuid
from uuid import UUID
from typing import Optional, Set

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
