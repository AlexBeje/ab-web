const skillsCard = document.querySelectorAll(".my-skills-card");
const skillsCardLogo = document.querySelectorAll(".my-skills-card__logo");
const skillsCardDetails = document.querySelectorAll(".my-skills-card__details");

const cards = [
  "firstCard",
  "secondCard",
  "thirdCard",
  "forthCard",
  "fifthCard",
  "sixthCard",
];

const skillsCardData = {
  firstCard: {
    logo: "url(/assets/react.svg)",
    details:
      "Advanced React understanding (Typescript binding / TSX comprehension, Hooks manipulation, styling skills, etc.).",
  },
  secondCard: {
    logo: "url(/assets/xd.svg)",
    details:
      "Adobe Xd  manipulation knowledge (component handling, ux and ui intelligence).",
  },
  thirdCard: {
    logo: "url(/assets/ai.svg)",
    details:
      "Design understanding and control utilising Adobe's design software, Illustrator.",
  },
  forthCard: {
    logo: "url(/assets/angular.svg)",
    details:
      "Developer skills towards Google's framework, Angular (use of Angular CLI, Unit and E2E Testing, etc.).",
  },
  fifthCard: {
    logo: "url(/assets/vue.svg)",
    details:
      "Understanding of all the new features enclosed inside the Vue.js Freamework. ",
  },
  sixthCard: {
    logo: "url(/assets/ps.svg)",
    details:
      "Handling of photos and graphic design products using Adobe Photoshop software.",
  },
};

cards.forEach((card, index) => {
  skillsCardLogo[index].style.backgroundImage = skillsCardData[card].logo;
  skillsCardDetails[index].innerHTML = skillsCardData[card].details;
});
