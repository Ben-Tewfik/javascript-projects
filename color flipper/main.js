const colors = ["#403233", "#f19a3e", "#98d9c2"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
let lastRandomNumber;
btn.addEventListener("click", () => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * colors.length);
  } while (randomNumber === lastRandomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  lastRandomNumber = randomNumber;
});
