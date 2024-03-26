import fetchMeals from "./utils/fetchMeals.js";
import displayMeals from "./utils/displayMeals.js";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

async function showMeals() {
  const meals = await fetchMeals(url);
  displayMeals(meals);
}

window.addEventListener("DOMContentLoaded", () => {
  showMeals();
});
