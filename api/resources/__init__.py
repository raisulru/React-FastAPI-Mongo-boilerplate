import os
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()


mongoclient = MongoClient('mongodb://0.0.0.0:27017/')
db = mongoclient["lead_generation"]
