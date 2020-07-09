const progressBar = document.querySelector(".progress-bar");

function getScrollPercent() {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  let progress = Math.round(
    ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
  );
  progressBar.style.width = `${progress}%`;
}

body.onscroll = function () {
  getScrollPercent();
};
