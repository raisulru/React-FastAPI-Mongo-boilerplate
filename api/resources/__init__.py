import os
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()


mongoclient = MongoClient(os.getenv('MONGODB_URI'))
db = mongoclient["lead_generation"]
facebook_base_url = 'https://graph.facebook.com/v9.0'
client_id = os.getenv('CLIENT_ID')
client_secret = os.getenv('CLIENT_SECRET')
print(mongoclient, client_id, client_secret, '#########################333')