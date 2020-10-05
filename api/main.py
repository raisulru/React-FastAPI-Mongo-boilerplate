from typing import Optional
from fastapi import FastAPI
from resources.facebook import facebook_router

app = FastAPI()

app.include_router(facebook_router, prefix='/facebook')

@app.get("/")
def read_root():
    return {"Hello": "World"}
