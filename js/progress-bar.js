const progressBar = document.querySelector(".my-progress-bar");

function getScrollPercent() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
}

window.onscroll = function () {
  getScrollPercent();
};
