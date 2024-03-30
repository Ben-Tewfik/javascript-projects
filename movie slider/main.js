import get from "./utils/getElement.js";

const next = get(".next");
const prev = get(".prev");

let indexElement = 1;
showSlide(indexElement);

next.addEventListener("click", () => {
  moveSlide(1);
});
prev.addEventListener("click", () => {
  moveSlide(-1);
});

function moveSlide(n) {
  showSlide((indexElement += n));
}

function showSlide(n) {
  console.log(n);
  const slides = [...document.querySelectorAll(".slide")];
  if (n > slides.length) {
    indexElement = 1;
  }
  if (n < 1) {
    indexElement = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[indexElement - 1].style.display = "block";
}
