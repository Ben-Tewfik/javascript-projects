import get from "./getElement.js";
import toggleBtn from "./toggleBtn.js";
const img = get(".img");
const title = get(".title");
const value = get(".value");
const btns = [...document.querySelectorAll(".icon")];

function displayUser(person) {
  title.textContent = `Hi, My name is`;
  value.textContent = person.name;
  img.src = person.image;
  toggleBtn(btns);
  btns[0].classList.add("active");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const label = btn.dataset.label;
      title.textContent = `Hi, My ${label} is`;
      value.textContent = person[label];
      toggleBtn(btns);
      btn.classList.add("active");
    });
  });
}

export default displayUser;
