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

window.addEventListener("load", init);
