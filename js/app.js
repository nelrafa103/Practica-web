import { DataBook, url, images, Body } from "./model.js";
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();
let w = new Body("index");
//w.cardHtml("infoAndImage")
const primeraConexion = new DataBook(url);
primeraConexion.initialize();
function addImageOnFront() {
  const introductionImage = document.getElementById("home-image");
  const directionUrl = String(images.image1.url);
  introductionImage.src = directionUrl;
}
function changeTheme() {
  const actualTime = new Date();

  console.log(actualTime.getHours());
  const bodySelector = document.getElementsByTagName("body")[0];
  const actualHour = actualTime.getHours();
  if (actualHour >= 18) {
    bodySelector.style.backgroundColor = "gray";
    bodySelector.style.color = "white";
  }
}

class Card {
  #htmlObject;
  #content;
  #counter;
  constructor(className, content) {
    this.htmlObject = className;
    this.content = content;
    this.counter = w.counter("cards") - 1;
  }
  resize() {}

  createElement(cardType) {
    const cardSection = document.getElementsByClassName("cards");
    cardSection[0].insertAdjacentHTML("afterbegin", w.cardHtml(cardType));
  }
  addContent(content) {
    const cardContent =
    document.getElementsByClassName("card__text")[this.counter];
    console.log(this.counter);
    cardContent.textContent = content;
  }
  addTittle(tittle) {
    const cardTittle =
      document.getElementsByClassName("card__tittle")[this.counter];
    cardTittle.textContent = tittle;
  }
  getContent(content, tittle) {
    this.addContent(content);
    this.addTittle(tittle);
  }
}
let firstCard = new Card("super", "zero");
firstCard.createElement("infoAndImage");
let secondCard = new Card("super", "zero");
secondCard.createElement("infoAndImage");
firstCard.getContent(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Titulo"
);
secondCard.getContent(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Titulo"
);

function responsiveNavBar() {}
 
changeTheme();
addImageOnFront();
