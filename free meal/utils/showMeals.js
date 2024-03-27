import fetchMeals from "./fetchMeals.js";
import displayMeals from "./displayMeals.js";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

async function showMeals() {
  const meals = await fetchMeals(url);
  displayMeals(meals);
}
export default showMeals;
