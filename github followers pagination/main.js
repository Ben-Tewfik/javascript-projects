import get from "./utils/getElement.js";
import fetchFollowers from "./utils/fetchFollowers.js";
import displayFollowers from "./utils/displayFollowers.js";

async function init() {
  const followers = await fetchFollowers();
  displayFollowers(followers);
}

window.addEventListener("load", init);
