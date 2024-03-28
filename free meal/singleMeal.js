import fetchSingleMeal from "./utils/fetchSingleMeal.js";
import displaySingleMeal from "./utils/displaySingleMeal.js";

async function showSingleMeal() {
  const meal = await fetchSingleMeal();
  displaySingleMeal(meal);
}

window.addEventListener("DOMContentLoaded", () => {
  showSingleMeal();
});
