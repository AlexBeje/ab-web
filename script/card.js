const firstCard = document.querySelector(".my-card__first");
const secondCard = document.querySelector(".my-card__second");
const thirdCard = document.querySelector(".my-card__third");

const cardTitle = document.querySelector(".my-card__title");
const cardSubtitle = document.querySelector(".my-card__subtitle");
const cardText = document.querySelector(".my-card__text");
const cardImg = document.querySelector(".my-card__img");

const cardData = {
  firstCard: {
    title: "FREED0M",
    subtitle: "Video",
    text:
      "A “freedom” themed video created in iMovie Mac program. Developed while courising UOC Video subject.",
    img: "url(../../assets/first-card.png)",
  },
  secondCard: {
    title: "NEWSLETTER",
    subtitle: "Graphic Design",
    text: "Newsletter design about family hiking. Created during the final Practice of the UOC Graphic Design subject.",
    img: "url(../../assets/second-card.png)",
  },
  thirdCard: {
    title: "WEBP4GE",
    subtitle: "Template",
    text:
      "Here is the template of the Alexandru Bejenaru Portfolio, designed in Figma and developed in Visual Studio.",
    img: "url(../../assets/third-card.png)",
  },
};

cardTitle.innerHTML = cardData.firstCard.title;
cardSubtitle.innerHTML = cardData.firstCard.subtitle;
cardText.innerHTML = cardData.firstCard.text;
cardImg.style.backgroundImage = cardData.firstCard.img;

function selectFirstCard() {
  firstCard.className = "my-card__first my-card--active";
  secondCard.className = "my-card__second";
  thirdCard.className = "my-card__third";

  cardTitle.innerHTML = cardData.firstCard.title;
  cardSubtitle.innerHTML = cardData.firstCard.subtitle;
  cardText.innerHTML = cardData.firstCard.text;
  cardImg.style.backgroundImage = cardData.firstCard.img;
}

function selectSecondCard() {
  firstCard.className = "my-card__first";
  secondCard.className = "my-card__second my-card--active";
  thirdCard.className = "my-card__third";

  cardTitle.innerHTML = cardData.secondCard.title;
  cardSubtitle.innerHTML = cardData.secondCard.subtitle;
  cardText.innerHTML = cardData.secondCard.text;
  cardImg.style.backgroundImage = cardData.secondCard.img;
}

function selectThirdCard() {
  firstCard.className = "my-card__first";
  secondCard.className = "my-card__second";
  thirdCard.className = "my-card__third my-card--active";

  cardTitle.innerHTML = cardData.thirdCard.title;
  cardSubtitle.innerHTML = cardData.thirdCard.subtitle;
  cardText.innerHTML = cardData.thirdCard.text;
  cardImg.style.backgroundImage = cardData.thirdCard.img;
}

function navigateTo() {
  if (firstCard.className === "my-card__first my-card--active") {
    location.href = "https://www.youtube.com/watch?v=vMO1n7FL7ME";
  } else if (secondCard.className === "my-card__second my-card--active") {
    location.href = "https://www.amazon.es/clouddrive/share/mt8wf4cfJUwSjWLHE8SAFjfWXbTyERnmi5BdHoZbVOJ";
  } else if (thirdCard.className === "my-card__third my-card--active") {
    location.href = "https://www.figma.com/file/2emDRlJyx6XPLFfU7v499u/AB-Web?node-id=46%3A1";
  }
}
