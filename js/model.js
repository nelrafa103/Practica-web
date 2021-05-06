const url = "./js/users.json";
class User {
  constructor(entry) {
    this.data = entry;
    this.fName;
    this.sName;
    this.fLastName;
    this.sLastName;
    this.born;
    this.date;
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
class images {
  constructor(URL) {
    this.file;
    this.height;
    this.width;
    this.url = URL;
  }
  resize() {}

  delete() {}
}
export { User, dataBook, url };
