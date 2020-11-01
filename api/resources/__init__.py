import os
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()


mongoclient = MongoClient('mongodb://localhost:27017/')
db = mongoclient["lead_generation"]
