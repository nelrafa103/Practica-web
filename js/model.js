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
export { User, url };


