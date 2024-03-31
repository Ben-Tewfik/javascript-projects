import get from "./utils/getElement.js";

const next = get(".next");
const prev = get(".prev");
const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];

let indexElement = 1;
showSlide(indexElement);

next.addEventListener("click", () => {
  moveSlide(1);
});
prev.addEventListener("click", () => {
  moveSlide(-1);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    changeDot(i + 1);
  });
});

function moveSlide(n) {
  showSlide((indexElement += n));
}
function changeDot(n) {
  showSlide((indexElement = n));
}
function showSlide(n) {
  console.log(n);
  if (n > slides.length) {
    indexElement = 1;
  }
  if (n < 1) {
    indexElement = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[indexElement - 1].style.display = "block";
  dots[indexElement - 1].classList.add("active");
}
