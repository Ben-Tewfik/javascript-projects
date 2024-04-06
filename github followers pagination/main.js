import get from "./utils/getElement.js";
import fetchFollowers from "./utils/fetchFollowers.js";

async function init() {
  const followers = await fetchFollowers();
}

window.addEventListener("load", init);
