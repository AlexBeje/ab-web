const icons = document.querySelector(".nav__icon");
const burgerIcon = document.querySelector(".nav__icon--burger");
const closeIcon = document.querySelector(".nav__icon--close");
const navItems = document.querySelector(".nav__items")

function openMenu() {
  if (burgerIcon.classList.contains("d-block")) {
    closeIcon.className = "nav__icon--close d-block";
    burgerIcon.className = "nav__icon--burger d-none";
    navItems.className = "nav__items d-flex";
  } else {
    closeIcon.className = "nav__icon--close d-none";
    burgerIcon.className = "nav__icon--burger d-block";
    navItems.className = "nav__items d-none";
  }
}