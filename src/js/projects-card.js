const cardTitle = document.querySelector(
  "#my-projects-card-0 .my-projects-card__title"
);
const cardSubtitle = document.querySelector(
  "#my-projects-card-0 .my-projects-card__subtitle"
);
const cardText = document.querySelector(
  "#my-projects-card-0 .my-projects-card__text"
);
const cardImg = document.querySelector(
  "#my-projects-card-0 .my-projects-card__img"
);
const cardButton = document.querySelector(
  "#my-projects-card-0 .my-projects-card__button"
);

const firstCard = document.querySelector(".my-projects-card__first");
const secondCard = document.querySelector(".my-projects-card__second");
const thirdCard = document.querySelector(".my-projects-card__third");

const data = {};
const cards = ["firstCard", "firstCard", "secondCard", "thirdCard"];

const projectsCardData = {
  firstCard: {
    title: "PIANO APP",
    subtitle: "React app",
    text:
      "Piano app, developed in Facebook's React framework, utilizing Typescript, Tailwind and Styled Components.",
    img: "url(/assets/first-card.png)",
    button: "https://piano.alexbejenaru.dev",
  },
  secondCard: {
    title: "POMODORO",
    subtitle: "React app",
    text:
      "Pomodoro was build in React.js framework using Typescript. After appling the funcionality, it was structured using Tailwind (CSS framework).",
    img: "url(/assets/second-card.png)",
    button: "https://pomodoro.alexbejenaru.dev",
  },
  thirdCard: {
    title: "CALCULATOR",
    subtitle: "React app",
    text:
      "Calculator app developed in React, making use of Typescript and Styled Components library.",
    img: "url(/assets/third-card.png)",
    button: "https://calculator.alexbejenaru.dev",
  },
};

cards.map((card, index) => {
  data[`cardTitle${index}`] = document.querySelector(
    `#my-projects-card-${index} .my-projects-card__title`
  );
  data[`cardTitle${index}`].innerHTML = projectsCardData[card].title;

  data[`cardSubtitle${index}`] = document.querySelector(
    `#my-projects-card-${index} .my-projects-card__subtitle`
  );
  data[`cardSubtitle${index}`].innerHTML = projectsCardData[card].subtitle;

  data[`cardText${index}`] = document.querySelector(
    `#my-projects-card-${index} .my-projects-card__text`
  );
  data[`cardText${index}`].innerHTML = projectsCardData[card].text;

  data[`cardImg${index}`] = document.querySelector(
    `#my-projects-card-${index} .my-projects-card__img`
  );
  data[`cardImg${index}`].style.backgroundImage = projectsCardData[card].img;

  data[`cardButton${index}`] = document.querySelector(
    `#my-projects-card-${index} .my-projects-card__button`
  );
  data[`cardButton${index}`].setAttribute(
    "href",
    projectsCardData[card].button
  );
});

function selectFirstCard() {
  firstCard.className = "my-projects-card__first my-projects-card--active";
  secondCard.className = "my-projects-card__second";
  thirdCard.className = "my-projects-card__third";

  cardImg.style.backgroundImage = projectsCardData.firstCard.img;
  cardTitle.innerHTML = projectsCardData.firstCard.title;
  cardSubtitle.innerHTML = projectsCardData.firstCard.subtitle;
  cardText.innerHTML = projectsCardData.firstCard.text;
}

function selectSecondCard() {
  firstCard.className = "my-projects-card__first";
  secondCard.className = "my-projects-card__second my-projects-card--active";
  thirdCard.className = "my-projects-card__third";

  cardImg.style.backgroundImage = projectsCardData.secondCard.img;
  cardTitle.innerHTML = projectsCardData.secondCard.title;
  cardSubtitle.innerHTML = projectsCardData.secondCard.subtitle;
  cardText.innerHTML = projectsCardData.secondCard.text;
}

function selectThirdCard() {
  firstCard.className = "my-projects-card__first";
  secondCard.className = "my-projects-card__second";
  thirdCard.className = "my-projects-card__third my-projects-card--active";

  cardImg.style.backgroundImage = projectsCardData.thirdCard.img;
  cardTitle.innerHTML = projectsCardData.thirdCard.title;
  cardSubtitle.innerHTML = projectsCardData.thirdCard.subtitle;
  cardText.innerHTML = projectsCardData.thirdCard.text;
}

function navigateTo() {
  if (
    firstCard.className === "my-projects-card__first my-projects-card--active"
  ) {
    cardButton.setAttribute("href", projectsCardData.firstCard.button);
  } else if (
    secondCard.className === "my-projects-card__second my-projects-card--active"
  ) {
    cardButton.setAttribute("href", projectsCardData.secondCard.button);
  } else if (
    thirdCard.className === "my-projects-card__third my-projects-card--active"
  ) {
    cardButton.setAttribute("href", projectsCardData.thirdCard.button);
  }
}
