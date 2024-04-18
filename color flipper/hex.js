const hexColors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomNumber()];
  }
  document.body.style.backgroundColor = hex;
  color.textContent = hex;
});
function randomNumber() {
  return Math.floor(Math.random() * hexColors.length);
}
