function displayMenu() {
  let i = 0;
  const button = document.getElementsByClassName("navbar__button")[0];
  const navbar = document.getElementsByClassName("navbar")[0];
  const elementList = document.getElementsByClassName("navbar__lista")[0];
  const navbarEnlace = document.getElementsByClassName("navbar--enlace");
  button.style.display = "none";
  navbar.style.height = "100%";
  document.getElementsByClassName("navbar__closeButton")[0].style.display =
    "inherit";
  while (i < navbarEnlace.length) {
    navbarEnlace[i].style.display = "inherit";
    i++;
  }
  const closeButton = document.getElementsByClassName("navbar__closeButton")[0];
  closeButton.style.width = "100%";
}
function closeMenu() {
  let i = 0;
  const navbar = document.getElementsByClassName("navbar")[0];
  const button = document.getElementsByClassName("navbar__button")[0];
  const closeButton = document.getElementsByClassName("navbar__closeButton")[0];
  const navbarEnlace = document.getElementsByClassName("navbar--enlace");
  navbar.style.height = "auto";
  button.style.display = "inherit";
  closeButton.style.display = "none";
  while (i < navbarEnlace.length) {
    navbarEnlace[i].style.display = "none";
    i++;
  }
}

let navbar__button = document.getElementsByClassName("navbar__button")[0];
navbar__button.onclick = displayMenu;
let navbar__closebutton = document.getElementsByClassName(
  "navbar__closeButton"
)[0];
navbar__closebutton.onclick = closeMenu;
export { closeMenu, displayMenu };
