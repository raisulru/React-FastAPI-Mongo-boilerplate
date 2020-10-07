import os
from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from resources.facebook import facebook_router
from dotenv import load_dotenv
load_dotenv()


mongoclient = MongoClient(os.getenv('MONGODB_URI'))
app = FastAPI()

origins = [
    "https://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(facebook_router, prefix='/facebook')

@app.get("/")
def read_root():
    return {"Hello": "World"}
