import get from "./utils/getElement.js";
import fetchFollowers from "./utils/fetchFollowers.js";
import displayFollowers from "./utils/displayFollowers.js";
import paginate from "./utils/paginate.js";
import displayButtons from "./utils/displayButtons.js";
// select element
const followersContainer = get(".followers");
const title = get(".section-title h1");
const btnContainer = get(".btn-container");

let index = 0;
let pages = [];

function setupUi() {
  displayFollowers(pages[index], followersContainer);
  displayButtons(btnContainer, pages, index);
}

async function init() {
  const followers = await fetchFollowers();
  title.textContent = "pagination";
  pages = paginate(followers);
  setupUi();
}

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;

  const newIndex = parseInt(e.target.dataset.index);
  if (e.target.classList.contains("page-btn")) {
    index = newIndex;
  }

  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUi();
});

window.addEventListener("load", init);
