from pymongo import MongoClient
from bson import ObjectId

## ===== CONFIG ##
WATSON_PROCESSED_COLLECTION = "CROFRA_FINAL_PROCESSED_TWEETS"
## ===== ##

db = MongoClient("mongodb://root:root@localhost:27017/")['EPL']

tweets_cursor = db[WATSON_PROCESSED_COLLECTION].find()

unique_tweets = set()

for tweet_object in tweets_cursor:
    sequence = int(tweet_object['sequence'])
    if sequence not in unique_tweets:
        unique_tweets.add(sequence)
    else:
        db[WATSON_PROCESSED_COLLECTION].delete_one(
            {"_id": ObjectId(tweet_object["_id"])})
