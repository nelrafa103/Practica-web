import { User,dataBook, url } from "./model.js";
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();

let primeraConexion = new dataBook(url);
primeraConexion.initialize();
