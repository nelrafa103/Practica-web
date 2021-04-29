import { User,url } from "./model.js";
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  const cuentaAbierta = new User(xhr.response);
  cuentaAbierta.initialize();
};

