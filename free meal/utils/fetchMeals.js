import { showLoading } from "./toggleLoading.js";
async function fetchMeals(url) {
  showLoading();
  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
}

export default fetchMeals;
