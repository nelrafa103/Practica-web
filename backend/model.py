import  pymongo
client = pymongo.MongoClient('localhost', 27017)
print(client.list_database_names())
db = client.myWeb
collection = db.images