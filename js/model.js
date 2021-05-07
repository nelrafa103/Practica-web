const url = "./js/users.json";
class User {
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
    this.fName = this.data["users"]["first name"];
    this.sName = this.data["users"]["second name"];
    this.sLastName = this.data["users"]["first lastname"];
    this.fLastName = this.data["users"]["second lastname"];
    this.born = this.data["users"]["born"];
  }
}

class dataBook {
  constructor(URL) {
    this.url = URL;
  }
  inyectData(data) {
    var Usuario = new User(data);
    console.log(Usuario);
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

const dat = await fetch("js/data.json");
let images = await dat.json(); 
console.log(images);
function resize(width,height){};
export { User, dataBook, url };
