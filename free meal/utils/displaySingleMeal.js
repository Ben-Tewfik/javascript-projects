import get from "./getElement.js";

const mealSection = get(".single-meal");

function displaySingleMeal(meal) {
  const { strMeal: name, strMealThumb: image, strInstructions: desc } = meal;
  let ingredientsArr = [];
  for (let i = 0; i <= 20; i++) {
    let ingredient = meal[`strIngredient${i}`];
    let measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredientsArr.push(`${measure} ${ingredient}`);
    }
  }
  const ingredients = ingredientsArr
    .map(ingredient => {
      return `<li>
      <i class="fa-solid fa-square-check check-icon"></i>
      ${ingredient}</li>`;
    })
    .join("");
  mealSection.innerHTML = `<img src=${image} alt=${name} class="single-meal-img" />
  <div class="single-meal-info">
    <h2 class="single-meal-title">${name}</h2>
    <ul class="single-meal-ingredients">${ingredients}</ul>
    <a href="index.html" class="single-meal-btn">all meals</a>
  </div>
  <div class="single-meal-desc-container">
    <h2>How to Make it</h2>
    <p class="single-meal-desc">${desc}</p>
  </div>`;
}
export default displaySingleMeal;
