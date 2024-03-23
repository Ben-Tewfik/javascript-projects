import get from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
const img = get(".img");
const title = get(".title");
const value = get(".value");
const btns = [...document.querySelectorAll(".icon")];

async function showUser() {
  // fetch user
  const person = await fetchUser();
}

window.addEventListener("DOMContentLoaded", showUser);
