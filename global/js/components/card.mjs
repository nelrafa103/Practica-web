function addCard(htmlCode){
 const card = document.getElementsByClassName('cards')[0]
 card.insertAdjacentHTML('beforeend',htmlCode)
}

export {addCard}