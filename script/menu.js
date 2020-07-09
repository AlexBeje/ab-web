const body = document.querySelector("body");

const burgerIcon = document.querySelector(".nav__icon--burger");
const closeIcon = document.querySelector(".nav__icon--close");
const navItems = document.querySelector(".nav__items")

function toggleMenu() {
  if (burgerIcon.classList.contains("d-block")) {
    closeIcon.className = "nav__icon--close d-block";
    burgerIcon.className = "nav__icon--burger d-none";
    navItems.className = "nav__items d-flex";
    body.style = "overflow: hidden";

  } else {
    closeIcon.className = "nav__icon--close d-none";
    burgerIcon.className = "nav__icon--burger d-block";
    navItems.className = "nav__items d-none";
    body.style = "overflow: auto";
  }
}