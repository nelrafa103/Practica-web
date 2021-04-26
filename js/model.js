const url = "./js/users.json";
let data;

class User {
    constructor()
    {
     this.data;
     this.fName;
     this.sName;
     this.fLastName;
     this.sLastName;
     this.born;
     this.date;
    }
    initialize()
    {
     this.fName = this.data['users']['first name'];
     this.sName = this.data['users']['second name'];
     this.sLastName = this.data['users']['first lastname'];
     this.fLastName = this.data['users']['second lastname'];
     this.born = this.data['users']['born'];
    }
}
let primerUsuario = new User();
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
  primerUsuario.data = xhr.response;
  primerUsuario.initialize();
};


