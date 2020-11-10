from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from resources.facebook.facebook_api import facebook_router
from resources.facebook.internal_api import facebook_internal_router


app = FastAPI()

origins = [
    "https://localhost:3000",
    "https://dev.roboket.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(facebook_router, prefix='/facebook')
app.include_router(facebook_internal_router, prefix='/facebook')

@app.get("/")
def read_root():
    return {"Hello": "World"}
