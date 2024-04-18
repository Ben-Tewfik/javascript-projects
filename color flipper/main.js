const colors = ["#403233", "#f19a3e", "#98d9c2"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
