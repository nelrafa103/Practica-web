
const requestURL = 'data/Users.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()
console.log(request.onload)
function call () {
  const x = request.response
  console.log(x)
  // return x
}

/* class User {
  constructor (object) {
    (this.name = object.name)(this.lastname = object.lastname)
  }

  fullName () {
    return this.name + ' ' + this.lastname
  }
}
*/
// console.log(users.model('hola'))

// requery["one"];
/*
console.log(request["squadName"]); */
/*
https://raw.githubusercontent.com/nelrafa103/Practica-web/develop/data/Users.json?token=AOPNDTIZZLRWEBBH2YJ2OJDAE5OQ6
*/
call()
