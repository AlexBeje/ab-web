function sendMail() {
  let name = document.querySelector(".contact-page__name");
  let subject = document.querySelector(".contact-page__subject");
  let text = document.querySelector(".contact-page__text");
  let composedSubject = `From: ${name.value} | Request: ${subject.value}`;
  window.open(`mailto:contact@alexbejenaru.dev?subject=${composedSubject}&body=${text.value}`);
}
