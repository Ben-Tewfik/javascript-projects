import fetchMeals from "./fetchMeals.js";
import displayMeals from "./displayMeals.js";

async function showMeals(url) {
  const meals = await fetchMeals(url);
  displayMeals(meals);
}
export default showMeals;
