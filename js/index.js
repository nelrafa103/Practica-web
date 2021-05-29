const io = require('socket.io-client')
const variables = require('./config')
const socket = io.connect(`http://localhost:${variables.PORT}`)

class Body {
  addHtmlElement (htmlCode, className) {
    const cardSection = document.getElementsByClassName(className)
    cardSection[0].insertAdjacentHTML('afterbegin', htmlCode)
  }

  displayMenu () {
   const buttonMenu = document.getElementsByClassName()
   
  }
}

socket.on('welcome', (data, component) => {
  // body.addHtmlElement(component, data)
  console.log(component)
})
