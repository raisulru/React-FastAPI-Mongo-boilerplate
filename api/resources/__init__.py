import os
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()


mongoclient = MongoClient(os.getenv('MONGODB_URI'))
db = mongoclient["lead_generation"]
