import get from "./getElement.js";
const img = get(".img");
const title = get(".title");
const value = get(".value");
const btns = [...document.querySelectorAll(".icon")];

function displayUser(person) {
  title.textContent = `Hi, My name is`;
  value.textContent = person.name;
  img.src = person.image;
  btns.forEach(btn => {
    btn.classList.remove("active");
  });
  btns[0].classList.add("active");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const label = btn.dataset.label;
      title.textContent = `Hi, My ${label} is`;
      value.textContent = person[label];
      btns.forEach(btn => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
}

export default displayUser;
