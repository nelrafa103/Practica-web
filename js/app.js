import { User, url } from "./model.js";
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();

function load() {
  let response = xhr.response;
  return response;
}
xhr.onload = () => {
  let CuentaAbierta = new User(load());
  CuentaAbierta.initialize();
};