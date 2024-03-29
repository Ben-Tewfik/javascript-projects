import get from "./getElement.js";
const mealSection = get(".single-meal");
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
const fetchSingleMeal = async () => {
  const query = window.location.search;
  const params = new URLSearchParams(query);
  const id = params.get("id");
  try {
    mealSection.innerHTML = `<div class="loading single-meal-loading"></div>`;
    const response = await fetch(`${url}${id}`);
    const { meals } = await response.json();
    const meal = meals[0];
    return meal;
  } catch (error) {
    console.log(error);
  }
};

export default fetchSingleMeal;
