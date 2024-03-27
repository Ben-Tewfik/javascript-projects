import showMeals from "./utils/showMeals.js";
import "./utils/form.js";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
window.addEventListener("DOMContentLoaded", () => {
  showMeals(url);
});
