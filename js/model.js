
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
  constructor(name) {
    this.pageName = name;
    this.contador = { cards: 0 };
  }
  cardHtml(name) {
    const htmlCode = {
      infoAndImage: ` <div class='card__element'>
    <div class='card__onLeft'>
    <h2 class='card__tittle'></h2>
    <p class='card__text'>
    </p>
    </div>
    <div class='card__onRight'>
    <img src='./images/home_image.svg'>
    </div>
    </div>`,
      logIn: `<div>
    <label for='fName'>First name:</label>
    <input id='fName' name='fname' type='text'>
    </div>
    <div>
    <label for='sName'>Second name:</label>
    <input id='sName' name='sname' type='text'>
    </div>
    <div>
    <label for='sName'>First Lastname:</label>
    <input id='fLastName' name='flastname' type='text'>
    </div>
    <div>
    <label for='sName'>Second Lastname:</label>
    <input id='sLastName' name='slastname' type='text'>
    </div>`,
    };
    return htmlCode[name];
  }
  counter(component) {
    this.contador[component]++;
    return this.contador[component];
  }
}
const dat = await fetch("js/data.json");
let images = await dat.json();
function resize(width, height) {}
export { user, DataBook, url, images, Body };
