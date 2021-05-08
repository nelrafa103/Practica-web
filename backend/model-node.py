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
    def addToFile(self):
     Conexion = open("/home/nelcido/Documentos/Practica-web/js/data.json","a") 
     Conexion.write(self.AppendImage()[0])
primeraClase = Conexion()
#print(primeraClase.AppendImage())
primeraClase.addToFile()