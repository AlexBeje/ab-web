const body = document.querySelector("body");

const burgerIcon = document.querySelector(".nav__icon--burger");
const closeIcon = document.querySelector(".nav__icon--close");
const navItems = document.querySelector(".nav__items");

const projectsPage = document.querySelector("#projects-page");
const skillsPage = document.querySelector("#skills-page");
const contactPage = document.querySelector("#contact-page");

function toggleMenu() {
  if (burgerIcon.classList.contains("d-block")) {
    closeIcon.className = "nav__icon--close d-block";
    burgerIcon.className = "nav__icon--burger d-none";
    navItems.className = "nav__items d-flex";
    projectsPage.style = "display: none;";
    skillsPage.style = "display: none;";
    contactPage.style = "display: none;";
  } else {
    closeIcon.className = "nav__icon--close d-none";
    burgerIcon.className = "nav__icon--burger d-block";
    navItems.className = "nav__items d-none";
    projectsPage.style = "display: block;";
    skillsPage.style = "display: block;";
    contactPage.style = "display: block;";
  }
}