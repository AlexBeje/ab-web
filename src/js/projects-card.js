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
    title: "NEWSLETTER",
    subtitle: "Graphic Design",
    text:
      "Newsletter design about family hiking. Created during the final Practice of the UOC Graphic Design subject.",
    img: "url(/assets/second-card.png)",
    button:
      "https://www.amazon.es/clouddrive/share/mt8wf4cfJUwSjWLHE8SAFjfWXbTyERnmi5BdHoZbVOJ",
  },
  secondCard: {
    title: "FREED0M",
    subtitle: "Video",
    text:
      "A “freedom” themed video created in iMovie Mac program. Developed while courising UOC Video subject.",
    img: "url(/assets/first-card.png)",
    button: "https://www.youtube.com/watch?v=vMO1n7FL7ME",
  },
  thirdCard: {
    title: "WEBP4GE",
    subtitle: "Template",
    text:
      "Here is the template of the Alexandru Bejenaru Portfolio, designed in Figma and developed in Visual Studio.",
    img: "url(/assets/third-card.png)",
    button:
      "https://www.figma.com/file/2emDRlJyx6XPLFfU7v499u/AB-Web?node-id=46%3A1",
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

  setTimeout(() => {
    cardTitle.innerHTML = projectsCardData.firstCard.title;
    cardSubtitle.innerHTML = projectsCardData.firstCard.subtitle;
    cardText.innerHTML = projectsCardData.firstCard.text;
  }, 200);
  cardImg.style.backgroundImage = projectsCardData.firstCard.img;
}

function selectSecondCard() {
  firstCard.className = "my-projects-card__first";
  secondCard.className = "my-projects-card__second my-projects-card--active";
  thirdCard.className = "my-projects-card__third";

  setTimeout(() => {
    cardTitle.innerHTML = projectsCardData.secondCard.title;
    cardSubtitle.innerHTML = projectsCardData.secondCard.subtitle;
    cardText.innerHTML = projectsCardData.secondCard.text;
  }, 200);
  cardImg.style.backgroundImage = projectsCardData.secondCard.img;
}

function selectThirdCard() {
  firstCard.className = "my-projects-card__first";
  secondCard.className = "my-projects-card__second";
  thirdCard.className = "my-projects-card__third my-projects-card--active";

  setTimeout(() => {
    cardTitle.innerHTML = projectsCardData.thirdCard.title;
    cardSubtitle.innerHTML = projectsCardData.thirdCard.subtitle;
    cardText.innerHTML = projectsCardData.thirdCard.text;
  }, 200);
  cardImg.style.backgroundImage = projectsCardData.thirdCard.img;
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
