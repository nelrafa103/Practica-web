import { user, dataBook, url ,images} from './model.js'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.send()
//const Os =  import('os')
const primeraConexion = new dataBook(url)
primeraConexion.initialize()
function addImageOnFront () {
  let introductionImage = document.getElementById("home-image")
  let directionUrl =  String(images["image1"]["url"] )
  introductionImage.src =  directionUrl
}

addImageOnFront();