import get from "./getElement.js";

const title = get(".single-meal-title");
const img = get(".single-meal-img");
const description = get(".single-meal-desc");
function displaySingleMeal(meal) {
  console.log(meal);
  const { strMeal: name, strMealThumb: image, strInstructions: desc } = meal;
  img.src = image;
  title.textContent = name;
  description.textContent = desc;
}
export default displaySingleMeal;
