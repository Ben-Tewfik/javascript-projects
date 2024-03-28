import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const mealsContainer = get(".meals-container");
const title = get(".title");
function displayMeals(meals) {
  if (!meals) {
    hideLoading();
    title.textContent = "sorry, no meal was found";
    mealsContainer.innerHTML = null;
    return;
  }
  const newMeals = meals
    .map(meal => {
      const { idMeal: id, strMeal: title, strMealThumb: img } = meal;
      return `<a href="singleMeal.html" class="meal-link">
        <article class="meal-container">
          <img
            src=${img}
            ,
            alt=${title}
            class="meal-img"
          />
          <div class="meal-title" title=${title}>${
        title.length > 25 ? `${title.slice(0, 22)}...` : title
      }</div>
        </article>
      </a>`;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  mealsContainer.innerHTML = newMeals;
}
export default displayMeals;
