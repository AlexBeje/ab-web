const firstCard = document.querySelector(".my-card__first");
const secondCard = document.querySelector(".my-card__second");
const thirdCard = document.querySelector(".my-card__third");

const cardTitle0 = document.querySelector("#my-card-0 .my-card__title");
const cardSubtitle0 = document.querySelector("#my-card-0 .my-card__subtitle");
const cardText0 = document.querySelector("#my-card-0 .my-card__text");
const cardImg0 = document.querySelector("#my-card-0 .my-card__img");
const cardButton0 = document.querySelector("#my-card-0 .my-card__button");

const cardTitle1 = document.querySelector("#my-card-1 .my-card__title");
const cardSubtitle1 = document.querySelector("#my-card-1 .my-card__subtitle");
const cardText1 = document.querySelector("#my-card-1 .my-card__text");
const cardImg1 = document.querySelector("#my-card-1 .my-card__img");
const cardButton1 = document.querySelector("#my-card-1 .my-card__button");

const cardTitle2 = document.querySelector("#my-card-2 .my-card__title");
const cardSubtitle2 = document.querySelector("#my-card-2 .my-card__subtitle");
const cardText2 = document.querySelector("#my-card-2 .my-card__text");
const cardImg2 = document.querySelector("#my-card-2 .my-card__img");
const cardButton2 = document.querySelector("#my-card-2 .my-card__button");

const cardTitle3 = document.querySelector("#my-card-3 .my-card__title");
const cardSubtitle3 = document.querySelector("#my-card-3 .my-card__subtitle");
const cardText3 = document.querySelector("#my-card-3 .my-card__text");
const cardImg3 = document.querySelector("#my-card-3 .my-card__img");
const cardButton3 = document.querySelector("#my-card-3 .my-card__button");

const cardData = {
  firstCard: {
    title: "NEWSLETTER",
    subtitle: "Graphic Design",
    text:
      "Newsletter design about family hiking. Created during the final Practice of the UOC Graphic Design subject.",
    img: "url(../../assets/second-card.png)",
    button:
      "https://www.amazon.es/clouddrive/share/mt8wf4cfJUwSjWLHE8SAFjfWXbTyERnmi5BdHoZbVOJ",
  },
  secondCard: {
    title: "FREED0M",
    subtitle: "Video",
    text:
      "A “freedom” themed video created in iMovie Mac program. Developed while courising UOC Video subject.",
    img: "url(../../assets/first-card.png)",
    button: "https://www.youtube.com/watch?v=vMO1n7FL7ME",
  },
  thirdCard: {
    title: "WEBP4GE",
    subtitle: "Template",
    text:
      "Here is the template of the Alexandru Bejenaru Portfolio, designed in Figma and developed in Visual Studio.",
    img: "url(../../assets/third-card.png)",
    button:
      "https://www.figma.com/file/2emDRlJyx6XPLFfU7v499u/AB-Web?node-id=46%3A1",
  },
};

cardTitle0.innerHTML = cardData.firstCard.title;
cardSubtitle0.innerHTML = cardData.firstCard.subtitle;
cardText0.innerHTML = cardData.firstCard.text;
cardImg0.style.backgroundImage = cardData.firstCard.img;
cardButton0.setAttribute("href", cardData.firstCard.button);

cardTitle1.innerHTML = cardData.firstCard.title;
cardSubtitle1.innerHTML = cardData.firstCard.subtitle;
cardText1.innerHTML = cardData.firstCard.text;
cardImg1.style.backgroundImage = cardData.firstCard.img;
cardButton1.setAttribute("href", cardData.firstCard.button);

cardTitle2.innerHTML = cardData.secondCard.title;
cardSubtitle2.innerHTML = cardData.secondCard.subtitle;
cardText2.innerHTML = cardData.secondCard.text;
cardImg2.style.backgroundImage = cardData.secondCard.img;
cardButton2.setAttribute("href", cardData.secondCard.button);

cardTitle3.innerHTML = cardData.thirdCard.title;
cardSubtitle3.innerHTML = cardData.thirdCard.subtitle;
cardText3.innerHTML = cardData.thirdCard.text;
cardImg3.style.backgroundImage = cardData.thirdCard.img;
cardButton3.setAttribute("href", cardData.thirdCard.button);

function selectFirstCard() {
  firstCard.className = "my-card__first my-card--active";
  secondCard.className = "my-card__second";
  thirdCard.className = "my-card__third";

  cardTitle0.innerHTML = cardData.firstCard.title;
  cardSubtitle0.innerHTML = cardData.firstCard.subtitle;
  cardText0.innerHTML = cardData.firstCard.text;
  cardImg0.style.backgroundImage = cardData.firstCard.img;
}

function selectSecondCard() {
  firstCard.className = "my-card__first";
  secondCard.className = "my-card__second my-card--active";
  thirdCard.className = "my-card__third";

  cardTitle0.innerHTML = cardData.secondCard.title;
  cardSubtitle0.innerHTML = cardData.secondCard.subtitle;
  cardText0.innerHTML = cardData.secondCard.text;
  cardImg0.style.backgroundImage = cardData.secondCard.img;
}

function selectThirdCard() {
  firstCard.className = "my-card__first";
  secondCard.className = "my-card__second";
  thirdCard.className = "my-card__third my-card--active";

  cardTitle0.innerHTML = cardData.thirdCard.title;
  cardSubtitle0.innerHTML = cardData.thirdCard.subtitle;
  cardText0.innerHTML = cardData.thirdCard.text;
  cardImg0.style.backgroundImage = cardData.thirdCard.img;
}

function navigateTo() {
  if (firstCard.className === "my-card__first my-card--active") {
    cardButton0.setAttribute("href", cardData.firstCard.button);
  } else if (secondCard.className === "my-card__second my-card--active") {
    cardButton0.setAttribute("href", cardData.secondCard.button);
  } else if (thirdCard.className === "my-card__third my-card--active") {
    cardButton0.setAttribute("href", cardData.thirdCard.button);
  }
}
