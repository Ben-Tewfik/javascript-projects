import get from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayPerson.js";

const btn = get(".random-btn");

async function showUser() {
  // fetch user
  const person = await fetchUser();
  //   display user
  displayUser(person);
}

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
