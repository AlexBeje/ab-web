const skillsCard = document.querySelectorAll(".my-skills-card");
const skillsCardLogo = document.querySelectorAll(".my-skills-card__logo");
const skillsCardTitle = document.querySelectorAll(".my-skills-card__title");
const skillsCardDetails = document.querySelectorAll(".my-skills-card__details");

const cards = ["firstCard", "secondCard", "thirdCard", "forthCard", "fifthCard", "sixthCard"];

const skillsCardData = {
  firstCard: {
    logo: "url(/assets/sass.svg)",
    title: "Sass",
    details:
      "Advanced css and sass knowledge (variables, extensions, importing, mixin, etc.).",
  },
  secondCard: {
    logo: "url(/assets/xd.svg)",
    title: "Adobe Xd",
    details:
      "Adobe Xd  manipulation knowledge (component handling, ux and ui intelligence).",
  },
  thirdCard: {
    logo: "url(/assets/ai.svg)",
    title: "Adobe Illustrator",
    details: "Design understanding and control utilising Adobe's design software, Illustrator.",
  },
  forthCard: {
    logo: "url(/assets/angular.svg)",
    title: "Angular",
    details: "Developer skills towards Google's framework, Angular (use of Angular CLI, Unit and E2E Testing, etc.).",
  },
  fifthCard: {
    logo: "url(/assets/vue.svg)",
    title: "Vue",
    details: "Understanding of all the new features enclosed inside the Vue.js Freamework. ",
  },
  sixthCard: {
    logo: "url(/assets/ps.svg)",
    title: "Adobe Photoshop",
    details: "Handling of photos and graphic design products using Adobe Photoshop software.",
  }
};

cards.forEach((card, index) => {
  skillsCardLogo[index].style.backgroundImage = skillsCardData[card].logo;
  skillsCardTitle[index].innerHTML = skillsCardData[card].title;
  skillsCardDetails[index].innerHTML = skillsCardData[card].details;
})
