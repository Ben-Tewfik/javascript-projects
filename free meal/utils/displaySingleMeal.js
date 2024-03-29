import get from "./getElement.js";

const title = get(".single-meal-title");
const img = get(".single-meal-img");
const description = get(".single-meal-desc");
const ingredients = get(".single-meal-ingredients");

function displaySingleMeal(meal) {
  console.log(meal);
  const {
    strMeal: name,
    strMealThumb: image,
    strInstructions: desc,
    strYoutube: video,
  } = meal;

  let ingredientsArr = [];
  for (let i = 0; i <= 20; i++) {
    let ingredient = meal[`strIngredient${i}`];
    let measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredientsArr.push(`${measure} ${ingredient}`);
    }
  }
  ingredients.innerHTML = ingredientsArr
    .map(ingredient => {
      return `<li>
      <i class="fa-solid fa-square-check check-icon"></i>
      ${ingredient}</li>`;
    })
    .join("");
  img.src = image;
  title.textContent = name;
  description.textContent = desc;
}
export default displaySingleMeal;
