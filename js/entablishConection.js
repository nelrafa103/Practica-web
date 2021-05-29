const io = require('socket.io-client')
const variables = require('./config')
// const model = require('.')
// const body = new model.Body()
const socket = io.connect(`http://localhost:${variables.PORT}`)
socket.on('welcome', (data, component) => {
 // body.addHtmlElement(component, data)
  console.log(component)
})
