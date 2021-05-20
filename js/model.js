const s = require('./entablishConection')
console.log(s.component)
//require('modules')
const url = "./js/users.json";
class user {
  #data;
  #fName;
  #sName;
  #fLastName;
  #sLastName;
  #born;
  #date;
  constructor(entry) {
    this.#data = entry;
    this.#fName;
    this.#sName;
    this.#fLastName;
    this.#sLastName;
    this.#born;
    this.#date;
  }
  initialize() {
    this.#fName = this.#data["users"]["first name"];
    this.#sName = this.#data["users"]["second name"];
    this.#sLastName = this.#data["users"]["first lastname"];
    this.#fLastName = this.#data["users"]["second lastname"];
    this.#born = this.#data["users"]["born"];
  }
}

class DataBook {
  constructor(URL) {
    this.url = URL;
  }
  inyectData(data) {
    var Usuario = new user(data);
  }
  initialize() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", this.url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      this.inyectData(xhr.response);
    };
  }
}
class Body {
  #pageName;
  #contador;
  #htmlCode;
  constructor(name) {
    this.pageName = name;
    this.contador = { cards: 0 };
    this.htmlCode;
  }
  cardHtml(name) {
    return
  }
  addHtmlElement(){

  }
  counter(component) {
    this.contador[component]++;
    return this.contador[component];
  }
}
/*const dat = await fetch("js/data.json");
let images = await dat.json();*/
function resize(width, height) {}
//export { user, DataBook, url, images, Body };
