import get from "./getElement.js";
import showMeals from "./showMeals.js";
const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const form = get(".form");
const input = get("input[name]");
form.addEventListener("keyup", e => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  let newURL = `${baseURL}${value}`;
  showMeals(newURL);
});
