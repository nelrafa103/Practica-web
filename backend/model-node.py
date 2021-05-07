import json
from model import collection
mongoDbData = collection
print(mongoDbData)
class Conexion(object):
    def __init__(self):
     self.url = "url"
  
    def AppendImage(self):
     images = []
     index = 0
     for document in mongoDbData.find({}):
      images.append(document[self.url])
      index+=1
     return images
primeraClase = Conexion()
print(primeraClase.AppendImage())