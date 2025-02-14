from pymongo import MongoClient
import os

MONGO_URL = os.getenv(
    'MONGODB_URI', "mongodb://bubble:bubble@104.196.215.99:27017/Bubble")

print '-----------------------------------------'
print MONGO_URL
print ""

client = MongoClient(MONGO_URL)
db_pre_epl = client["Bubble"]
db = client["EPL"]

collection_pre_epl_id = "CROFRA_FINAL"
collection_id = "5b6efa5989d81053b5621f66"


print ('-----------------------------------------')
print "Migrating Tweets from Bubble to EPL for " + collection_pre_epl_id
print ""

for post in db_pre_epl[collection_pre_epl_id].find({}, {"_id": False}):
    print post
    db[collection_id].insert(post)
