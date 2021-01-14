import time
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from keycloak import KeycloakOpenID

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

@app.middleware("http")
async def authorization_middleware(request: Request, call_next):
    try:
        token = request.headers["Authorization"].split(' ')[1]
    except Exception as e:
        return JSONResponse(status_code=400, content={'msg': 'Only Bearer token are supported'})

    keycloak_openid = KeycloakOpenID(
        server_url="http://localhost:8080/auth/",
        client_id="test_client",
        realm_name="test-realm"
    )

    try:
        userinfo = keycloak_openid.userinfo(token)
    except Exception as e:
        return JSONResponse(status_code=401, content={'msg': 'Token Not Valid'})

    # TODO
    # KEYCLOAK_PUBLIC_KEY = keycloak_openid.public_key()
    # options = {"verify_signature": True, "verify_aud": True, "verify_exp": True}
    # token_info = keycloak_openid.decode_token(token['access_token'], key=KEYCLOAK_PUBLIC_KEY, options=options)
    
    if userinfo:
        response = await call_next(request)
        return response
    else:
        return JSONResponse(status_code=401, content={'msg': 'JWT token Required'})
    

app.include_router(facebook_router, prefix='/facebook')
app.include_router(facebook_internal_router, prefix='/facebook')

@app.get("/")
def read_root():
    return {"Hello": "World"}
