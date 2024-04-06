import get from "./utils/getElement.js";
import fetchFollowers from "./utils/fetchFollowers.js";
import displayFollowers from "./utils/displayFollowers.js";
// select element
const followersContainer = get(".followers");
const title = get(".section-title h1");

async function init() {
  const followers = await fetchFollowers();
  displayFollowers(followers, followersContainer);
  title.textContent = "pagination";
}

window.addEventListener("load", init);
