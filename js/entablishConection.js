const io = require('socket.io-client')
const fs = require('fs')
const socket = io.connect('http://localhost:4000')

socket.on('welcome', (data, component) => {
  // fs.writeFileSync('image.json', JSON.stringify(data))
  const s = new component("1","1",'1')
  module.export = { component }
})
